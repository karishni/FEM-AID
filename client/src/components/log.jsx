import React from "react";
import { Link, Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import "../App.css";
import Input from "../components/common/input";
import Form from "./common/form";
import { login } from "../services/authService";

// use programmatic navigation form login form to dashboard

// add functionality to show react toast if the user is redierected to different locations due to history
class Log extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {
      email: "",
      passowrd: "",
    },
  };
  schema = {
    email: Joi.string().required().label("Email ID"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = async () => {
    // call the server;
    try {
      const { data } = this.state;
      //console.log(data.email);
      const { data: jwt } = await login(data.email, data.password);
      localStorage.setItem("token", jwt);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/users/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Invalid Email Or Password");
      }
    }
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/dashboard" />;
    }
    const { data, errors } = this.state;
    return (
      // <section class="">
        <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)", height: '730px'}}>
          <div class="container">
            <div class="row gx-lg-5 align-items-center">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                  Join our community of <br />
                  <span class="text-primary">female <br /> healthcare</span>
                </h1>
                <p style={{color: "hsl(217, 10%, 50.8%)"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                  <div class="card-body py-5 px-md-5">
                    <form onSubmit={this.handleSubmit}>
                      
                      <div class="form-outline mb-4">
                        <Input id="form3Example1" class="form-control"
                          name="email"
                          value={data.email}
                          label="Email ID"
                          onChange={this.handleChange}
                          error={errors.email} />
                      </div>

                      <div class="form-outline mb-4">
                        <Input id="form3Example2" class="form-control"
                        name="password"
                        value={data.password}
                        label="Password"
                        onChange={this.handleChange}
                        error={errors.password}
                        type="password"/>
                      </div>

                      <div className="text-center">
                        <button
                          className="btn btn-primary m-3"
                          disabled={this.validate()}
                        >
                        Login
                        </button>
                      </div>

                    </form>
                  
                  <div className="container col-lg-3 col-md-6 border rounder mt-1 p-3 text-center" style={{maxWidth: '100%'}}>
                    New User? <Link to="/users/register">Register Here</Link>
                  </div>
                    
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      //</section>    
      
    );
  }
}

export default Log;
