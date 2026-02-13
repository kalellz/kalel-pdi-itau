import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Navbar } from "@/components/ui/navbar";

export default function SoftSkillsPage() {
  const doneItems = [
    {
      title: "Alinhamentos técnicos (MFE)",
      description:
        "Eduarda (senior frontend) e Vinicius Souza (pleno) no Itaú.",
      icon: "🤝",
    },
    {
      title: "Atomic Design",
      description:
        "Apresentação para outros frontends na comunidade do Command Center.",
      icon: "⚛️",
    },
    {
      title: "Acessibilidade (Hand Talk)",
      description:
        "Alinhamento com o time de acessibilidade para implementação do Maya.",
      icon: "♿",
    },
  ];

  const developmentItems = [
    {
      title: "Protagonismo e Autonomia",
      description:
        "Evoluir na resolução de problemas complexos, buscando soluções antes de escalar, mas sabendo o momento exato de pedir ajuda.",
      icon: "🚀",
    },
    {
      title: "Comunicação Assertiva em Rituais",
      description:
        "Clareza na exposição de impedimentos e avanços em Dailies e Plannings, focando no valor gerado.",
      icon: "🗣️",
    },
    {
      title: "Pensamento Sistêmico",
      description:
        "Visão do todo: impacto do frontend na arquitetura de plataforma e custos de infraestrutura.",
      icon: "🧠",
    },
    {
      title: "Colaboração e Mentoria Inversa",
      description:
        "Compartilhar aprendizados de novas tecnologias com o time para fortalecer a cultura de aprendizado.",
      icon: "🧩",
    },
    {
      title: "Cultura Itaú",
      description: "Atitude de Dono, Foco no Cliente e Simplicidade.",
      icon: "🏛️",
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <AnimatedGridPattern maxOpacity={0.1} />
      <Navbar />

      <main className="relative z-10 flex flex-col w-full p-4 pt-32 md:pt-24 md:p-8">
        <div className="flex items-center justify-center w-full">
          <div className="w-full max-w-4xl space-y-6 md:space-y-8 py-8 md:py-12">
            <div className="text-center">
              <h1 className="px-4 md:p-8 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2 dark:from-orange-400 dark:to-yellow-400">
                Soft Skills
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                Desenvolvimento comportamental e colaborativo
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 md:p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                  <h2 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white">
                    Já fiz
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {doneItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-xl flex-shrink-0">{item.icon}</div>
                        <div>
                          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {item.title}
                          </p>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 md:p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span>
                  <h2 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white">
                    Em desenvolvimento
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {developmentItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-xl flex-shrink-0">{item.icon}</div>
                        <div>
                          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {item.title}
                          </p>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
