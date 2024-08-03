import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useSession } from "next-auth/react";
import { SidebarLayout } from "./SidebarLayout";

export const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <Header />
        <SidebarLayout>{children}</SidebarLayout>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
};
