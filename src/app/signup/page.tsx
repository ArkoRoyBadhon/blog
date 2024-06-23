"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  home_phone: Yup.string().required("Required"),
  work_phone: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const Page = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <Formik
              initialValues={{
                email: "",
                home_phone: "",
                work_phone: "",
                password: "",
                confirmPassword: "",
                terms: false,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="name@company.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home_phone"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Phone (Home)
                    </label>
                    <Field
                      type="text"
                      name="home_phone"
                      id="home_phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="+8801........"
                    />
                    <ErrorMessage
                      name="home_phone"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="work_phone"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Phone (Work)
                    </label>
                    <Field
                      type="text"
                      name="work_phone"
                      id="work_phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="+8801........"
                    />
                    <ErrorMessage
                      name="work_phone"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm password
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Field
                        type="checkbox"
                        name="terms"
                        id="terms"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500"
                      >
                        I accept the{" "}
                        <a className="font-medium hover:underline" href="#">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="text-red-600 text-sm"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-blue-700 hover:bg-blue-600 duration-[0.2s] hover:scale-[0.97] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Create an account
                  </button>

                  <p className="text-sm font-light text-gray-500">
                    Already have an account?{" "}
                    <Link
                      href="/signin"
                      className="font-medium hover:underline"
                    >
                      Login here
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
