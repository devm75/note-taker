"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { NavItems } from "./NavItems";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
export const Header = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [showNavItems, setShowNavItems] = useState(false);
  const toggleShowNavItems = () => {
    setShowNavItems((prev) => !prev);
  };
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
        <>
          <div className="tab:hidden">
            <ul className="flex gap-4">
              <NavItems />
            </ul>
          </div>
          <div className="tab-nd-above:hidden bg-dark-primary  z-900 ">
            {!showNavItems ? (
              <FaBars onClick={toggleShowNavItems} />
            ) : (
              <>
                <ul className="flex-col absolute right-10 top-10 gap-2 flex border p-4">
                  <NavItems />
                </ul>
                <MdCancel
                  className="text-2xl absolute right-0 top-10"
                  onClick={toggleShowNavItems}
                />
              </>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <div className="flex fixed p-4 left-0 right-0 top-0 items-center justify-center tab:justify-between web:gap-480 responsive:gap-5 px-10   text-white bg-dark-primary">
      {/* <Logo /> */}
      <Link href={"/"}>Notetaker</Link>

      <span className="flex gap-10">{showSession()}</span>
    </div>
  );
};
