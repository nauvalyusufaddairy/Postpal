// "use client";
// import { motion } from "framer-motion";
// import { VscError } from "react-icons/vsc";
// import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
// import { useValidationSchema } from "@/hooks/useValidationSchema";
// import { LoginValues, OnFocus, RegisterValues } from "@/types";
// import { useState } from "react";
// import { useAuth } from "@/hooks/useAuth";
// export default function SigninWithEmail() {
//   const { loginSchema } = useValidationSchema();
//   const { login, errorMessage } = useAuth();

//   const onfocus: OnFocus<LoginValues> = {
//     email: false,
//     password: false,
//   };
//   const [focus, setFocus] = useState(onfocus);

//   return (
//     <Formik
//       initialValues={{
//         email: "",
//         password: "",
//       }}
//       onSubmit={login}
//       validationSchema={loginSchema}
//     >
//       {({ handleSubmit, errors, touched }: FormikProps<LoginValues>) => (
//         <Form onSubmit={handleSubmit}>
//           <div className="w-screen h-screen bg-gray-200 flex items-center justify-center ">
//             <div className=" overflow-hidden w-[360px] h-[400px] bg-white relative  justify-center flex flex-row flex-wrap rounded-lg px-[36px] py-[42px] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
//               <motion.div
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.7 }}
//                 className="w-full flex flex-col gap-y-3"
//               >
//                 <motion.div
//                   initial={{ x: -120, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.9 }}
//                   className="w-full text-2xl mt-[16px] mb-[24px] text-center font-[500]"
//                 >
//                   {" "}
//                   Email Signin{" "}
//                 </motion.div>

//                 <div
//                   className={`w-full h-[32px]  rounded-md bg-slate-200 ${
//                     focus.email ? "border-teal-400 border-[1px]" : ""
//                   }
//                 ${
//                   touched.email && errors.email
//                     ? "border-red-400 border-[2px] bg-red-200"
//                     : ""
//                 }
//                 `}
//                 >
//                   <Field
//                     onFocus={() => setFocus({ ...focus, email: true })}
//                     className="w-full h-full bg-transparent rounded-md outline-none px-[8px] py-[3px]"
//                     name="email"
//                     placeholder="email"
//                     type="text"
//                   />
//                 </div>
//                 <div
//                   className={`w-full h-[32px]  rounded-md bg-slate-200 ${
//                     focus.password ? "border-teal-400 border-[1px]" : ""
//                   }
//                 ${
//                   touched.password && errors.password
//                     ? "border-red-400 border-[2px] bg-red-200"
//                     : ""
//                 }
//                 `}
//                 >
//                   <Field
//                     onFocus={() => setFocus({ ...focus, password: true })}
//                     className="w-full h-full bg-transparent rounded-md outline-none px-[8px] py-[3px] "
//                     name="password"
//                     placeholder="password "
//                     type="password"
//                   />
//                 </div>

//                 <div className="w-full h-fit flex items-center justify-center mt-3">
//                   <motion.button className="w-[50%] bg-teal-900 py-1 px-3 rounded-md text-white">
//                     submit
//                   </motion.button>{" "}
//                 </div>
//                 {errors.email || errors.password ? (
//                   <div>
//                     <div className="w-full h-[100px] mt-4 flex flex-col items-start overflow-y-scroll ">
//                       {/* email error*/}
//                       {errors.email && touched.email ? (
//                         <div className="w-full text-red-400 flex flex-row items-center gap-3 font-[500] text-[1rem] mb-2">
//                           <VscError />
//                           <ErrorMessage component="div" name="email" />
//                         </div>
//                       ) : (
//                         ""
//                       )}
//                       {/* password error */}
//                       {errors.password && touched.password ? (
//                         <div className="w-full text-red-400 flex flex-row items-center gap-3 font-[500] text-[1rem] mb-2">
//                           <VscError />
//                           <ErrorMessage component="div" name="password" />
//                         </div>
//                       ) : (
//                         ""
//                       )}

