import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSession } from "next-auth/react";

export const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <Header />
        {children}
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
