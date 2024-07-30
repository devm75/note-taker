"use client";
import React, { useState } from "react";
import { Input } from "@/src/components/FormElements/input";
import { Button } from "@/src/components/FormElements/button";
import Logo from "@/src/components/Logo";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { errorMessages, routes } from "@/src/lib/constants";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Loader } from "@/src/components/Loader";
import { Header } from "@/src/components/Header";
interface SignInFormInputs {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  // const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    console.log(data, "data");
    // if (executeRecaptcha) {
    //   const token = await executeRecaptcha();
    //   console.log(token);
    // }
    setLoading(true);
    const res = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      console.error(res?.error);
      toast.error(res?.error);
    }
    if (res?.ok) {
      toast.success("Login Success");
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center max-w-md gap-8 p-8 mx-auto bg-white rounded h-fit">
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input
          {...register("email", {
            required: true,
          })}
          aria-invalid={errors.email ? "true" : "false"}
          className="bg-white "
          type="text"
          placeholder="Username or E-mail"
        />
        {errors.email?.type === "required" && (
          <p className="text-xs text-rose-700" role="alert">
            {errorMessages.required}
          </p>
        )}
        {errors.email?.type === "minLength" && (
          <p className="text-xs text-rose-700" role="alert">
            {errorMessages.short}
          </p>
        )}
        <Input
          {...register("password", {
            required: true,
            minLength: 8,
          })}
          className="bg-white"
          type="password"
          placeholder="Password"
        />
        {errors.password?.type === "required" && (
          <p className="text-xs text-rose-700" role="alert">
            {errorMessages.required}
          </p>
        )}
        {errors?.password?.type === "minLength" && (
          <p className="text-xs text-rose-700" role="alert">
            {errorMessages.shortPassword}
          </p>
        )}
        <Button
          type="submit"
          variant="secondary"
          className="text-white bg-slate-500 hover:bg-slate-400"
        >
          {loading ? <Loader /> : "Sign In"}
        </Button>
      </form>
      <div className="flex justify-between">
        <span className="inline-block hover:cursor-pointer text-slate-600">
          Forgot Password?
        </span>
        <Link href={routes.auth.SIGNUP}>
          <span className="inline-block hover:cursor-pointer text-slate-600">
            Sign Up
          </span>
        </Link>
      </div>
      <div className="flex flex-col p-5 ">
        <div>
          <span className="block w-full text-center text-slate-500">
            or you can sign in with
          </span>
        </div>
        <div className="flex items-center justify-center gap-4 p-2">
          <AiFillGoogleCircle className="text-4xl text-slate-400 hover:text-red-500 hover:cursor-pointer hover:duration-300" />
          <AiFillGithub className="text-4xl text-slate-400 hover:text-black hover:cursor-pointer hover:duration-300" />
          <BsFacebook className="text-3xl text-slate-400 hover:text-blue-500 hover:cursor-pointer hover:duration-300" />
        </div>
        <span className="p-1 text-sm text-center text-slate-300">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </span>
      </div>
    </div>
  );
};

export default SignIn;
