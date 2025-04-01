"use client";
import Image from "next/image";
import React, { act, useEffect } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../validationSchema/validationSchema";
import InputField from "../inputField/InputField";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "@/network/authApi";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
function Login() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, formikHelper) => {
      try {
        const action = await dispatch(login(values)).unwrap();
        formikHelper.resetForm();

        setTimeout(() => {
          toast.success("login successful!");
        }, 500);

        router.push("/dashboard");
      } catch (err) {
        toast.error(
          err ? "email or password is not valid" : "Invalid credentials"
        );
      }
    },
  });
  // useEffect(() => {
  //   dispatch(
  //     register({
  //       email: "morsy77@gmail.com",
  //       password: "123456@Aa",
  //       name: "Mohamed Morsy",
  //       role: "admin",
  //     })
  //   );
  // }, []);
  return (
    <section className="sign-up h-screen bg-green-300 flex justify-center items-center p-4">
      <ToastContainer />
      <div className="container bg-white shadow-2xl p-8 rounded-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-center max-w-4xl">
        <div className="hidden md:block w-1/2">
          <Image
            src="/images/signin-g.svg"
            alt="sign-in-image"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
            Sign In
          </h2>
          <form
            className="flex flex-col space-y-4"
            onSubmit={formik.handleSubmit}
          >
            <InputField
              type="email"
              name="email"
              placeholder="Email Address"
              formik={formik}
            />
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              formik={formik}
            />

            <button
              type="submit"
              className="bg-green-600 cursor-pointer text-white font-bold py-3 rounded hover:bg-green-700 transition"
            >
              {loading ? "signing...." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
