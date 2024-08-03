"use client";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { routes } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div>
          <span className="inline-flex px-4">{`Welcome,${session?.user?.name}`}</span>
          <button
            className="text-red-300"
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push("/");
              });
            }}
          >
            SignOut
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex gap-4">
          <Link href={routes.auth.SIGNIN} className="">
            <span
              className={cn([pathName == routes.auth.SIGNIN && "text-red-300"])}
            >
              Login
            </span>
          </Link>
          <Link href={routes.auth.SIGNUP} className="">
            <span
              className={cn([pathName == routes.auth.SIGNUP && "text-red-300"])}
            >
              Register
            </span>
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="flex items-center justify-between gap-20 px-10 font-mono text-2xl font-bold text-white bg-slate-500">
      <Logo />
      TodosKeep
      <span className="flex gap-10">{showSession()}</span>
    </div>
  );
};
