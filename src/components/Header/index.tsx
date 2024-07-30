import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { routes } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between gap-20 px-10 font-mono text-2xl font-bold text-white bg-slate-500">
      <Logo />
      NoteKeep
      <span className="flex gap-10">
        <Link href={routes.auth.SIGNIN}>
          <span
            className={cn([pathName == routes.auth.SIGNIN && "text-red-300"])}
          >
            SignIn
          </span>
        </Link>
        <Link href={routes.auth.SIGNUP}>
          <span
            className={cn([pathName == routes.auth.SIGNUP && "text-red-300"])}
          >
            SignUp
          </span>
        </Link>
      </span>
    </div>
  );
};
