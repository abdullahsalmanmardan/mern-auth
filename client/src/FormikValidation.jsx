import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupValidtion } from "./singupValidation";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const FormikValidation = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidtion}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              {errors.name && touched.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              {errors.password && touched.password && <p className="text-red-500">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikValidation;
