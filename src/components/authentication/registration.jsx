import React, { Component } from "react";

import Joi from "joi-browser";
import { Link } from "react-router-dom";

class Registration extends Component {
  state = {
    account: {
      name: "",
      email: "",
      password: "",
      type: "student",
      isSaved: false
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .email()
      .lowercase()
      .required(),
    password: Joi.string()
      .required()
      .min(8),
    isSaved: Joi.required()
  };
  handleChange = ({ target }) => {
    const account = { ...this.state.account };
    account[target.name] = target.value;
    //set state
    this.setState({ account });
  };
  handleCheckBox = () => {
    const account = { ...this.state.account };
    account.isSaved = !account.isSaved;
    this.setState({ account });
  };
  handleSubmit = e => {
    e.preventDefault();
    //validate

    const error = this.validate();
    if (error === null) {
      // call backend
      this.setState({ errors: {} });
      this.props.history.replace("/home");
      return;
    }
    //clone
    const errors = { ...this.state.errors };
    //edit
    errors["name"] = error.name;
    errors["email"] = error.email;
    errors["password"] = error.password;
    //set state
    this.setState({ errors });
    // console.log(this.state.errors);
    console.log(this.state.account);
  };
  validate = () => {
    const res = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (res.error === null) {
      return null;
    }
    const errors = {};

    for (const err of res.error.details) {
      errors[err.path] = err.message;
    }
    return errors;
  };
  render() {
    return (
      <React.Fragment>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div
                className="login100-form-title"
                style={{ backgroundImage: "url(/assets/auth/bg-01.jpg)" }}
              >
                <span className="login100-form-title-1">Registeration</span>
              </div>

              <form
                className="login100-form validate-form"
                onSubmit={this.handleSubmit}
              >
                {/* Name */}
                <div
                  className={
                    this.state.errors.name
                      ? "wrap-input100 validate-input m-b-26 alert-validate"
                      : "wrap-input100 validate-input m-b-26 "
                  }
                  data-validate={
                    this.state.errors.name == null
                      ? "Email is required"
                      : this.state.errors.name
                  }
                >
                  <span className="label-input100">Name</span>
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={this.handleChange}
                  />

                  <span className="focus-input100"></span>
                  {/* <MdError style={{ color: "red" }} /> */}
                </div>
                {/* Email */}
                <div
                  className={
                    this.state.errors.email
                      ? "wrap-input100 validate-input m-b-26 alert-validate"
                      : "wrap-input100 validate-input m-b-26 "
                  }
                  data-validate={
                    this.state.errors.email == null
                      ? "Email is required"
                      : this.state.errors.email
                  }
                >
                  <span className="label-input100">Email</span>
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  />

                  <span className="focus-input100"></span>
                  {/* <MdError style={{ color: "red" }} /> */}
                </div>
                {/* Password */}
                <div
                  className={
                    this.state.errors.password
                      ? "wrap-input100 validate-input m-b-18 alert-validate"
                      : "wrap-input100 validate-input m-b-18"
                  }
                  data-validate={
                    this.state.errors.password == null
                      ? "Password is required"
                      : this.state.errors.password
                  }
                  onChange={this.handleChange}
                >
                  <span className="label-input100">Password</span>
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Enter password"
                  />
                  <span className="focus-input100"></span>
                </div>

                <div className="m-b-18">
                  <input
                    className="radioInput"
                    type="radio"
                    name="type"
                    value="student"
                    onClick={this.handleChange}
                  />{" "}
                  <span style={{ color: "#808080", marginRight: "10px" }}>
                    Student
                  </span>
                  <input
                    className="radioInput"
                    type="radio"
                    name="type"
                    value="teacher"
                    onClick={this.handleChange}
                  />{" "}
                  <span style={{ color: "#808080" }}>Teacher</span>
                </div>
                <div className="flex-sb-m w-full p-b-30">
                  {/* CHECKNOX */}
                  <div className="contact100-form-checkbox">
                    <input
                      className="input-checkbox100"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                      onClick={this.handleCheckBox}
                    />
                    <label className="label-checkbox100" htmlFor="ckb1">
                      Keep me signed in.
                    </label>
                  </div>

                  <div>
                    <Link to="/login" className="txt1">
                      Have an account? SIGN IN!
                    </Link>
                  </div>
                </div>

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Registration;
