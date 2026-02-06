"use client";

import { useState, useEffect } from "react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Navbar } from "@/components/ui/navbar";

interface Technology {
  name: string;
  known: boolean;
}

interface Section {
  title: string;
  technologies: Technology[];
}

interface TechComponent {
  name: string;
  sections: Section[];
}

export default function RoadmapPage() {
  const itauStatusPage: TechComponent = {
    name: "Itaú Status Page",
    sections: [
      {
        title: "Frontend",
        technologies: [
          { name: "React", known: true },
          { name: "Next.js", known: true },
          { name: "Axios", known: true },
          { name: "React Query", known: true },
        ],
      },
      {
        title: "Backend",
        technologies: [
          { name: "Node.js", known: true },
          { name: "Nest.js", known: true },
          { name: "PrismaORM", known: false },
          { name: "Java", known: true },
          { name: "Quarkus", known: false },
          { name: "Apache Camel", known: false },
        ],
      },
      {
        title: "Infraestrutura e Serviços AWS",
        technologies: [
          { name: "CloudFront (CDN)", known: false },
          { name: "API Gateway", known: true },
          { name: "Lambda", known: true },
          { name: "ECS", known: false },
          { name: "ELB", known: false },
          { name: "S3", known: true },
          { name: "DynamoDB", known: false },
          { name: "EventBridge", known: false },
          { name: "Step Functions", known: false },
          { name: "CloudWatch", known: false },
          { name: "Secrets Manager", known: false },
          { name: "SQS", known: false },
          { name: "SNS", known: false },
          { name: "IAM", known: false },
          { name: "Route53", known: false },
          { name: "Cognito / SSO", known: false },
        ],
      },
      {
        title: "Outros Componentes e Frameworks",
        technologies: [
          { name: "PostgreSQL", known: false },
          { name: "Redis", known: false },
          { name: "OpenSearch", known: false },
          { name: "Kafka", known: false },
          { name: "Prometheus / Grafana", known: false },
        ],
      },
      {
        title: "Infrastructure as Code",
        technologies: [
          { name: "Terraform", known: false },
          { name: "CloudFormation", known: false },
        ],
      },
    ],
  };

  const itau: TechComponent = {
    name: "Itaú",
    sections: [
      {
        title: "Frontend",
        technologies: [
          { name: "Angular", known: true },
          { name: "Module Federation", known: true },
        ],
      },
      {
        title: "Backend",
        technologies: [
          { name: "Java (Spring)", known: false },
          { name: "Dotnet", known: false },
        ],
      },
      {
        title: "Infraestrutura",
        technologies: [{ name: "AWS", known: false }],
      },
      {
        title: "Infrastructure as Code",
        technologies: [{ name: "Terraform", known: false }],
      },
    ],
  };

  const technologyDetails: Record<
    string,
    { name: string; description: string; project: string }
  > = {
    // Itaú Status Page - Frontend
    React: {
      name: "React",
      description:
        "Biblioteca JavaScript para construir interfaces com componentes",
      project: "Itaú Status Page",
    },
    "Next.js": {
      name: "Next.js",
      description: "Framework React com SSR, SSG e API routes",
      project: "Itaú Status Page",
    },
    Axios: {
      name: "Axios",
      description: "Cliente HTTP para requisições ao servidor",
      project: "Itaú Status Page",
    },
    "React Query": {
      name: "React Query",
      description:
        "Gerenciamento de estado para dados assíncronos e requisições",
      project: "Itaú Status Page",
    },

    // Itaú Status Page - Backend
    "Node.js": {
      name: "Node.js",
      description: "Runtime JavaScript para backend",
      project: "Itaú Status Page",
    },
    "Nest.js": {
      name: "Nest.js",
      description: "Framework Node.js progressivo para aplicações escaláveis",
      project: "Itaú Status Page",
    },
    PrismaORM: {
      name: "PrismaORM",
      description: "ORM moderna para Node.js e TypeScript",
      project: "Itaú Status Page",
    },
    Java: {
      name: "Java",
      description: "Linguagem de programação orientada a objetos",
      project: "Itaú Status Page",
    },
    Quarkus: {
      name: "Quarkus",
      description: "Framework Java otimizado para containers e serverless",
      project: "Itaú Status Page",
    },
    "Apache Camel": {
      name: "Apache Camel",
      description:
        "Motor de integração para roteamento e mediação de mensagens",
      project: "Itaú Status Page",
    },

    // Itaú Status Page - AWS
    "CloudFront (CDN)": {
      name: "CloudFront",
      description: "CDN para distribuição de conteúdo com baixa latência",
      project: "Itaú Status Page",
    },
    "API Gateway": {
      name: "API Gateway",
      description: "Gateway de API para criar, publicar e gerenciar APIs",
      project: "Itaú Status Page",
    },
    Lambda: {
      name: "Lambda",
      description: "Serviço de computação serverless para funções",
      project: "Itaú Status Page",
    },
    ECS: {
      name: "ECS",
      description:
        "Elastic Container Service para orquestração de containers Docker",
      project: "Itaú Status Page",
    },
    ELB: {
      name: "ELB",
      description:
        "Elastic Load Balancer para distribuir tráfego entre instâncias",
      project: "Itaú Status Page",
    },
    S3: {
      name: "S3",
      description: "Serviço de armazenamento de objetos escalável",
      project: "Itaú Status Page",
    },
    DynamoDB: {
      name: "DynamoDB",
      description: "Banco de dados NoSQL gerenciado para dados em tempo real",
      project: "Itaú Status Page",
    },
    EventBridge: {
      name: "EventBridge",
      description: "Barramento de eventos para integrar aplicações e serviços",
      project: "Itaú Status Page",
    },
    "Step Functions": {
      name: "Step Functions",
      description: "Serviço para orquestração visual de workflows",
      project: "Itaú Status Page",
    },
    CloudWatch: {
      name: "CloudWatch",
      description: "Serviço de monitoramento, logging e observabilidade",
      project: "Itaú Status Page",
    },
    "Secrets Manager": {
      name: "Secrets Manager",
      description: "Serviço para gerenciar e rotacionar segredos",
      project: "Itaú Status Page",
    },
    SQS: {
      name: "SQS",
      description: "Fila de mensagens totalmente gerenciada",
      project: "Itaú Status Page",
    },
    SNS: {
      name: "SNS",
      description: "Serviço de notificações push pub/sub",
      project: "Itaú Status Page",
    },
    IAM: {
      name: "IAM",
      description: "Gerenciamento de identidade e controle de acesso",
      project: "Itaú Status Page",
    },
    Route53: {
      name: "Route53",
      description: "Serviço de DNS escalável da AWS",
      project: "Itaú Status Page",
    },
    "Cognito / SSO": {
      name: "Cognito / SSO",
      description: "Serviço de autenticação, autorização e SSO",
      project: "Itaú Status Page",
    },

    // Itaú Status Page - Outros
    PostgreSQL: {
      name: "PostgreSQL",
      description: "Banco de dados relacional robusto e open-source",
      project: "Itaú Status Page",
    },
    Redis: {
      name: "Redis",
      description: "Cache em memória para high-performance",
      project: "Itaú Status Page",
    },
    OpenSearch: {
      name: "OpenSearch",
      description: "Motor de busca e análise distribuído",
      project: "Itaú Status Page",
    },
    Kafka: {
      name: "Kafka",
      description: "Plataforma de streaming e mensageria distribuída",
      project: "Itaú Status Page",
    },
    "Prometheus / Grafana": {
      name: "Prometheus / Grafana",
      description: "Stack de monitoramento e visualização de métricas",
      project: "Itaú Status Page",
    },
    Terraform: {
      name: "Terraform",
      description:
        "Ferramenta Infrastructure as Code para provisionar recursos em nuvem",
      project: "Itaú Status Page",
    },
    CloudFormation: {
      name: "CloudFormation",
      description: "Serviço AWS para definir infraestrutura como código",
      project: "Itaú Status Page",
    },

    // Itaú
    Angular: {
      name: "Angular",
      description: "Framework TypeScript para construir SPAs",
      project: "Itaú",
    },
    "Module Federation": {
      name: "Module Federation",
      description: "Padrão de micro frontends para compartilhar código",
      project: "Itaú",
    },
    "Java (Spring)": {
      name: "Java (Spring)",
      description: "Framework Spring para aplicações Java robustas",
      project: "Itaú",
    },
    Dotnet: {
      name: "Dotnet",
      description: "Plataforma .NET para desenvolvimento multiplataforma",
      project: "Itaú",
    },
    AWS: {
      name: "AWS",
      description: "Amazon Web Services para infraestrutura em nuvem",
      project: "Itaú",
    },
  };
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
                const isSelected = tech.known
                return (
                  <div
                    key={techIndex}
                    className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700"
                        : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                    }`}
                  >
                    {isSelected && "✓ "}{tech.name}
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
            </div>

            {/* Components */}
            <div className="space-y-6 md:space-y-8">
              {renderTechComponent(itauStatusPage)}
              {renderTechComponent(itau)}
            </div>
                {/* Content */}
                {(() => {
              const knownTechs: { project: string; section: string; tech: Technology }[] = []
              ;[itauStatusPage, itau].forEach(component => {
                component.sections.forEach(section => {
                  section.technologies.forEach(tech => {
                    if (tech.known) {
                      knownTechs.push({ project: component.name, section: section.title, tech })
                    }
                  })
                })
              })
              if (knownTechs.length === 0) return null;
              const grouped: Record<string, Record<string, Technology[]>> = {}
              knownTechs.forEach(item => {
                if (!grouped[item.project]) grouped[item.project] = {}
                if (!grouped[item.project][item.section]) grouped[item.project][item.section] = []
                grouped[item.project][item.section].push(item.tech)
              })
              let projectIndex = 0
                    return (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800 overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 md:p-6 border-b border-green-200 dark:border-green-800">
                  <h2 className="text-xl md:text-2xl font-bold text-green-900 dark:text-green-100">
                    ✓ Visualização Rápida ({knownTechs.length} tecnologia{knownTechs.length !== 1 ? 's' : ''} selecionada{knownTechs.length !== 1 ? 's' : ''})
                  </h2>
                  <p className="text-xs md:text-sm text-green-700 dark:text-green-300 mt-1">
                    Tecnologias que você já domina
                  </p>
                </div>
                <div className="p-4 md:p-6">
                  {Object.entries(grouped).map(([project, sections]) => (
                    <div key={project} className={projectIndex++ > 0 ? "pt-6 border-t border-green-200 dark:border-green-800" : ""}>
                      <h3 className="text-base md:text-lg font-bold text-green-900 dark:text-green-100 mb-4 md:mb-5">
                        {project}
                      </h3>
                      <div className="space-y-4 md:space-y-5 pl-0 md:pl-4">
                        {Object.entries(sections).map(([sectionTitle, techs]) => (
                          <div key={sectionTitle}>
                            <p className="text-xs md:text-sm font-semibold text-green-700 dark:text-green-300 mb-2 md:mb-3">
                              {sectionTitle}
                            </p>
                            <div className="space-y-2 md:space-y-2">
                              {techs.map((tech, techIndex) => {
                                const detail = technologyDetails[tech.name]
                                return (
                                  <div key={techIndex} className="bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-lg border border-green-200 dark:border-green-800/50">
                                    <div className="flex items-start gap-2 md:gap-3">
                                      <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-green-900 dark:text-green-100 text-sm md:text-base">
                                          {detail?.name || tech.name}
                                        </p>
                                        <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                          {detail?.description || "Tecnologia selecionada"}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              )
            })()}
            {(() => {
              const missingTechs: { project: string; section: string; tech: Technology }[] = []
              ;[itauStatusPage, itau].forEach(component => {
                component.sections.forEach(section => {
                  section.technologies.forEach(tech => {
                    if (!tech.known) {
                      missingTechs.push({ project: component.name, section: section.title, tech })
                    }
                  })
                })
              })
              if (missingTechs.length === 0) return null
              const grouped: Record<string, Record<string, Technology[]>> = {}
              missingTechs.forEach(item => {
                if (!grouped[item.project]) grouped[item.project] = {}
                if (!grouped[item.project][item.section]) grouped[item.project][item.section] = []
                grouped[item.project][item.section].push(item.tech)
              })
              let projectIndex = 0
              return (
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-200 dark:border-red-800 overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 p-4 md:p-6 border-b border-red-200 dark:border-red-800">
                    <h2 className="text-xl md:text-2xl font-bold text-red-900 dark:text-red-100">
                      📚 Ainda Faltam Aprender ({missingTechs.length} tecnologia{missingTechs.length !== 1 ? 's' : ''})
                    </h2>
                    <p className="text-xs md:text-sm text-red-700 dark:text-red-300 mt-1">
                      Tecnologias que você ainda precisa dominar
                    </p>
                  </div>
                  <div className="p-4 md:p-6">
                    {Object.entries(grouped).map(([project, sections]) => (
                      <div key={project} className={projectIndex++ > 0 ? "pt-6 border-t border-red-200 dark:border-red-800" : ""}>
                        <h3 className="text-base md:text-lg font-bold text-red-900 dark:text-red-100 mb-4 md:mb-5">
                          {project}
                        </h3>
                        <div className="space-y-4 md:space-y-5 pl-0 md:pl-4">
                          {Object.entries(sections).map(([sectionTitle, techs]) => (
                            <div key={sectionTitle}>
                              <p className="text-xs md:text-sm font-semibold text-red-700 dark:text-red-300 mb-2 md:mb-3">
                                {sectionTitle}
                              </p>
                              <div className="space-y-2 md:space-y-2">
                                {techs.map((tech, techIndex) => {
                                  const detail = technologyDetails[tech.name]
                                  return (
                                    <div key={techIndex} className="bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-lg border border-red-200 dark:border-red-800/50">
                                      <div className="flex items-start gap-2 md:gap-3">
                                        <span className="text-red-600 dark:text-red-400 font-bold flex-shrink-0">→</span>
                                        <div className="flex-1 min-w-0">
                                          <p className="font-semibold text-red-900 dark:text-red-100 text-sm md:text-base">
                                            {detail?.name || tech.name}
                                          </p>
                                          <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                            {detail?.description || "Tecnologia para aprender"}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      </main>
    </div>
  );
}