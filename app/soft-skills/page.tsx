import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Navbar } from "@/components/ui/navbar";

export default function SoftSkillsPage() {
  const doneItems = [
    "Alinhamentos técnicos com a Eduarda (senior frontend no Itaú) e o Vinicius Souza (pleno no Itaú) para entrega dos MFE",
    "Apresentação do modelo Atomic Design para outros frontends na comunidade do Command Center",
    "Alinhamento com time de acessibilidade, para implementação do Hand Talk (Maya) no produto"
  ];

  const pendingItems = [
    "Obter uma certificação básica de Cloud (AWS Cloud Practitioner) até o mês 8 do estágio",
    "Entregar 10 tasks de frontend com mais de 80% de cobertura de testes",
    "Realizar um shadowing (acompanhamento) com um engenheiro de backend do time para entender o ciclo de vida da aplicação além do browser",
  ];

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <AnimatedGridPattern maxOpacity={0.1} />
      <Navbar />

      <main className="relative z-10 flex flex-col w-full p-4 pt-32 md:pt-24 md:p-8">
        <div className="flex items-center justify-center w-full">
          <div className="w-full max-w-4xl space-y-6 md:space-y-8 py-8 md:py-12">
            <div className="text-center">
              <h1 className="px-4 md:p-8 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 dark:from-blue-400 dark:to-purple-400">
                Soft Skills
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                Desenvolvimento comportamental e colaborativo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 md:p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                  <h2 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white">
                    Já fiz
                  </h2>
                </div>
                <ul className="space-y-2">
                  {doneItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 md:p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  <h2 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white">
                    Falta
                  </h2>
                </div>
                <ul className="space-y-2">
                  {pendingItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0">
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
