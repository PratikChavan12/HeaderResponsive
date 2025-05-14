import React from "react";
import { toast } from "react-toastify";
import welcome from "../assets/images/SonGoku.jpg"

const Login = () => {
  return (
    <>
      <div
        className="border d-flex justify-content-center align-items-center"
        style={{ height: "98vh", backgroundColor: "darkgray" }}
      >
        <div className="bg-danger d-flex flex-column w-25">
          <img src={welcome} alt="" className="object-fit-cover h-100"/>
        </div>
        <div className="bg-danger d-flex flex-column w-25">
          <div className="mb-3 ms-3 align-items-start  pt-2">
            <span className="fw-semibold fs-3">Login</span>
          </div>
          <div className="align-items-start mx-3 d-flex flex-column">
            <div className="d-flex flex-column w-100">
              <label>Email or Username</label>
              <input
                type="text"
                minLength={3}
                maxLength={12}
                name="username"
                placeholder="Enter Username"
                className="mt-1 p-1"
              />
            </div>
            <div className="d-flex flex-column mt-2 w-100">
              <label>Password</label>
              <input
                type="password"
                minLength={3}
                maxLength={12}
                name="password"
                placeholder="Enter Password"
                className="mt-1 p-1"
              />
            </div>
          </div>
          <div className="mt-3 mx-3">
            <p className="m-0 ">
              <a href="#" className="text-white">
                forgot password
              </a>
            </p>
            <button
              className="p-1 rounded-2 w-100 mt-1 mb-4 border-0"
              onClick={() => toast.info("On working!")}
            >
              LogIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
