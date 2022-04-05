import React from "react";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import Input from "./common/input";
import Form from "./common/form";
import http from "../services/httpService";
import { tagsEndPoint } from "../config.json";
import { createpost } from "../services/postCreateService";

class DiabetesForm extends Form {
  state = {
    data: { Pregnancies: "", Glucose: "", BloodPressure: "" },
    errors: { title: "", description: "", tags: [] },
    tags: [],
  };
  schema = {
    title: Joi.string().required().min(5).label("Title"),
    description: Joi.string().required().min(3).label("Description"),
    tags: Joi.array(),
  };
  handleTagChange = (tagID) => {
    console.log("hello");
    let data = this.state.data;
    const newtags = data.tags;
    const index = newtags.indexOf(tagID);
    if (index === -1) newtags.push(tagID);
    else newtags.splice(index, 1);
    data = {
      title: data.title,
      description: data.description,
      tags: newtags,
    };
    console.log(data);
    this.setState({ data });
  };
  async componentDidMount() {
    let tags = await http.get(tagsEndPoint);
    try {
      this.setState({ tags: tags.data });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Post Validation Failed!");
      }
    }
  }
  doSubmit = async () => {
    try {
      const { data } = this.state;
      console.log(data);
      const { response } = await createpost(data);
      console.log(response);
      window.location = "/dashboard";
    } catch (ex) {console.log(ex)}
  };
  render() {
    const { data, errors, tags } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="container-lg">
          <h1 className="text-center m-2">Diabetes Prediction</h1>
          <div
            className="container m-4 p-4 rounded"
            style={{ backgroundColor: "#F1F1F1" }}
          >
            <form onSubmit={this.handleSubmit}>
              <Input
                value={data.Pregnancies}
                onChange={this.handleChange}
                label="Number of Pregnancies"
                name="pregnancies"
                type="text"
                error={errors.title}
              />
              <div className="form-group">
                <Input
                  value={data.Glucose}
                  onChange={this.handleChange}
                  label="Glucose"
                  name="glucose"
                  type="text"
                  className="form-control"
                />
                {errors.description && (
                  <div className="alert-info">{errors.description}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="tags">Related Tags</label>
                <br />
                {errors.tags && <div className="alert-info">{errors.tags}</div>}
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary mt-4"
                  disabled={this.validate()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DiabetesForm;
