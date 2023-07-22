"use client";
import Logo from "@/components/ui/logo";
import { usePathname } from "next/navigation";
import { constants } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();
	const signInPage = constants.auth.SIGNIN;
	const signUpPage = constants.auth.SIGNUP;

	return (
		<div className="mx-auto max-w-screen-3xl">
			<div className="flex items-center justify-between gap-20 px-10 font-mono text-2xl font-bold text-white bg-slate-500">
				<Logo />
				NoteTaker
				<span className="flex gap-10">
					<Link href={signInPage}>
						<span
							className={clsx([pathName == signInPage && "text-red-300"])}
						>
							Login
						</span>
					</Link>
					<Link href={signUpPage}>
						<span>SignUp</span>
					</Link>
				</span>
			</div>
			<div className="h-[calc(100vh-100px)] md:pt-48  xsm:pt-10 bg-slate-100">
				{children}
			</div>
			<div className="flex items-center justify-center w-full h-10 text-white bg-slate-500">
				Copyright &#169; 2023 NoteTaker | Made with &#9829; in Punjab 🇮🇳
			</div>
		</div>
	);
}
