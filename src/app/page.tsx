"use client";
import { useRouter } from "next/navigation";
import { TodosList } from "../components/TodosList";
import { CreateTodo } from "../components/CreateTodo";
import { useSession } from "next-auth/react";
import { HeroSection } from "../components/LandingHeroSection";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main>
      <div className="">
        {session ?
          <>
            <TodosList />
            <CreateTodo userId={session?.user?.id as string} />
          </>
          : <HeroSection />
        }
      </div>
    </main>
  );
}
