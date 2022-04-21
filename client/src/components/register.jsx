import React from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import * as userService from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/react-toastify.esm";

class Register extends Form {
  state = {
    data: { username: "", email: "", password: "", password2: "", name: "" },
    errors: { username: "", email: "", password: "", password2: "", name: "" },
  };
  schema = {
    name: Joi.string().required().label("Full Name"),
    username: Joi.string().required().label("Username"),
    email: Joi.string().required().label("Email ID"),
    password: Joi.string().required().label("Password"),
    password2: Joi.string().required().label("Confirm Password"),
  };
  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      console.log(response);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      window.location = "/dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        //const errors = { ...this.state.errors };
        toast.error("User Already Registered");
        // this.setState({ errors });
      }
    }
  };
  render() {
    const { data, errors } = this.state;
    if (localStorage.getItem("token")) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <React.Fragment>
        <ToastContainer />
          <section class="">
            <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
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
                                <Input value={data.name} 
                                  placeholder="Name"
                                  label="Name"
                                  onChange={this.handleChange}
                                  name="name"
                                  type="text"
                                  style={{textAlign: 'left'}}
                                  error={errors.name} id="form3Example1" class="form-control" />
                              </div>

                          <div class="form-outline mb-4">
                            <Input id="form3Example2" class="form-control"
                            name="username"
                            value={data.username}
                            label="Username"
                            type="text"
                            onChange={this.handleChange}
                            error={errors.username}/>
                          </div>

                          <div class="form-outline mb-4">
                            <Input type="email" id="form3Example3" class="form-control" 
                            value={data.email}
                            onChange={this.handleChange}
                            label="Email ID"
                            name="email"
                            error={errors.email}/>
                          </div>

                          <div class="form-outline mb-4">
                            <Input type="password" id="form3Example4" class="form-control" 
                              value={data.password}
                              onChange={this.handleChange}
                              label="Password"
                              name="password"
                              error={errors.password}
                            />
                          </div>
                          <div class="form-outline mb-4">
                            <Input type="password" id="form3Example4" class="form-control" 
                              value={data.password2}
                              onChange={this.handleChange}
                              label="Confirm Password"
                              name="password2"
                              error={errors.password2}
                            />
                          </div>

                          <button className="btn btn-primary" disabled={this.validate()}>
                            Register
                          </button>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>      
      </React.Fragment>
    );
  }
}

export default Register;
