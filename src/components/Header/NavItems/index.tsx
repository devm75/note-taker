import { routes } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathName = usePathname();

  return (
    <>
      <li>
        {" "}
        <Link href={routes.CONTACT} className="hover:opacity-50 p-1">
          ContactUS
        </Link>
      </li>
      <li>
        <Link href={routes.HELP} className="hover:opacity-50 p-1">
          Help
        </Link>
      </li>
      <li>
        <Link href={routes.BLOG} className="hover:opacity-50 p-1">
          Blog
        </Link>
      </li>
      <li>
        <Link
          href={routes.auth.SIGNIN}
          className={cn(
            [pathName == routes.auth.SIGNIN && "text-red-300"],
            "hover:opacity-50",
            "p-1"
          )}
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          href={routes.auth.SIGNUP}
          className={cn(
            [pathName == routes.auth.SIGNUP && "text-red-300"],
            "border border-slate-800 rounded-md p-1 hover:border-slate-100 "
          )}
        >
          SignUp
        </Link>
      </li>
    </>
  );
};
