"use client";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Navbar } from "@/components/ui/navbar";
import {
  itau,
  itauStatusPage,
  technologyDetails,
  Technology,
  TechComponent,
} from "@/components/consts";

export default function RoadmapPage() {
  const renderTechComponent = (component: TechComponent) => (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 md:p-6 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
          {component.name}
        </h2>
      </div>

      {/* Sections */}
      <div className="p-4 md:p-6 space-y-6 md:space-y-8">
        {component.sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-sm md:text-base font-bold text-zinc-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0"></span>
              {section.title}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {section.technologies.map((tech, techIndex) => {
                let colorClass = "";
                if (tech.status === "green") {
                  colorClass =
                    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700";
                } else if (tech.status === "yellow") {
                  colorClass =
                    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-700";
                } else {
                  colorClass =
                    "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700";
                }

                return (
                  <div
                    key={techIndex}
                    className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${colorClass}`}
                  >
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <AnimatedGridPattern maxOpacity={0.1} />
      <Navbar />

      <main className="relative z-10 flex flex-col w-full p-4 pt-32 md:pt-24 md:p-8">
        <div className="flex items-center justify-center w-full">
          <div className="w-full max-w-4xl space-y-6 md:space-y-8 py-8 md:py-12">
            {/* Header */}
            <div className="text-center">
              <h1 className="px-4 md:p-8 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 dark:from-blue-400 dark:to-purple-400">
                Stack de Tecnologias
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                Tecnologias utilizadas nos projetos
              </p>
              <div className="flex flex-wrap justify-center gap-4 my-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-200">
                    Verde: Já estudei e já trabalhei
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-200">
                    Amarelo: Já estudei
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-200">
                    Vermelho: Falta estudo
                  </span>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="space-y-6 md:space-y-8">
              {renderTechComponent(itauStatusPage)}
              {renderTechComponent(itau)}
            </div>
            {/* Content */}
            {(() => {
              const knownTechs: {
                project: string;
                section: string;
                tech: Technology;
              }[] = [];
              [itauStatusPage, itau].forEach((component) => {
                component.sections.forEach((section) => {
                  section.technologies.forEach((tech) => {
                    if (tech.status === "green") {
                      knownTechs.push({
                        project: component.name,
                        section: section.title,
                        tech,
                      });
                    }
                  });
                });
              });
              if (knownTechs.length === 0) return null;
              const grouped: Record<string, Record<string, Technology[]>> = {};
              knownTechs.forEach((item) => {
                if (!grouped[item.project]) grouped[item.project] = {};
                if (!grouped[item.project][item.section])
                  grouped[item.project][item.section] = [];
                grouped[item.project][item.section].push(item.tech);
              });
              let projectIndex = 0;
              return (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800 overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 md:p-6 border-b border-green-200 dark:border-green-800">
                    <h2 className="text-xl md:text-2xl font-bold text-green-900 dark:text-green-100">
                      ✓ Visualização Rápida ({knownTechs.length} tecnologia
                      {knownTechs.length !== 1 ? "s" : ""} trabalhada
                      {knownTechs.length !== 1 ? "s" : ""})
                    </h2>
                    <p className="text-xs md:text-sm text-green-700 dark:text-green-300 mt-1">
                      Tecnologias que eu já domino
                    </p>
                  </div>
                  <div className="p-4 md:p-6">
                    {Object.entries(grouped).map(([project, sections]) => (
                      <div
                        key={project}
                        className={
                          projectIndex++ > 0
                            ? "pt-6 border-t border-green-200 dark:border-green-800"
                            : ""
                        }
                      >
                        <h3 className="text-base md:text-lg font-bold text-green-900 dark:text-green-100 mb-4 md:mb-5">
                          {project}
                        </h3>
                        <div className="space-y-4 md:space-y-5 pl-0 md:pl-4">
                          {Object.entries(sections).map(
                            ([sectionTitle, techs]) => (
                              <div key={sectionTitle}>
                                <p className="text-xs md:text-sm font-semibold text-green-700 dark:text-green-300 mb-2 md:mb-3">
                                  {sectionTitle}
                                </p>
                                <div className="space-y-2 md:space-y-2">
                                  {techs.map((tech, techIndex) => {
                                    const detail = technologyDetails[tech.name];
                                    return (
                                      <div
                                        key={techIndex}
                                        className="bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-lg border border-green-200 dark:border-green-800/50"
                                      >
                                        <div className="flex items-start gap-2 md:gap-3">
                                          <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">
                                            ✓
                                          </span>
                                          <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-green-900 dark:text-green-100 text-sm md:text-base">
                                              {detail?.name || tech.name}
                                            </p>
                                            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                              {detail?.description ||
                                                "Tecnologia selecionada"}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
            {(() => {
              const studiedTechs: {
                project: string;
                section: string;
                tech: Technology;
              }[] = [];
              [itauStatusPage, itau].forEach((component) => {
                component.sections.forEach((section) => {
                  section.technologies.forEach((tech) => {
                    if (tech.status === "yellow") {
                      studiedTechs.push({
                        project: component.name,
                        section: section.title,
                        tech,
                      });
                    }
                  });
                });
              });
              if (studiedTechs.length === 0) return null;
              const grouped: Record<string, Record<string, Technology[]>> = {};
              studiedTechs.forEach((item) => {
                if (!grouped[item.project]) {
                  grouped[item.project] = {};
                }
                if (!grouped[item.project][item.section]) {
                  grouped[item.project][item.section] = [];
                }
                grouped[item.project][item.section].push(item.tech);
              });
              let projectIndex = 0;
              return (
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-zinc-800 dark:to-zinc-900 p-4 md:p-8 rounded-xl border border-yellow-200 dark:border-yellow-800/30">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-yellow-900 dark:text-yellow-100">
                      Já Estudei ({studiedTechs.length} tecnologia
                      {studiedTechs.length !== 1 ? "s" : ""})
                    </h2>
                    <p className="text-sm md:text-base text-yellow-800 dark:text-yellow-200 mt-2">
                      Tecnologias que já foram estudadas
                    </p>
                  </div>
                  <div className="mt-6 space-y-6 p-4 md:p-6">
                    {Object.entries(grouped).map(([project, sections]) => (
                      <div
                        key={project}
                        className={
                          projectIndex++ > 0
                            ? "pt-6 border-t border-yellow-200 dark:border-yellow-800"
                            : ""
                        }
                      >
                        <h3 className="text-base md:text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-4 md:mb-5">
                          {project}
                        </h3>
                        <div className="space-y-4 md:space-y-5 pl-0 md:pl-4">
                          {Object.entries(sections).map(
                            ([sectionTitle, techs]) => (
                              <div key={sectionTitle}>
                                <p className="text-xs md:text-sm font-semibold text-yellow-700 dark:text-yellow-300 mb-2 md:mb-3">
                                  {sectionTitle}
                                </p>
                                <div className="space-y-2 md:space-y-2">
                                  {techs.map((tech, techIndex) => {
                                    const detail = technologyDetails[tech.name];
                                    return (
                                      <div
                                        key={techIndex}
                                        className="bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-lg border border-yellow-200 dark:border-yellow-800/50"
                                      >
                                        <div className="flex items-start gap-2 md:gap-3">
                                          <span className="text-yellow-600 dark:text-yellow-400 font-bold flex-shrink-0">
                                            •
                                          </span>
                                          <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-yellow-900 dark:text-yellow-100 text-sm md:text-base">
                                              {detail?.name || tech.name}
                                            </p>
                                            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                              {detail?.description ||
                                                "Tecnologia estudada"}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
            {(() => {
              const missingTechs: {
                project: string;
                section: string;
                tech: Technology;
              }[] = [];
              [itauStatusPage, itau].forEach((component) => {
                component.sections.forEach((section) => {
                  section.technologies.forEach((tech) => {
                    if (tech.status === "red") {
                      missingTechs.push({
                        project: component.name,
                        section: section.title,
                        tech,
                      });
                    }
                  });
                });
              });
              if (missingTechs.length === 0) return null;
              const grouped: Record<string, Record<string, Technology[]>> = {};
              missingTechs.forEach((item) => {
                if (!grouped[item.project]) grouped[item.project] = {};
                if (!grouped[item.project][item.section])
                  grouped[item.project][item.section] = [];
                grouped[item.project][item.section].push(item.tech);
              });
              let projectIndex = 0;
              return (
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-200 dark:border-red-800 overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 p-4 md:p-6 border-b border-red-200 dark:border-red-800">
                    <h2 className="text-xl md:text-2xl font-bold text-red-900 dark:text-red-100">
                      📚 Ainda Faltam Dominar ({missingTechs.length} tecnologia
                      {missingTechs.length !== 1 ? "s" : ""})
                    </h2>
                    <p className="text-xs md:text-sm text-red-700 dark:text-red-300 mt-1">
                      Tecnologias que eu ainda preciso aprender
                    </p>
                  </div>
                  <div className="p-4 md:p-6">
                    {Object.entries(grouped).map(([project, sections]) => (
                      <div
                        key={project}
                        className={
                          projectIndex++ > 0
                            ? "pt-6 border-t border-red-200 dark:border-red-800"
                            : ""
                        }
                      >
                        <h3 className="text-base md:text-lg font-bold text-red-900 dark:text-red-100 mb-4 md:mb-5">
                          {project}
                        </h3>
                        <div className="space-y-4 md:space-y-5 pl-0 md:pl-4">
                          {Object.entries(sections).map(
                            ([sectionTitle, techs]) => (
                              <div key={sectionTitle}>
                                <p className="text-xs md:text-sm font-semibold text-red-700 dark:text-red-300 mb-2 md:mb-3">
                                  {sectionTitle}
                                </p>
                                <div className="space-y-2 md:space-y-2">
                                  {techs.map((tech, techIndex) => {
                                    const detail = technologyDetails[tech.name];
                                    return (
                                      <div
                                        key={techIndex}
                                        className="bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-lg border border-red-200 dark:border-red-800/50"
                                      >
                                        <div className="flex items-start gap-2 md:gap-3">
                                          <span className="text-red-600 dark:text-red-400 font-bold flex-shrink-0">
                                            →
                                          </span>
                                          <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-red-900 dark:text-red-100 text-sm md:text-base">
                                              {detail?.name || tech.name}
                                            </p>
                                            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                              {detail?.description ||
                                                "Tecnologia para aprender"}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </main>
    </div>
  );
}
