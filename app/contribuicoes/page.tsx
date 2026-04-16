"use client";

import { useState } from "react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Navbar } from "@/components/ui/navbar";

type Category = "todas" | "frontend" | "backend" | "outras";

const contributions = [
  {
    title: "Desenvolvimento de Sistema de Notificações",
    icon: "🔔",
    category: "frontend" as Category,
    description:
      "Implementei todo o sistema front-end de notificações do Itaú Status Page, garantindo comunicação eficiente e em tempo real sobre o status dos serviços.",
    technologies: ["Next.js", "Styled Components", "Axios", "TypeScript"],
    impacts: [
      "Implementação do sistema front-end completo",
      "Comunicação eficiente e em tempo real",
      "Status dos serviços centralizado",
      "Melhor experiência do usuário",
    ],
  },
  {
    title: "Discovery e Implementação do Modelo de Micro Frontends (MFE)",
    icon: "🏗️",
    category: "outras" as Category,
    description:
      "Liderei o processo de discovery e a implementação do modelo de MFE no redesign do produto, estudando a melhor estrutura para a aplicação e conduzindo essa frente no frontend para garantir modularidade e escalabilidade.",
    technologies: ["Module Federation", "Webpack 5", "Next Multi-Zones"],
    impacts: [
      "Modularidade do código aumentada",
      "Escalabilidade para novos times",
      "Deploy independente de módulos",
      "Reutilização de componentes",
    ],
  },
  {
    title: "Redesign com Microfrontends",
    icon: "🧩",
    category: "frontend" as Category,
    description:
      "Participei da configuração e desenvolvimento das principais telas do novo redesign utilizando arquitetura de microfrontend, com shell em React e MFEs em Next.js.",
    technologies: [
      "React",
      "Next.js",
      "Microfrontend",
      "Module Federation",
      "UI/UX",
    ],
    impacts: [
      "Arquitetura frontend escalável e desacoplada",
      "Maior autonomia entre times de desenvolvimento",
      "Melhoria na experiência do usuário",
      "Facilidade na evolução e manutenção das interfaces",
    ],
  },
  {
    title: "Criação da Documentação Técnica",
    icon: "📚",
    category: "outras" as Category,
    description:
      "Desenvolvi a documentação do produto, facilitando o acesso e entendimento das funcionalidades e arquitetura para toda a equipe e comunidades do banco.",
    technologies: ["Docusaurus", "Markdown", "MDX"],
    impacts: [
      "Acesso centralizado às informações",
      "Onboarding facilitado para novos devs",
      "Redução de dúvidas técnicas",
      "Conhecimento compartilhado na comunidade",
    ],
  },
  {
    title: "Implementação da Escala Likert",
    icon: "📊",
    category: "frontend" as Category,
    description:
      "Desenvolvi a implementação completa da escala Likert para análise de satisfação de usuários, criando componentes reutilizáveis e integração com o sistema de feedback.",
    technologies: ["Next.js", "Styled Components", "Axios", "TypeScript"],
    impacts: [
      "Coleta de feedback estruturada",
      "Componentes reutilizáveis",
      "Análise de satisfação do usuário",
      "Melhoria contínua baseada em dados",
    ],
  },
  {
    title: "Implementação da Lib de Libras",
    icon: "🤝",
    category: "frontend" as Category,
    description:
      "Integrei a biblioteca de acessibilidade Hand Talk (Maya) na plataforma, garantindo inclusão e acessibilidade para usuários surdos, permitindo tradução em tempo real para linguagem de sinais.",
    technologies: ["Maya", "Hand Talk", "Acessibilidade", "Inclusão Digital"],
    impacts: [
      "Inclusão de usuários surdos",
      "Acessibilidade digital aumentada",
      "Tradução em tempo real para libras",
      "Conformidade com padrões de acessibilidade (WCAG)",
    ],
  },
  {
    title: "Apresentação do Modelo Atomic Design",
    icon: "⚛️",
    category: "outras" as Category,
    description:
      "Conduzi a apresentação e implementação do modelo Atomic Design, estruturando a arquitetura de componentes da aplicação em atoms, molecules, organisms, templates e pages para melhor organização e manutenibilidade.",
    technologies: [
      "Atomic Design",
      "Design System",
      "Component Architecture",
      "React",
    ],
    impacts: [
      "Organização hierárquica de componentes",
      "Reutilização aumentada",
      "Manutenção simplificada",
      "Documentação padronizada do design system",
    ],
  },
  {
    title: "Criação do User Management V2",
    icon: "👤",
    category: "backend" as Category,
    description:
      "Desenvolvi o módulo de gerenciamento de usuários utilizando NestJS e Prisma ORM, incluindo autenticação, controle de acesso e estruturação de dados escalável no novo modelo de redesign do produto.",
    technologies: [
      "NestJS",
      "Prisma ORM",
      "Authentication",
      "Authorization",
      "RBAC",
    ],
    impacts: [
      "Centralização do gerenciamento de usuários",
      "Implementação de controle de acesso seguro",
      "Estrutura escalável para crescimento do sistema",
      "Melhoria na governança de permissões",
    ],
  },
  {
    title: "Evolução do Endpoint Manager V2",
    icon: "🔌",
    category: "backend" as Category,
    description:
      "Atuei na evolução do Endpoint Manager V2 utilizando NestJS e Prisma ORM, focando em padronização de APIs, melhoria de performance e organização da camada de dados.",
    technologies: [
      "NestJS",
      "Prisma ORM",
      "Node.js",
      "API Design",
      "Database Modeling",
    ],
    impacts: [
      "Melhoria na performance das APIs",
      "Padronização dos endpoints",
      "Maior organização na camada de dados",
      "Facilidade de manutenção e escalabilidade",
    ],
  },
  {
    title: "Gestão e Evolução da Plataforma",
    icon: "⚡",
    category: "outras" as Category,
    description:
      "Atuo na melhoria contínua do Itaú Status Page, focando em alta performance, escalabilidade e usabilidade, sempre alinhado às práticas ágeis para otimizar processos e resultados.",
    technologies: [
      "Scrum",
      "Performance Optimization",
      "Scalability",
      "UI/UX",
      "Documentation",
    ],
    impacts: [
      "Melhoria contínua da plataforma",
      "Alto desempenho e escalabilidade",
      "Usabilidade otimizada",
      "Alinhamento com práticas ágeis",
    ],
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "Todas", value: "todas" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Outras Entregas", value: "outras" },
];

export default function ContribuicoesPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("todas");

  const filtered =
    activeFilter === "todas"
      ? contributions
      : contributions.filter((c) => c.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
      <AnimatedGridPattern maxOpacity={0.1} />
      <Navbar />

      <main className="relative z-10 flex flex-col w-full p-4 pt-32 md:pt-24 md:p-8">
        <div className="flex items-center justify-center w-full">
          <div className="w-full max-w-4xl space-y-8 md:space-y-12 py-8 md:py-12">
            <div className="text-center">
              <h1 className="px-4 md:p-8 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2 dark:from-orange-400 dark:to-yellow-400">
                Principais Contribuições
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                Impacto gerado durante o estágio
              </p>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                      isActive
                        ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/20"
                        : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-zinc-400 dark:text-zinc-600">
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-base">
                  Nenhuma contribuição nessa categoria ainda.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {filtered.map((contribution, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 md:p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="text-2xl md:text-3xl flex-shrink-0">
                        {contribution.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                        {contribution.title}
                      </h3>
                    </div>

                    {/* Descrição */}
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 md:mb-6">
                      {contribution.description}
                    </p>

                    {/* Tecnologias */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-xs md:text-sm font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                        <span>🔧</span>
                        Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {contribution.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-red-700 dark:text-red-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impactos */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-xs md:text-sm font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                        <span>📈</span>
                        Impactos no Produto
                      </h4>
                      <ul className="space-y-1">
                        {contribution.impacts.map((impact, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                          >
                            <span className="text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0">
                              •
                            </span>
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-2 text-xs font-semibold text-green-600 dark:text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                        Implementado com sucesso
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
