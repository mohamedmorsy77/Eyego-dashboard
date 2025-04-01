"use client";
import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../validationSchema/validationSchema";
import InputField from "../inputField/InputField";
import Link from "next/link";

function SignOut() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="sign-up h-screen bg-green-300 flex justify-center items-center p-4">
      <div className="container bg-white shadow-2xl p-8 rounded-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-center max-w-4xl">
        <div className="hidden md:block w-1/2">
          <Image
            src="/images/signup-g.svg"
            alt="sign-up-image"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
            Sign Up
          </h2>
          <form
            className="flex flex-col space-y-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex space-x-2">
              <InputField
                type="text"
                name="firstName"
                placeholder="First Name"
                formik={formik}
              />
              <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                formik={formik}
              />
            </div>
            <InputField
              type="tel"
              name="phone"
              placeholder="Phone Number"
              formik={formik}
            />
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
              Sign Up
            </button>
            <div className=" font-medium text-gray-500">
              you dont have any account?{" "}
              <Link href="/sign-in" className=" text-green-400">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignOut;
