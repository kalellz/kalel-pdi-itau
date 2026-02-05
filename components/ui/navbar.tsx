"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname ? pathname === path || pathname.startsWith(path + "/") : false;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`
          ${
            isActive("/")
              ? "font-bold text-lg text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              : "text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          }`}
          >
            Sobre
          </Link>

          <div className="flex gap-6">
            <Link
              href="/objetivo-carreira"
              className={`text-sm font-medium transition-all duration-200 py-2 px-3 rounded-lg ${
                isActive("/objetivo-carreira")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              Objetivo de Carreira
            </Link>

            <Link
              href="/contribuicoes"
              className={`text-sm font-medium transition-all duration-200 py-2 px-3 rounded-lg ${
                isActive("/contribuicoes")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              Contribuições
            </Link>

            <Link
              href="/roadmap"
              className={`text-sm font-medium transition-all duration-200 py-2 px-3 rounded-lg ${
                isActive("/roadmap")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              Roadmap
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
