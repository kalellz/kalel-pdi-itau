import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { InternshipTimer } from "@/components/ui/internship-timer"
import { Navbar } from "@/components/ui/navbar"

export default function ObjetivoCarreiraPage() {
  const careerPath = [
    { role: "ESTÁGIARIO", focus: "FRONTEND", isCurrent: true },
    { role: "JUNIOR", focus: "BACKEND/INFRA", isCurrent: false },
    { role: "PLENO", focus: "FULLSTACK", isCurrent: false },
    { role: "SENIOR", focus: "ARQUITETURA", isCurrent: false },
    { role: "TECH LEAD", focus: "Liderança", isCurrent: false },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <AnimatedGridPattern maxOpacity={0.1} />
      <Navbar />
      
      <main className="relative z-10 flex flex-col w-full p-4 md:p-8 pt-24">
        <div className="flex items-center justify-center w-full">
          <div className="w-full max-w-4xl space-y-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="p-8 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 dark:from-blue-400 dark:to-purple-400">
              Objetivo de Carreira
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">Trajetória e metas profissionais</p>
          </div>

          {/* Career Path Timeline */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
              Objetivo de Carreira
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
              ANL ENGENHARIA TI
            </p>
            <div className="space-y-4 mt-6">
              {careerPath.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold text-white
                      ${item.isCurrent
                        ? 'bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-300 dark:ring-blue-600' 
                        : 'bg-zinc-400 dark:bg-zinc-600'
                      }
                    `}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="text-lg font-bold text-zinc-900 dark:text-white">
                          {item.role}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          Foco: {item.focus}
                        </p>
                      </div>
                      {item.isCurrent && (
                        <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold whitespace-nowrap">
                          Posição Atual ✓
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Focus Timeline */}
            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                Trilha de Conhecimento
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Estagiário</p>
                  <p className="font-bold text-zinc-900 dark:text-white">Frontend</p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Júnior</p>
                  <p className="font-bold text-zinc-900 dark:text-white">Backend/Infra</p>
                </div>
                
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Pleno</p>
                  <p className="font-bold text-zinc-900 dark:text-white">Fullstack</p>
                </div>
                
                <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg border border-violet-200 dark:border-violet-800">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Sênior</p>
                  <p className="font-bold text-zinc-900 dark:text-white">Arquitetura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
