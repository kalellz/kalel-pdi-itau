'use client'

import { useState, useEffect } from 'react'
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { Navbar } from "@/components/ui/navbar"

export default function RoadmapPage() {
  // Estado para controlar se as tecnologias são editáveis
  const isEditableItauStatusPage = false  // Defina como false para apenas leitura
  const isEditableItau = false  // Defina como false para apenas leitura

  // Estado para rastrear tecnologias selecionadas com persistência
  const [selectedTechnologies, setSelectedTechnologies] = useState<Set<string>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)

  // Carregar do localStorage ao montar o componente
  useEffect(() => {
    const savedTechs = localStorage.getItem('selectedTechnologies')
    if (savedTechs) {
      try {
        const techsArray = JSON.parse(savedTechs)
        setSelectedTechnologies(new Set(techsArray))
      } catch (error) {
        console.error('Erro ao carregar tecnologias salvas:', error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Salvar no localStorage quando o estado mudar
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('selectedTechnologies', JSON.stringify(Array.from(selectedTechnologies)))
    }
  }, [selectedTechnologies, isLoaded])

  const toggleTechnology = (techName: string) => {
    if (!isEditableItauStatusPage && !isEditableItau) return
    
    const newSelected = new Set(selectedTechnologies)
    if (newSelected.has(techName)) {
      newSelected.delete(techName)
    } else {
      newSelected.add(techName)
    }
    setSelectedTechnologies(newSelected)
  }

  const itauStatusPage = {
    name: "Itaú Status Page",
    sections: [
      {
        title: "Frontend",
        technologies: ["React", "Next.js", "Axios", "React Query"]
      },
      {
        title: "Backend",
        technologies: ["Node.js", "Nest.js", "PrismaORM", "Java", "Quarkus", "Apache Camel"]
      },
      {
        title: "Infraestrutura e Serviços AWS",
        technologies: [
          "CloudFront (CDN)",
          "API Gateway",
          "Lambda",
          "ECS",
          "ELB",
          "S3",
          "DynamoDB",
          "EventBridge",
          "Step Functions",
          "CloudWatch",
          "Secrets Manager",
          "SQS",
          "SNS",
          "IAM",
          "Route53",
          "Cognito / SSO"
        ]
      },
      {
        title: "Outros Componentes e Frameworks",
        technologies: ["PostgreSQL", "Redis", "OpenSearch", "Kafka", "Prometheus / Grafana"]
      },
      {
        title: "Infrastructure as Code",
        technologies: ["Terraform", "CloudFormation"]
      }
    ]
  }

  const itau = {
    name: "Itaú",
    sections: [
      {
        title: "Frontend",
        technologies: ["Angular", "Module Federation"]
      },
      {
        title: "Backend",
        technologies: ["Java (Spring)", "Dotnet"]
      },
      {
        title: "Infraestrutura",
        technologies: ["AWS"]
      },
      {
        title: "Infrastructure as Code",
        technologies: ["Terraform"]
      }
    ]
  }

  const technologyDetails: Record<string, { name: string; description: string; project: string }> = {
    // Itaú Status Page - Frontend
    "React": { name: "React", description: "Biblioteca JavaScript para construir interfaces com componentes", project: "Itaú Status Page" },
    "Next.js": { name: "Next.js", description: "Framework React com SSR, SSG e API routes", project: "Itaú Status Page" },
    "Axios": { name: "Axios", description: "Cliente HTTP para requisições ao servidor", project: "Itaú Status Page" },
    "React Query": { name: "React Query", description: "Gerenciamento de estado para dados assíncronos e requisições", project: "Itaú Status Page" },

    // Itaú Status Page - Backend
    "Node.js": { name: "Node.js", description: "Runtime JavaScript para backend", project: "Itaú Status Page" },
    "Nest.js": { name: "Nest.js", description: "Framework Node.js progressivo para aplicações escaláveis", project: "Itaú Status Page" },
    "PrismaORM": { name: "PrismaORM", description: "ORM moderna para Node.js e TypeScript", project: "Itaú Status Page" },
    "Java": { name: "Java", description: "Linguagem de programação orientada a objetos", project: "Itaú Status Page" },
    "Quarkus": { name: "Quarkus", description: "Framework Java otimizado para containers e serverless", project: "Itaú Status Page" },
    "Apache Camel": { name: "Apache Camel", description: "Motor de integração para roteamento e mediação de mensagens", project: "Itaú Status Page" },

    // Itaú Status Page - AWS
    "CloudFront (CDN)": { name: "CloudFront", description: "CDN para distribuição de conteúdo com baixa latência", project: "Itaú Status Page" },
    "API Gateway": { name: "API Gateway", description: "Gateway de API para criar, publicar e gerenciar APIs", project: "Itaú Status Page" },
    "Lambda": { name: "Lambda", description: "Serviço de computação serverless para funções", project: "Itaú Status Page" },
    "ECS": { name: "ECS", description: "Elastic Container Service para orquestração de containers Docker", project: "Itaú Status Page" },
    "ELB": { name: "ELB", description: "Elastic Load Balancer para distribuir tráfego entre instâncias", project: "Itaú Status Page" },
    "S3": { name: "S3", description: "Serviço de armazenamento de objetos escalável", project: "Itaú Status Page" },
    "DynamoDB": { name: "DynamoDB", description: "Banco de dados NoSQL gerenciado para dados em tempo real", project: "Itaú Status Page" },
    "EventBridge": { name: "EventBridge", description: "Barramento de eventos para integrar aplicações e serviços", project: "Itaú Status Page" },
    "Step Functions": { name: "Step Functions", description: "Serviço para orquestração visual de workflows", project: "Itaú Status Page" },
    "CloudWatch": { name: "CloudWatch", description: "Serviço de monitoramento, logging e observabilidade", project: "Itaú Status Page" },
    "Secrets Manager": { name: "Secrets Manager", description: "Serviço para gerenciar e rotacionar segredos", project: "Itaú Status Page" },
    "SQS": { name: "SQS", description: "Fila de mensagens totalmente gerenciada", project: "Itaú Status Page" },
    "SNS": { name: "SNS", description: "Serviço de notificações push pub/sub", project: "Itaú Status Page" },
    "IAM": { name: "IAM", description: "Gerenciamento de identidade e controle de acesso", project: "Itaú Status Page" },
    "Route53": { name: "Route53", description: "Serviço de DNS escalável da AWS", project: "Itaú Status Page" },
    "Cognito / SSO": { name: "Cognito / SSO", description: "Serviço de autenticação, autorização e SSO", project: "Itaú Status Page" },

    // Itaú Status Page - Outros
    "PostgreSQL": { name: "PostgreSQL", description: "Banco de dados relacional robusto e open-source", project: "Itaú Status Page" },
    "Redis": { name: "Redis", description: "Cache em memória para high-performance", project: "Itaú Status Page" },
    "OpenSearch": { name: "OpenSearch", description: "Motor de busca e análise distribuído", project: "Itaú Status Page" },
    "Kafka": { name: "Kafka", description: "Plataforma de streaming e mensageria distribuída", project: "Itaú Status Page" },
    "Prometheus / Grafana": { name: "Prometheus / Grafana", description: "Stack de monitoramento e visualização de métricas", project: "Itaú Status Page" },
    "Terraform": { name: "Terraform", description: "Ferramenta Infrastructure as Code para provisionar recursos em nuvem", project: "Itaú Status Page" },
    "CloudFormation": { name: "CloudFormation", description: "Serviço AWS para definir infraestrutura como código", project: "Itaú Status Page" },

    // Itaú
    "Angular": { name: "Angular", description: "Framework TypeScript para construir SPAs", project: "Itaú" },
    "Module Federation": { name: "Module Federation", description: "Padrão de micro frontends para compartilhar código", project: "Itaú" },
    "Java (Spring)": { name: "Java (Spring)", description: "Framework Spring para aplicações Java robustas", project: "Itaú" },
    "Dotnet": { name: "Dotnet", description: "Plataforma .NET para desenvolvimento multiplataforma", project: "Itaú" },
    "AWS": { name: "AWS", description: "Amazon Web Services para infraestrutura em nuvem", project: "Itaú" },
  }
  const renderTechComponent = (component: typeof itauStatusPage, isEditable: boolean) => (
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
                const isSelected = selectedTechnologies.has(tech)
                return (
                  <button
                    key={techIndex}
                    onClick={() => isEditable && toggleTechnology(tech)}
                    disabled={!isEditable}
                    className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700"
                        : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                    } ${
                      isEditable
                        ? "cursor-pointer hover:shadow-md hover:scale-105"
                        : ""
                    }`}
                  >
                    {isSelected && "✓ "}{tech}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

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
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">Tecnologias utilizadas nos projetos</p>
            </div>

            {/* Components */}
            <div className="space-y-6 md:space-y-8">
              {renderTechComponent(itauStatusPage, isEditableItauStatusPage)}
              {renderTechComponent(itau, isEditableItau)}
            </div>

            {/* Quick View */}
            {selectedTechnologies.size > 0 && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800 overflow-hidden shadow-lg">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 md:p-6 border-b border-green-200 dark:border-green-800">
                  <h2 className="text-xl md:text-2xl font-bold text-green-900 dark:text-green-100">
                    ✓ Visualização Rápida ({selectedTechnologies.size} tecnologia{selectedTechnologies.size !== 1 ? 's' : ''} selecionada{selectedTechnologies.size !== 1 ? 's' : ''})
                  </h2>
                  <p className="text-xs md:text-sm text-green-700 dark:text-green-300 mt-1">
                    Tecnologias que você já domina
                  </p>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  {/* Group by project and section */}
                  {(() => {
                    const groupedByProjectAndSection: Record<string, Record<string, string[]>> = {}
                    const allComponents = [itauStatusPage, itau]

                    allComponents.forEach(component => {
                      component.sections.forEach(section => {
                        section.technologies.forEach(tech => {
                          if (selectedTechnologies.has(tech)) {
                            const project = component.name
                            const sectionTitle = section.title
                            if (!groupedByProjectAndSection[project]) {
                              groupedByProjectAndSection[project] = {}
                            }
                            if (!groupedByProjectAndSection[project][sectionTitle]) {
                              groupedByProjectAndSection[project][sectionTitle] = []
                            }
                            groupedByProjectAndSection[project][sectionTitle].push(tech)
                          }
                        })
                      })
                    })

                    let projectIndex = 0
                    return Object.entries(groupedByProjectAndSection).map(([project, sections]) => (
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
                                  const detail = technologyDetails[tech]
                                  return (
                                    <div key={techIndex} className="bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-lg border border-green-200 dark:border-green-800/50">
                                      <div className="flex items-start gap-2 md:gap-3">
                                        <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                                        <div className="flex-1 min-w-0">
                                          <p className="font-semibold text-green-900 dark:text-green-100 text-sm md:text-base">
                                            {detail?.name || tech}
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
                    ))
                  })()}
                </div>
              </div>
            )}

            {/* Missing Technologies */}
            {(() => {
              const allTechs = new Set<string>()
              ;[itauStatusPage, itau].forEach(component => {
                component.sections.forEach(section => {
                  section.technologies.forEach(tech => allTechs.add(tech))
                })
              })

              const missingTechs = Array.from(allTechs).filter(tech => !selectedTechnologies.has(tech))

              if (missingTechs.length > 0) {
                return (
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-200 dark:border-red-800 overflow-hidden shadow-lg">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 p-4 md:p-6 border-b border-red-200 dark:border-red-800">
                      <h2 className="text-xl md:text-2xl font-bold text-red-900 dark:text-red-100">
                        📚 Ainda Faltam Aprender ({missingTechs.length} tecnologia{missingTechs.length !== 1 ? 's' : ''})
                      </h2>
                      <p className="text-xs md:text-sm text-red-700 dark:text-red-300 mt-1">
                        Tecnologias que você ainda precisa dominar
                      </p>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6">
                      {/* Group by project and section */}
                      {(() => {
                        const groupedByProjectAndSection: Record<string, Record<string, string[]>> = {}
                        const allComponents = [itauStatusPage, itau]

                        allComponents.forEach(component => {
                          component.sections.forEach(section => {
                            section.technologies.forEach(tech => {
                              if (missingTechs.includes(tech)) {
                                const project = component.name
                                const sectionTitle = section.title
                                if (!groupedByProjectAndSection[project]) {
                                  groupedByProjectAndSection[project] = {}
                                }
                                if (!groupedByProjectAndSection[project][sectionTitle]) {
                                  groupedByProjectAndSection[project][sectionTitle] = []
                                }
                                groupedByProjectAndSection[project][sectionTitle].push(tech)
                              }
                            })
                          })
                        })

                        let projectIndex = 0
                        return Object.entries(groupedByProjectAndSection).map(([project, sections]) => (
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
                                      const detail = technologyDetails[tech]
                                      return (
                                        <div key={techIndex} className="bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-lg border border-red-200 dark:border-red-800/50">
                                          <div className="flex items-start gap-2 md:gap-3">
                                            <span className="text-red-600 dark:text-red-400 font-bold flex-shrink-0">→</span>
                                            <div className="flex-1 min-w-0">
                                              <p className="font-semibold text-red-900 dark:text-red-100 text-sm md:text-base">
                                                {detail?.name || tech}
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
                        ))
                      })()}
                    </div>
                  </div>
                )
              }
            })()}
          </div>
        </div>
      </main>
    </div>
  );
}
