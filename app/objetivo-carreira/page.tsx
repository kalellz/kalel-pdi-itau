import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { InternshipTimer } from "@/components/ui/internship-timer";
import { Navbar } from "@/components/ui/navbar";

export default function ObjetivoCarreiraPage() {
  const careerPath = [
    { role: "ESTÁGIARIO", focus: "FRONTEND", isCurrent: true },
    { role: "JUNIOR", focus: "BACKEND/INFRA", isCurrent: false },
    { role: "PLENO", focus: "FULLSTACK", isCurrent: false },
    { role: "SENIOR", focus: "ARQUITETURA", isCurrent: false },
    { role: "TECH LEAD", focus: "LIDERANÇA", isCurrent: false },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <AnimatedGridPattern maxOpacity={0.1} />
      <Navbar />

      <main className="relative z-10 flex flex-col w-full p-4 pt-32 md:pt-24 md:p-8">
        <div className="flex items-center justify-center w-full">
          <div className="w-full max-w-4xl space-y-6 md:space-y-8 py-8 md:py-12">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="px-4 md:p-8 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 dark:from-blue-400 dark:to-purple-400">
                Objetivo de Carreira
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                Trajetória e metas profissionais
              </p>
            </div>

            {/* Career Path Timeline */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-6 md:mb-8">
                Objetivo de Carreira
              </h3>
              <p className="max-w-3xl rounded-md border-l-4 border-blue-500 bg-blue-50 px-4 py-3 text-sm text-slate-700">
                Quero me desenvolver como engenheiro frontend, ampliando minha
                visão técnica ao longo da carreira para sustentar uma evolução
                futura como profissional fullstack.
              </p>
              <p className="mt-4 text-base md:text-lg text-blue-600 dark:text-blue-400 font-semibold mb-6">
                ANL ENGENHARIA TI
              </p>
              <div className="space-y-3 md:space-y-4">
                {careerPath.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start md:items-center gap-3 md:gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-white text-sm md:text-base flex-shrink-0
                      ${
                        item.isCurrent
                          ? "bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-300 dark:ring-blue-600"
                          : "bg-zinc-400 dark:bg-zinc-600"
                      }
                    `}
                      >
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-base md:text-lg font-bold text-zinc-900 dark:text-white">
                            {item.role}
                          </p>
                          <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
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
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6">
                  Trilha de Conhecimento
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                  <div className="p-3 md:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                      Estagiário
                    </p>
                    <p className="font-bold text-zinc-900 dark:text-white text-sm">
                      Frontend
                    </p>
                  </div>

                  <div className="p-3 md:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                      Júnior
                    </p>
                    <p className="font-bold text-zinc-900 dark:text-white text-sm">
                      Backend/Infra
                    </p>
                  </div>

                  <div className="p-3 md:p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                      Pleno
                    </p>
                    <p className="font-bold text-zinc-900 dark:text-white text-sm">
                      Fullstack
                    </p>
                  </div>

                  <div className="p-3 md:p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg border border-violet-200 dark:border-violet-800">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                      Sênior
                    </p>
                    <p className="font-bold text-zinc-900 dark:text-white text-sm">
                      Arquitetura
                    </p>
                  </div>
                </div>
                <div className="mt-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                    <h2 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white">
                      Metas em andamento
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0">
                        →
                      </span>
                      <span>
                        Obter uma certificação básica de Cloud (AWS Cloud
                        Practitioner) até o final do estágio
                      </span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0">
                        →
                      </span>
                      <span>
                        Entregar 10 tasks de frontend com mais de 80% de
                        cobertura de testes
                      </span>
                    </li>
                    <li className="flex gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0">
                        →
                      </span>
                      <span>
                        Realizar um shadowing (acompanhamento) com um engenheiro
                        de backend do time para entender o ciclo de vida da
                        aplicação além do browser
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
