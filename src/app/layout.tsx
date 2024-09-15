"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from "./provider";
import { CustomLayout } from "../components/Layouts/CustomLayout";
import { cn } from "../lib/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={cn([inter.className], "bg-dark-primary")}>
          {/* <GoogleReCaptchaProvider reCaptchaKey={keys.recaptchaKey}> */}
          <ToastContainer />
          <CustomLayout>
            {children}
            {/* </GoogleReCaptchaProvider> */}
          </CustomLayout>
        </body>
      </Provider>
    </html>
  );
}
