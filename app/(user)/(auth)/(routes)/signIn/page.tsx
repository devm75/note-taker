import React from "react";

import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

export const metadata: Metadata = {
	title: "SignIn",
	description: "Note Taker SignIn",
};

const SignIn = () => {
	return (
		<div className="flex flex-col justify-center max-w-md gap-8 p-8 mx-auto h-fit bg-slate-200">
			<div className="flex flex-col items-center justify-center">
				<Logo />
				<span>NoteTaker</span>
			</div>
			<Input className="bg-white" type="text" placeholder="Email" />
			<Input className="bg-white" type="password" placeholder="Password" />
			<Button variant="secondary" className="text-white bg-slate-500">
				Sign In
			</Button>
			<div className="flex justify-between">
				<span className="inline-block hover:cursor-pointer">
					Forgot Password?
				</span>
				<span className="inline-block hover:cursor-pointer">Sign Up</span>
			</div>
		</div>
	);
};

export default SignIn;
