"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
  remember: Yup.boolean(),
});

const page = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
                remember: false,
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <Field
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-blue-700 hover:bg-blue-600 duration-[0.2s] hover:scale-[0.97] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Signin
                  </button>

                  <p className="text-sm font-light text-gray-500">
                    Don’t have an account yet?
                    <Link
                      href="/signup"
                      className="font-medium text-primry-600 hover:underline"
                    >
                      Sign up
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

export default page;
