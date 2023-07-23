"use client";
import Logo from "@/components/ui/logo";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();
	const signInPage = routes.auth.SIGNIN;
	const signUpPage = routes.auth.SIGNUP;

	return (
		<div className="mx-auto max-w-screen-3xl">
			<div className="flex items-center justify-between gap-20 px-10 font-mono text-2xl font-bold text-white bg-slate-500">
				<Logo />
				NoteTaker
				<span className="flex gap-10">
					<Link href={signInPage}>
						<span className={clsx([pathName == signInPage && "text-red-300"])}>
							SignIn
						</span>
					</Link>
					<Link href={signUpPage}>
						<span className={clsx([pathName == signUpPage && "text-red-300"])}>
							SignUp
						</span>
					</Link>
				</span>
			</div>
			<div
				className={cn("min-h-[calc(100vh-100px)]  xsm:pt-10 bg-slate-100", [
					pathName == signUpPage ? "pt-0" : "pt-32",
				])}
			>
				{children}
			</div>
			<div className="flex items-center justify-center w-full h-10 text-white bg-slate-500">
				Copyright &#169; 2023 NoteTaker | Made with &#9829; in Punjab 🇮🇳
			</div>
		</div>
	);
}
