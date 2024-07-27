"use client";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import Logo from "@/src/app/components/ui/logo";
import Link from "next/link";
import { errorMessages, routes } from "@/src/lib/constants";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

interface SignUpFormInputs {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  errors: {};
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormInputs>();

  const { executeRecaptcha } = useGoogleReCaptcha();
  console.log(errors);
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    console.log(data);

    if (executeRecaptcha) {
      const token = await executeRecaptcha();
      console.log(token);
    }
  };
  return (
    <div className="flex flex-col justify-center max-w-md gap-8 p-8 mx-auto bg-white rounded h-fit">
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <span className="text-slate-600">NoteTaker</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input
          {...register("userName", { required: true, minLength: 3 })}
          className="bg-white "
          type="text"
          placeholder="Username"
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
        {errors.password?.type === "minLength" && (
          <p className="text-xs text-rose-700" role="alert">
            {errorMessages.shortPassword}
          </p>
        )}

        <Input
          {...register("confirmPassword", {
            required: true,
            validate: (val: string) => {
              if (watch("password") !== val) {
                return errorMessages.passwordsNotMatch;
              }
            },
          })}
          className="bg-white"
          type="password"
          placeholder="Confirm Password"
        />

        {errors.confirmPassword?.type === "required" && (
          <p className="text-xs text-rose-700" role="alert">
            {errorMessages.required}
          </p>
        )}
        {errors.confirmPassword?.type === "minLength" && (
          <p className="text-xs text-rose-700" role="alert">
            {errorMessages.shortPassword}
          </p>
        )}

        <Input className="bg-white" type="email" placeholder="E-mail address" />

        <Button
          variant="secondary"
          className="text-white bg-slate-500 hover:bg-slate-400"
        >
          Sign Up
        </Button>
      </form>
      <div className="flex items-center justify-center gap-3">
        <span className="inline-block text-sm text-slate-300">
          Have an account?
        </span>
        <Link href={routes.auth.SIGNIN}>
          <span className="inline-block text-md hover:cursor-pointer text-slate-600">
            Sign In
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

export default SignUp;
