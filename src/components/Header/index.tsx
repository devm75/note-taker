"use client";
import React from "react";
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
        <div>
          <ul className="flex gap-4">
            <li>
              {" "}
              <Link href={routes.CONTACT} className="hover:opacity-50">
                ContactUS
              </Link>
            </li>
            <li>
              <Link href={routes.HELP} className="hover:opacity-50">
                Help
              </Link>
            </li>
            <li>
              <Link href={routes.BLOG} className="hover:opacity-50">
                Blog
              </Link>
            </li>
            <li>
              <Link href={routes.auth.SIGNIN} className="hover:opacity-50">
                <span
                  className={cn(
                    [pathName == routes.auth.SIGNIN && "text-red-300"],
                    "hover:opacity-50"
                  )}
                >
                  Login
                </span>
              </Link>
            </li>
            <li>
              <Link href={routes.auth.SIGNUP} className="hover:opacity-50">
                <span
                  className={cn(
                    [pathName == routes.auth.SIGNUP && "text-red-300"],
                    "border rounded-md p-1 "
                  )}
                >
                  Sign Up
                </span>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="flex fixed p-4 left-0 right-0 top-0 items-center justify-center gap-20 px-10   text-white bg-dark-primary">
      {/* <Logo /> */}
      <Link href={"/"}>Notetaker</Link>

      <span className="flex gap-10">{showSession()}</span>
    </div>
  );
};
