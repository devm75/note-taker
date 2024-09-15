import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useSession } from "next-auth/react";
import { SidebarLayout } from "./SidebarLayout";

export const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <Header />
        <SidebarLayout>{children}</SidebarLayout>
        <Footer />
      </>
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
