import React from "react";
import { Sidebar } from "../Sidebar";

export const SidebarLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <div className="w-full mt-16 min-h-screen text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex"> {children}</div>
      </div>
    </div>
  );
};
