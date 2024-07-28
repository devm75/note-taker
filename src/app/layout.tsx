"use client";
import { keys } from "@/src/lib/constants";
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleReCaptchaProvider reCaptchaKey={keys.recaptchaKey}>
          <ToastContainer />
          {children}
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
