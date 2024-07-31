import { routes } from "@/src/lib/constants";
import Link from "next/link";
import React from "react";
import { FaNoteSticky } from "react-icons/fa6";
export default function Logo() {
  return (
    <div>
      <Link href={routes.HOME}>
        <span className="text-5xl italic text-white bg-slate-500 hover:cursor-pointer">
          <FaNoteSticky />
        </span>
      </Link>
    </div>
  );
}
