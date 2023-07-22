export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-center w-full gap-20 font-mono text-2xl font-bold text-white bg-slate-500 ">
        <span className="text-6xl italic text-rose-950 hover:cursor-pointer">
          N<span className="text-5xl italic text-rose-400">T</span>
        </span>
        NoteTaker
      </div>
      <div className="h-[calc(100vh-100px)]">{children}</div>
      <div className="flex items-center justify-center w-full h-10 text-white bg-slate-500">
        Copyright &#169; 2023 NoteTaker | Made with &#9829; in 🇮🇳
      </div>
    </div>
  );
}
