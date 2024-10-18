"use client";

import BackToHome from "@/components/BackToHome";
import { useFormik } from "formik";

import { FC, useState } from "react";
import * as Yup from "yup";
import Link from "next/link";

const Login: FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      nickname: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      nickname: Yup.string().required("Nickname required"),
      password: Yup.string()
        .min(6, "Password must have at least 6 characters")
        .required("Password must have at least 6 characters"),
    }),
    onSubmit: async () => {
      setLoading(true);
      setErrorMessage(null);
    },
  });

  return (
    <div>
      <BackToHome />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="mb-8">Log in to your account</h2>
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          {loading ? (
            <div className="text-center text-gray-700 mb-4">Please wait...</div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Login
              </h2>
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="nickname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nickname
                  </label>
                  <input
                    id="nickname"
                    name="nickname"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    onChange={formik.handleChange}
                    value={formik.values.nickname}
                  />
                  {formik.errors.nickname && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.nickname}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-300"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
                {errorMessage && (
                  <div className="text-red-500 text-center text-sm mt-2">
                    {errorMessage}
                  </div>
                )}
              </form>
            </>
          )}
        </div>
        <div>
          <Link href="/sign-up">
            <h2 className="text-lg p-2 text-blue-700 hover:scale-105 transform-transition duration-300 hover:text-blue-500">
              Not registered? Sing-Up
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
