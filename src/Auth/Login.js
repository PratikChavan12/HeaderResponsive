import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Button, Spinner } from "reactstrap";
import img1 from "../assets/images/blackhole.jpg";
import "../assets/css/style.css";
import {
  IoIosCloseCircleOutline,
  IoMdCheckmarkCircleOutline,
  IoMdEye,
  IoMdEyeOff,
} from "react-icons/io";
import { toast } from "react-toastify";

const Login = () => {
  const [pwdToggle, setPwdToggle] = useState(false);
  const [backBlured, setBackBlured] = useState(false);
  const [loginToast, setLoginToast] = useState(false);
  const [loginResultToast, setLoginResultToast] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (formData) => {
    toast.success("Form Submitted")
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          backgroundImage: `url(${img1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <form
          className={`rounded-2 d-flex flex-column backblured
           ${backBlured ? "bgblured" : ""}`}
          style={{ width: "350px" }}
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div className="mb-3 ms-3 align-items-start pt-2">
            <span className="fw-semibold fs-4 text-white">SignIn</span>
          </div>
          {loginToast ? (
            <>
              {loginResultToast === "" ? (
                <Alert
                  className="alert-icon mx-3 align-items-center d-flex py-2"
                  color="primary"
                >
                  <IoMdCheckmarkCircleOutline className="fs-5 me-2" />
                  <span className="fs-6">Login Successfully</span>
                </Alert>
              ) : (
                <Alert
                  className="alert-icon mx-3 align-items-center d-flex py-2"
                  color="danger"
                >
                  <IoIosCloseCircleOutline className="fs-5 me-2" />
                  <span className="fs-6">{loginResultToast}</span>
                </Alert>
              )}
            </>
          ) : (
            ""
          )}
          <div className="align-items-start mx-3 d-flex flex-column">
            <div className="d-flex flex-column w-100">
              <label className="text-white">Email</label>
              <input
                type="email"
                onFocus={() => setBackBlured(true)}
                onBlur={() => setBackBlured(false)}
                {...register("email", { required: "Email is required" })}
                maxLength={25}
                name="email"
                minLength={3}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                placeholder="Enter email"
                className="mt-1 p-2 rounded-1 bg-transparent border text-white"
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
            <div className="d-flex flex-column mt-2 w-100">
              <label className="text-white">Password</label>
              <div className="mt-1 position-relative">
                <span
                  className="d-flex align-items-center position-absolute end-0 pe-1"
                  style={{ top: "10px" }}
                  onClick={() => setPwdToggle(!pwdToggle)}
                >
                  {pwdToggle ? (
                    <IoMdEye className="me-2" color="black" size={22} />
                  ) : (
                    <IoMdEyeOff className="me-2" color="black" size={22} />
                  )}
                </span>
                <input
                  type={pwdToggle ? "text" : "password"}
                  onFocus={() => setBackBlured(true)}
                  onBlur={() => setBackBlured(false)}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  minLength={3}
                  maxLength={15}
                  name="password"
                  placeholder="Enter Password"
                  className="p-2 bg-transparent text-white border w-100 rounded-1 "
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>
          </div>
          <div className="mt-4 m-3">
            <Button
              type="submit"
              color="primary"
              disabled={loading}
              className="w-100"
            >
              {!loading ? "SignIn" : <Spinner size="sm" />}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
