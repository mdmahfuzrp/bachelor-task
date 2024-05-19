"use client";
import ErrorMessage from "@/utils/ErrorMessage";
import LoadingSpinner from "@/utils/LoadingSpinner";
import { setCookie } from "@/utils/cookies";
import { message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const SignIn = () => {
  const [error, setError] = useState("");
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
  const onSubmit = async (data) => {
    setError("");
    if (!data.email.includes("@")) {
      setCustomErr((prev) => ({
        ...prev,
        email: "Please enter a valid email address!",
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
    }

    setCustomErr((prev) => ({
      ...prev,
      password: "",
      email: "",
    }));

    setLoader(true);
    try {
      const url = "https://bachelor-task-server.vercel.app/api/auth";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      setCookie(process.env.NEXT_PUBLIC_ADMIN_SECRET, res?.data, 100);
      router.push("/users/dashboard");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    setLoader(false);
  };
  return (
    <>
      {contextHolder}
      <div className="container !h-screen !flex !items-center !justify-center flex-col">
        <div className="border bg-white rounded-t-full mx-auto lg:w-10/12">
          <Link href={"/users/dashboard"}>
            <img
              src="/logo.png"
              alt="bachelor-task"
              className="max-w-[250px] mx-auto"
            />
          </Link>
        </div>
        <div className="lg:w-10/12 relative pb-14 py-10 px-10 rounded-b-lg bg-light50 border  mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" md:max-w-[350px] w-full"
          >
            <div className=" w-full md:max-w-[480px]">
              <h1 className="text-[20px] text-primary md:text-[22px] font-semibold mb-7">
                JWT Authentication! <br /> We appreciate your privacy.
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
              {error && <ErrorMessage message={error} />}
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

          <span className="text-[15px] text-secondary absolute bottom-10 text-center">
            If you are new here !{" "}
            <Link href={"/create-account"} className="text-blue-500 underline">
              Create Account.
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
