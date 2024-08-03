import React from "react";

export const SidebarLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <div className="w-full mt-16 min-h-screen">
      <div className="flex ">
        <div className="flex  h-full min-w-260">Sidebar</div>
        <div className="flex"> {children}</div>
      </div>
    </div>
  );
};
