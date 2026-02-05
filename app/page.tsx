import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { InternshipTimer } from "@/components/ui/internship-timer"
import { Navbar } from "@/components/ui/navbar"
import { Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <AnimatedGridPattern maxOpacity={0.1} />
      <Navbar />
      
      <main className="relative z-10 flex items-center justify-center min-h-screen p-4 pt-32 md:pt-20 md:p-8">
        <div className="w-full max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="px-4 md:p-8 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 dark:from-blue-400 dark:to-purple-400">
              Plano de Desenvolvimento Individual
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">Jornada de Carreira</p>
          </div>

          {/* Current Position Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                  Kalel Rodrigues
                </h2>
                <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold">
                  Estagiário em Engenharia de Plataforma
                </p>
              </div>
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-blue-700 dark:text-blue-300 font-semibold text-sm">
                  Itaú Unibanco
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-1">Período</p>
                <p className="text-sm sm:text-base text-zinc-900 dark:text-white font-semibold">
                  Outubro 2025 - Presente
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-1">Duração</p>
                <InternshipTimer />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-1">Foco Atual</p>
                <p className="text-sm sm:text-base text-zinc-900 dark:text-white font-semibold">
                  Frontend
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
              <a 
                href="https://github.com/kalellz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kalelrodrigues/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
