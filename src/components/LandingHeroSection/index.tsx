import Link from "next/link";
import { Button } from "../FormElements/Button";
import { routes } from "@/src/lib/constants";

export const HeroSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-64 min-h-480 max-w-2xl tab:max-w-xl text-center m-auto justify-center items-center  text-white">
      <h1 className="text-6xl tab:text-4xl font-semibold">
        {" "}
        The simplest way to keep notes!
      </h1>
      <h2>
        All your notes, synced on all your devices. Get NoteTaker now for iOS,
        Android, Mac, Windows, Linux, or in your browser.
      </h2>
      <Link href={routes.auth.SIGNUP}>
        <Button variant={"primary"}>Sign Up now</Button>
      </Link>
    </div>
  );
};
