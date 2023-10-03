// "use client";
// import React, { useState } from "react";

// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
// export default function ConfirmSignup() {
//   const [data, setData] = useState("");
//   const initial = {
//     email: false,
//     password: false,
//     confirm_password: false,
//   };
//   const searchParams = useSearchParams();
//   const email = searchParams.get("email") as string;
//   const router = useRouter();

//   const [onfocus, setOnfocus] = useState(initial);
//   const handleSubmit = async (email: string, code: string) => {
//     await fetch("/api/confirm_signup", {
//       method: "POST",
//       body: JSON.stringify({ email, code }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(async (v) => {
//         if (v.status === 200) {
//           router.push("/signin");
//         }
//       })
//       .catch((err) => {
//         console.log("eerr", err);
//       });
//   };
//   console.log("data", data);

//   return (
//     <div className="w-screen h-screen ">
//       <div className="w-[350px] h-[568px] relative mx-auto mt-[77px] items-center flex flex-col rounded-lg px-[32px] py-[42px] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
//         <div className="text-2xl font-[500]">Confirm Registration</div>
//         <div className="w-full mt-[36px] flex-col gap-y-8">
//           <div
//             className={`w-full h-[42px] rounded-2xl ${
//               onfocus.email ? "border-teal-600 border-[2px]" : ""
//             } border-black border-[1.8px]  px-[2px] py-[2px] flex flex-row items-center gap-x-12 hover:cursor-pointer`}
//           >
//             <input
//               onChange={(v) => setData(v.target.value)}
//               onBlur={() => setOnfocus({ ...onfocus, email: false })}
//               onFocus={() => setOnfocus({ ...onfocus, email: true })}
//               placeholder="code"
//               type="text"
//               className="w-full h-full border-none outline-none px-4 py-2  rounded-2xl font-[500] text-black "
//             />
//           </div>
//         </div>

//         <div className="mt-6 w-full flex flex-row justify-center">
//           <button
//             onClick={() => handleSubmit(email, data)}
//             className="w-[100px] h-[36px] bg-teal-900 text-white text-xl rounded-2xl flex items-center justify-center"
//           >
//             submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { VscError } from "react-icons/vsc";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { useValidationSchema } from "@/hooks/useValidationSchema";
import { ConfirmRegistration, OnFocus, RegisterValues } from "@/types";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { usePathname, useSearchParams } from "next/navigation";

export default function ConfirmSignup() {
  const email = useSearchParams().get("email");
  const { confirmRegistrationSchema } = useValidationSchema();
  const { confirmSignup, errorMessage } = useAuth();

  const onfocus: OnFocus<ConfirmRegistration> = {
    code: false,
    email: false,
  };
  const [focus, setFocus] = useState(onfocus);
  console.log("email is ", email);

  return (
    <Formik
      initialValues={{
        email: email!,
        code: "",
      }}
      onSubmit={confirmSignup}
      validationSchema={confirmRegistrationSchema}
    >
      {({
        handleSubmit,
        errors,
        touched,
      }: FormikProps<ConfirmRegistration>) => (
        <Form onSubmit={handleSubmit}>
          <div className="w-screen h-screen bg-gray-200 flex items-center justify-center ">
            <div className=" overflow-hidden w-[360px] h-[300px] bg-white relative  justify-center flex flex-row flex-wrap rounded-lg px-[36px] py-[42px] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
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
                  Code Verification
                </motion.div>
                <div
                  className={`w-full h-[32px]  rounded-md bg-slate-200 ${
                    focus.code ? "border-teal-400 border-[1px]" : ""
                  }
                ${
                  touched.code && errors.code
                    ? " border-red-500 border-[2px] bg-red-400/20"
                    : ""
                }
                `}
                >
                  <Field
                    onFocus={() => setFocus({ ...focus, code: true })}
                    className="w-full h-full bg-transparent outline-none rounded-md px-[8px] py-[3px]"
                    name="code"
                    placeholder="code"
                    type="text"
                  />
                </div>

                <div className="w-full h-fit flex items-center justify-center mt-3">
                  <button
                    type="submit"
                    className="w-[50%] bg-teal-900 py-1 px-3 rounded-md text-white"
                  >
                    submit
                  </button>{" "}
                </div>

                {errors.code ? (
                  <div>
                    <div className="w-full h-[150px]  mt-4 flex flex-col items-start overflow-y-scroll ">
                      {/* username error*/}
                      {errors.code && touched.code ? (
                        <div className="w-full text-red-500 flex flex-row items-center gap-3 font-[500] text-[1rem] mb-2">
                          <VscError />
                          <ErrorMessage component="div" name="code" />
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
