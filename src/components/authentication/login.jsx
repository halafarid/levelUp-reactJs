import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";
import { useState } from 'react';

const Login = (props) => {
  const [state, setState] = useState({
     account: {
      email: "",
      password: "",
      type: "",
      isSaved: false
    },
    errors: {}
  })
  const schema = {
    email: Joi.string()
      .email()
      .lowercase()
      .required(),
      password: Joi.string()
      .required()
      .min(6),
      isSaved: Joi.required(),
      type: Joi.string().required()
    };
    const handleChange = ({ target }) => {
    const account = { ...state.account };
    account[target.name] = target.value;
    //set state
    console.log(account)
    setState({account });
  };
  const handleCheckBox = () => {
    const account = { ...state.account };
    account.isSaved = !account.isSaved;
    setState({...state,account });
  };
  const handleSubmit =async e => {
    e.preventDefault();
    //validate
    
    const errors = validate();
    if (errors === null) {
      setState({...state, errors:{} });
      // call backend
      const path=props.match.path;
      const account={...state.account}
      console.log(path)
      if(path=="/login"){
        
        const { data } = await axios.post(
          "http://localhost:3000/users/login",account
          );
        console.log(data)

          //Update State
          // props.onAdd(data);
          //Redirect to home Page
          props.history.replace("/home");
        }
        
        return;
      }
      //clone
      console.log("errors",errors)
      setState({...state, errors });

    
  };
  const validate = () => {
    const res = Joi.validate(state.account, schema, {
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

    return (
      <React.Fragment>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div
                className="login100-form-title"
                style={{ backgroundImage: "url(/assets/auth/bg-01.jpg)" }}
              >
                <span className="login100-form-title-1">Sign In</span>
              </div>

              <form
                className="login100-form validate-form"
                onSubmit={handleSubmit}
              >
                <div
                  className={
                    state.errors!=undefined&&state.errors.email
                      ? "wrap-input100 validate-input m-b-26 alert-validate"
                      : "wrap-input100 validate-input m-b-26 "
                  }
                  data-validate={
                    state.errors!=undefined&&state.errors.email == null
                      ? "Email is required"
                      : state.errors!=undefined&&state.errors.email
                  }
                >
                  <span className="label-input100">Email</span>
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />

                  <span className="focus-input100"></span>
                  {/* <MdError style={{ color: "red" }} /> */}
                </div>

                <div
                  className={
                    state.errors!=undefined&&state.errors.password
                      ? "wrap-input100 validate-input m-b-18 alert-validate"
                      : "wrap-input100 validate-input m-b-18"
                  }
                  data-validate={
                    state.errors!=undefined&&state.errors.password == null
                      ? "Password is required"
                      : state.errors!=undefined&&state.errors.password
                  }
                  onChange={handleChange}
                >
                  <span className="label-input100">Password</span>
                  <input
                    className="input100"
                    type="password"
                    name="password"
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
                    onClick={handleChange}
                  />{" "}
                  <span style={{ color: "#808080", marginRight: "10px" }}>
                    User
                  </span>
                  <input
                    className="radioInput"
                    type="radio"
                    name="type"
                    value="teacher"
                    onClick={handleChange}
                  />{" "}
                  <span style={{ color: "#808080" }}>Instructor</span>
                </div>
                <div className="flex-sb-m w-full p-b-30">
                  <div className="contact100-form-checkbox">
                    <input
                      className="input-checkbox100"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                      onClick={handleCheckBox}
                    />
                    <label className="label-checkbox100" htmlFor="ckb1">
                      Remember me
                    </label>
                  </div>

                  <div>
                    <Link to="/register" className="txt1">
                      New user? Register Here!
                    </Link>
                  </div>
                </div>
          
                  <button className="login100-form-btn" type="submit">
                    Login
                  </button>

              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }


export default Login;
