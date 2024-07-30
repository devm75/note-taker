"use client";
import Logo from "@/src/components/Logo";
import { usePathname } from "next/navigation";
import { routes } from "@/src/lib/constants";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const signInPage = routes.auth.SIGNIN;
  const signUpPage = routes.auth.SIGNUP;

  return (
    <div className="mx-auto max-w-screen-3xl">
      <Header />
      <div
        className={cn("min-h-[calc(100vh-100px)]   bg-slate-100", [
          pathName == signUpPage ? "pt-10" : "md:pt-32 xsm:pt-10",
        ])}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
