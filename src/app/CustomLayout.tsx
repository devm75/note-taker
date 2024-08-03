import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSession } from "next-auth/react";

export const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  console.log(session, "session");
  if (status === "authenticated") {
    return (
      <div>
        <Header />
        {"Inside Dashboard"}

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
