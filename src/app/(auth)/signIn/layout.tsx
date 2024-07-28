import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignIn",
};
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
