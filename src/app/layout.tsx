"use client";
import { keys } from "@/src/lib/constants";
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleReCaptchaProvider reCaptchaKey={keys.recaptchaKey}>
          {children}
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