//                       {/* confirm password error */}
//                       {errorMessage.message !== "" ? (
//                         <div className="w-full text-red-400 flex flex-row items-center gap-3 font-[500] text-[1rem] mb-2">
//                           <VscError />
//                           {errorMessage.message}
//                         </div>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </motion.div>
//             </div>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { VscError } from "react-icons/vsc";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { useValidationSchema } from "@/hooks/useValidationSchema";
import { LoginValues, OnFocus, RegisterValues } from "@/types";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
export default function SigninWithEmail() {
  const { loginSchema } = useValidationSchema();
  const { login, errorMessage } = useAuth();

  const onfocus: OnFocus<LoginValues> = {
    email: false,
    password: false,
  };
  const [focus, setFocus] = useState(onfocus);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={login}
      validationSchema={loginSchema}
    >
      {({ handleSubmit, errors, touched }: FormikProps<LoginValues>) => (
        <Form onSubmit={handleSubmit}>
          <div className="w-screen h-screen bg-gray-200 flex items-center justify-center ">
            <div className=" overflow-hidden w-[360px] h-[400px] bg-white relative  justify-center flex flex-row flex-wrap rounded-lg px-[36px] py-[42px] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full flex flex-col gap-y-3"
              >
                <motion.div
                  initial={{ x: -120, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  className="w-full text-2xl mt-[16px] mb-[24px] text-center font-[500]"
                >
                  {" "}
                  Email Signin{" "}
                </motion.div>

                <div
                  className={`w-full h-[32px]  rounded-md bg-slate-200 ${
                    focus.email ? "border-teal-400 border-[1px]" : ""
                  }
                ${
                  touched.email && errors.email
                    ? "border-red-400 border-[2px] bg-red-200"
                    : ""
                }
                `}
                >
                  <Field
                    onFocus={() => setFocus({ ...focus, email: true })}
                    className="w-full h-full bg-transparent rounded-md outline-none px-[8px] py-[3px]"
                    name="email"
                    placeholder="email"
                    type="text"
                  />
                </div>
                <div
                  className={`w-full h-[32px]  rounded-md bg-slate-200 ${
                    focus.password ? "border-teal-400 border-[1px]" : ""
                  }
                ${
                  touched.password && errors.password
                    ? "border-red-400 border-[2px] bg-red-200"
                    : ""
                }
                `}
                >
                  <Field
                    onFocus={() => setFocus({ ...focus, password: true })}
                    className="w-full h-full bg-transparent rounded-md outline-none px-[8px] py-[3px] "
                    name="password"
                    placeholder="password "
                    type="password"
                  />
                </div>

                <div className="w-full h-fit flex items-center justify-center mt-3">
                  <motion.button className="w-[50%] bg-teal-900 py-1 px-3 rounded-md text-white">
                    submit
                  </motion.button>{" "}
                </div>
                {errors.email || errors.password ? (
                  <div>
                    <div className="w-full h-[100px] mt-4 flex flex-col items-start overflow-y-scroll ">
                      {/* email error*/}
                      {errors.email && touched.email ? (
                        <div className="w-full text-red-400 flex flex-row items-center gap-3 font-[500] text-[1rem] mb-2">
                          <VscError />
                          <ErrorMessage component="div" name="email" />
                        </div>
                      ) : (
                        ""
                      )}
                      {/* password error */}
                      {errors.password && touched.password ? (
                        <div className="w-full text-red-400 flex flex-row items-center gap-3 font-[500] text-[1rem] mb-2">
                          <VscError />
                          <ErrorMessage component="div" name="password" />
                        </div>
                      ) : (
                        ""
                      )}

                      {/* confirm password error */}
                      {errorMessage.message !== "" ? (
                        <div className="w-full text-red-400 flex flex-row items-center gap-3 font-[500] text-[1rem] mb-2">
                          <VscError />
                          {errorMessage.message}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
