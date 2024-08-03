"use client";
import { Input } from "@/src/components/FormElements/Input";
import { Button } from "@/src/components/FormElements/Button";
import Logo from "@/src/components/Logo";
import Link from "next/link";
import { errorMessages, routes } from "@/src/lib/constants";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { _register } from "@/src/api_lib/actions/register";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface SignUpFormInputs {
  password: string;
  confirmPassword: string;
  email: string;
  name: string;
}

const validationSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    name: z.string().min(3, { message: "userName is required" }),
    // terms: z.literal(true, {
    //   errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    // }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

type ValidationSchema = z.infer<typeof validationSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({ resolver: zodResolver(validationSchema) });

  const router = useRouter();
  // const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    console.log(data);

    const response = await _register({
      email: data?.email,
      password: data?.password,
      name: data?.name,
      confirmPassword: data?.confirmPassword,
    });

    if (response?.error) {
      toast.error(response?.error);
    } else {
      toast.success("User Create SuccessFully!");
      router.push("/signIn");
    }
    // if (executeRecaptcha) {
    //   const token = await executeRecaptcha();
    //   console.log(token);
    // }
  };
  return (
    <div className="flex flex-col justify-center max-w-md gap-8 p-8 mx-auto bg-white rounded h-fit">
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <span className="text-slate-600">TodosKeep</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input
          {...register("name")}
          className="bg-white "
          type="text"
          placeholder="userName"
        />
        {errors?.name && (
          <p className="text-xs text-rose-700" role="alert">
            {errors.name?.message}
          </p>
        )}
        <Input
          {...register("email")}
          className="bg-white "
          type="text"
          placeholder="email"
        />
        {errors?.email && (
          <p className="text-xs text-rose-700" role="alert">
            {errors.email?.message}
          </p>
        )}

        <Input
          {...register("password")}
          className="bg-white"
          type="password"
          placeholder="Password"
        />
        {errors?.password && (
          <p className="text-xs text-rose-700" role="alert">
            {errors?.password?.message}
          </p>
        )}
        <Input
          {...register("confirmPassword")}
          className="bg-white"
          type="password"
          placeholder="Confirm Password"
        />

        {errors?.confirmPassword && (
          <p className="text-xs text-rose-700" role="alert">
            {errors?.confirmPassword?.message}
          </p>
        )}

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
