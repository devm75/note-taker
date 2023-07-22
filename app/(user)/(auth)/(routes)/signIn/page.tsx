import React from "react";

import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SignIn",
  description: "Note Taker SignIn",
};

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center h-full max-w-md center items">
      <h1>Please Sign In</h1>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button variant="secondary" className="text-white bg-slate-500">
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
