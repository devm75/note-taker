"use client";
import React from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import Logo from "@/src/app/components/ui/logo";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { errorMessages, routes } from "@/src/lib/constants";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
interface SignInFormInputs {
  userName: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    console.log(data);

    if (executeRecaptcha) {
      const token = await executeRecaptcha();
      console.log(token);
    }
  };

  return (
    <div className="flex flex-col justify-center max-w-md gap-8 p-8 mx-auto bg-white rounded h-fit">
      <div className="flex flex-col items-center justify-center gap-2">
        <Logo />
        <span className="text-slate-600">NoteTaker</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input
          {...register("userName", {
            required: true,
            minLength: 3,
          })}
          aria-invalid={errors.userName ? "true" : "false"}
          className="bg-white "
          type="text"
          placeholder="Username or E-mail"
        />
        {errors.userName?.type === "required" && (
          <p className="text-xs text-rose-700" role="alert">
            {errorMessages.required}
          </p>
        )}
        {errors.userName?.type === "minLength" && (
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
          Sign In
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
