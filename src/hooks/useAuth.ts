"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import {
  ConfirmRegistration,
  ErrorHandling,
  LoginValues,
  RegisterValues,
} from "@/types";

export function useAuth() {
  const router = useRouter();
  const initial = {
    name: "",
    message: "",
  } as ErrorHandling;
  const [errorMessage, setError] = useState(initial);

  const login = async (values: LoginValues, { setSubmitting }: any) => {
    console.log("hahahahahah", values);
    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/",
      email: values.email,
      password: values.password,
    })
      .then(async (res) => {
        const data = res?.status;

        console.log("data ini anjay", data);
        if (typeof data === "undefined") {
          return setError({
            name: "login error",
            message: "",
          });
        }
      })
      .finally(() => setSubmitting(false));
  };

  const confirmSignup = async (
    values: ConfirmRegistration,
    { setSubmitting }: any
  ) => {
    console.log("ahahahaha", values);
    await fetch("/api/confirm_signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const { name } = await res.json();
        if (name === "CodeMismatchException") {
          return setError({
            name: name,
            message: "your confirmation code is incorrect",
          });
        }
        if (name === "ExpiredCodeException") {
          return setError({
            name,
            message: "your confirmation code is expired please try again",
          });
        }
        if (name === "SerializationException") {
          return setError({
            name,
            message: "server error wait a minute our team can handle this",
          });
        }
        console.log("ahahahaha", res);

        router.push(`/signin`);
      })
      .finally(() => setSubmitting(false));
  };
  const signup = async (values: RegisterValues, { setSubmitting }: any) => {
    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(async (res) => {
        const {
          data: { name },
        } = await res.json();

        if (name === "UsernameExistsException") {
          return setError({
            name,
            message: "your email is already exist choose another email instead",
          });
        }
        if (name === "NotAuthorizedException") {
          return setError({
            name,
            message: "your email is not registered  ",
          });
        }

        router.push(`/signup/verify?email=${values.email}`);
      })
      .catch((rez) => console.log("hahahaS", rez))
      .finally(() => setSubmitting(false));
  };

  return {
    confirmSignup,
    signup,
    login,
    errorMessage,
  };
}
