"use client";

import paths from "@/lib/paths";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LoginButtonProps {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(paths.loginPage());
  };

  if (mode === "modal") return <span>TODO: Implement modal</span>;

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
}
