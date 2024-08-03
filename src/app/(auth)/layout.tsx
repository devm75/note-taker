"use client";
import { usePathname } from "next/navigation";
import { routes } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const signUpPage = routes.auth.SIGNUP;

  return (
    <div className="mx-auto max-w-screen-3xl">
      <div
        className={cn(
          "min-h-[calc(100vh-64px)]  mt-64 bg-slate-100 flex justify-center items-center",
          [pathName == signUpPage ? "pt-10" : "md:pt-32 xsm:pt-10"]
        )}
      >
        {children}
      </div>
    </div>
  );
}
