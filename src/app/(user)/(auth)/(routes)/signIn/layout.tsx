import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
