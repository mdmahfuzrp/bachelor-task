"use client";
import ErrorMessage from "@/utils/ErrorMessage";
import LoadingSpinner from "@/utils/LoadingSpinner";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const SignIn = () => {
  const router = useRouter();

  // showing message
  const [messageApi, contextHolder] = message.useMessage();

  // loading state
  const [loader, setLoader] = useState(false);

  // initial state here
  let validate = { email: "admin@gmail.com", password: "password" };

  // custom error state here
  const [customErr, setCustomErr] = useState({
    email: "",
    password: "",
  });

  // password show hide here
  const [isShowPass, setIsShowPass] = useState(false);

  // form hook here
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submission here
  const onSubmit = (data) => {
    if (!data.email.includes("@")) {
      setCustomErr((prev) => ({
        ...prev,
        email: "Please enter a valid email address!",
        password: "",
      }));
      return;
    } else if (validate.email.toLowerCase() !== data.email.toLowerCase()) {
      setCustomErr((prev) => ({
        ...prev,
        email: "Incorrect email address!",
        password: "",
      }));
      return;
    }

    if (data?.password?.length < 8) {
      setCustomErr((prev) => ({
        ...prev,
        password: "Please provide a valid password!",
        email: "",
      }));
      return;
    } else if (
      validate?.password?.toLowerCase() !== data?.password?.toLowerCase()
    ) {
      setCustomErr((prev) => ({
        ...prev,
        password: "Incorrect password!",
        email: "",
      }));
      return;
    }

    setCustomErr((prev) => ({
      ...prev,
      password: "",
      email: "",
    }));

    setLoader(true);

    messageApi
      .open({
        type: "loading",
        content: "Action in progress..",
        duration: 2.5,
      })
      .then(() => {
        setLoader(false);
        message.success("Login successful.", 2.5);
        router.push("/dashboard");
      });
    // .then(() => message.info("Loading finished", 2.5));
  };
  return (
    <>
      {contextHolder}
      <div className="container !pt-[20px] !pb-[50px]">
        <div className="border rounded-t-full mx-auto lg:w-10/12">
          <img
            src="/logo.png"
            alt="bachelor-task"
            className="max-w-[250px] mx-auto"
          />
        </div>
        <div className="lg:w-10/12 relative pb-14 py-10 px-10 rounded-b-lg bg-light50 border  mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" md:max-w-[350px] w-full"
          >
            <div className=" w-full md:max-w-[480px]">
              <h1 className="text-[20px] text-primary md:text-[26px] font-medium mb-7">
                Login and manage your projects in bachelors-task.
              </h1>
              <p className="text-primary">Email</p>
              <input
                {...register("email", { required: true })}
                placeholder="Email address"
                className="border text-secondary outline-none  px-4 w-full py-[10px] mt-1 rounded-md"
              />
              {errors.email && (
                <ErrorMessage message={"Email field is required!"} />
              )}
              {!errors?.email && customErr?.email && (
                <ErrorMessage message={customErr?.email} />
              )}
            </div>
            <div className=" w-full mt-5">
              <p className="text-primary">Password</p>
              <div className="relative">
                <input
                  {...register("password", { required: true })}
                  type={isShowPass ? "text" : "password"}
                  placeholder="Password"
                  className="border text-secondary outline-none px-4 w-full py-[10px] mt-1 rounded-md"
                />
                <div className="absolute top-1/2 mt-[4px] -translate-y-1/2 right-[12px] opacity-50">
                  <button
                    type="button"
                    onClick={() => setIsShowPass((prev) => !prev)}
                  >
                    {!isShowPass ? <FiEye /> : <FiEyeOff />}
                  </button>
                </div>
              </div>
              {errors.password && (
                <ErrorMessage message={"Password field is required!"} />
              )}
              {!errors?.password && customErr?.password && (
                <ErrorMessage message={customErr?.password} />
              )}
            </div>
            <button
              type="submit"
              className="bg-special w-full py-[6px] rounded-md shadow-md mt-4 text-primary border font-medium cursor-pointer hover:shadow-lg"
            >
              {loader ? <LoadingSpinner /> : "Submit"}
            </button>
          </form>
          <div className="relative hidden md:flex lg:max-w-[450px]">
            <img
              className="rounded-[10px] w-full"
              src="/images/auth/about7.jpg"
              alt=""
            />
            <img
              className="absolute top-[30%] hidden lg:flex xl:left-[-100px] lg:right-[-100px] slide_up_down"
              src="/images/auth/emailpad.png"
              alt=""
            />
          </div>

          <span className="text-[15px] text-secondary absolute bottom-4 text-center">
            Login with email:(admin@gmail.com) and password:(password).
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
