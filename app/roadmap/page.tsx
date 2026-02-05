import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { Navbar } from "@/components/ui/navbar"

export default function RoadmapPage() {
  const roadmapItems = [
    {
      section: "1. Frontend Fundamentals & React",
      icon: "⚛️",
      topics: [
        {
          title: "React Patterns e Performance",
          items: ["Hooks avançados (useMemo, useCallback, useContext)", "Code splitting e lazy loading", "Memoization", "Virtual scrolling"]
        },
        {
          title: "TypeScript Avançado",
          items: ["Generics", "Conditional types", "Type guards", "Discriminated unions", "Utility types"]
        },
        {
          title: "State Management",
          items: ["Redux / Zustand", "Context API patterns", "Performance otimizado"]
        }
      ],
      priority: "🔴 Alta"
    },
    {
      section: "2. Design Systems & Atomic Design",
      icon: "🎨",
      topics: [
        {
          title: "Atomic Design",
          items: ["Atoms, Molecules, Organisms, Templates, Pages", "Documentação de componentes", "Padrões de reutilização"]
        },
        {
          title: "Styled Components & CSS-in-JS",
          items: ["Composição de estilos", "Temas dinâmicos", "Performance em CSS-in-JS", "Dark mode implementation"]
        },
        {
          title: "Acessibilidade (A11y)",
          items: ["WCAG compliance", "ARIA labels", "Testes de acessibilidade", "Integração com Hand Talk/Libras"]
        }
      ],
      priority: "🔴 Alta"
    },
    {
      section: "3. Integração com APIs e HTTP",
      icon: "🔌",
      topics: [
        {
          title: "HTTP/REST APIs",
          items: ["Padrões RESTful", "Versionamento de APIs", "Error handling", "Rate limiting"]
        },
        {
          title: "Ferramentas de Requisição",
          items: ["Axios configuração avançada", "Fetch API", "Request/Response interceptors", "Timeout e retry"]
        },
        {
          title: "Autenticação Frontend",
          items: ["JWT tokens", "OAuth2 flow", "Refresh tokens", "Segurança de credenciais"]
        }
      ],
      priority: "🔴 Alta"
    },
    {
      section: "4. Testing & Quality Assurance",
      icon: "✅",
      topics: [
        {
          title: "Unit & Integration Testing",
          items: ["Jest + React Testing Library", "Mocking e fixtures", "Cobertura de testes"]
        },
        {
          title: "E2E Testing",
          items: ["Playwright / Cypress", "Automação de fluxos", "CI/CD integration"]
        },
        {
          title: "Performance Testing",
          items: ["Web Vitals", "Lighthouse", "Bundle analysis", "Performance profiling"]
        }
      ],
      priority: "🔴 Alta"
    },
    {
      section: "5. Observabilidade & Monitoramento Frontend",
      icon: "📊",
      topics: [
        {
          title: "CloudWatch & Logs",
          items: ["Browser console logging estruturado", "Error tracking", "User session tracking", "Custom metrics"]
        },
        {
          title: "Datadog / APM",
          items: ["Real User Monitoring (RUM)", "Session recordings", "Error analysis", "Performance dashboards"]
        },
        {
          title: "Analytics",
          items: ["Event tracking", "Funnel analysis", "User journey mapping", "Conversion tracking"]
        }
      ],
      priority: "🟠 Média"
    },
    {
      section: "6. AWS – Frontend Deployment & CDN",
      icon: "☁️",
      topics: [
        {
          title: "S3 + CloudFront",
          items: ["Deploy estático", "Cache policies", "Invalidation", "CORS configuration"]
        },
        {
          title: "API Gateway (consumidor)",
          items: ["Integração com APIs", "API keys e throttling", "CORS e CORS preflight"]
        },
        {
          title: "IAM Básico",
          items: ["Políticas de acesso", "Roles para frontend", "Credenciais temporárias via STS"]
        }
      ],
      priority: "🟠 Média"
    },
    {
      section: "7. CI/CD & Deploy Pipeline",
      icon: "🚀",
      topics: [
        {
          title: "Build & Deploy Automation",
          items: ["GitHub Actions / GitLab CI", "Builds para diferentes ambientes", "Artifact management"]
        },
        {
          title: "Estratégias de Deploy",
          items: ["Blue/Green deployment", "Canary releases", "Feature flags no frontend", "Rollback rápido"]
        },
        {
          title: "Infrastructure as Code",
          items: ["Terraform/CloudFormation para S3+CloudFront", "Environment variables", "Secrets management"]
        }
      ],
      priority: "🟠 Média"
    },
    {
      section: "8. Next.js & Frameworks Avançados",
      icon: "🔄",
      topics: [
        {
          title: "App Router (Next.js 13+)",
          items: ["File-based routing", "Server components", "Client components", "Streaming"]
        },
        {
          title: "SSR/SSG/ISR",
          items: ["Server-side rendering", "Static generation", "Incremental Static Regeneration", "Performance trade-offs"]
        },
        {
          title: "Next.js Full-stack",
          items: ["API routes", "Middleware", "Authentication patterns", "Database integration"]
        }
      ],
      priority: "🟠 Média"
    },
    {
      section: "9. Segurança Frontend & Backend Communication",
      icon: "🔐",
      topics: [
        {
          title: "Web Security",
          items: ["CORS", "CSRF protection", "XSS prevention", "Content Security Policy (CSP)"]
        },
        {
          title: "Autenticação & Autorização",
          items: ["JWT validation", "Session management", "Role-based access control (RBAC)", "OAuth2 flows"]
        },
        {
          title: "Dados Sensíveis",
          items: ["Secureção de tokens", "LocalStorage vs SessionStorage", "Encryption basics"]
        }
      ],
      priority: "🟡 Média-Baixa"
    },
    {
      section: "10. Arquitetura de Microsserviços (Visão Frontend)",
      icon: "🏗️",
      topics: [
        {
          title: "Micro Frontend Patterns",
          items: ["Module Federation", "Independência de versões", "Communication between MFEs", "Shared dependencies"]
        },
        {
          title: "Event-Driven Communication",
          items: ["Pub/sub patterns", "Event emitters", "Async workflows", "Message queues (conceitual)"]
        },
        {
          title: "Versioning & Compatibility",
          items: ["API versioning", "Breaking changes", "Deprecation strategies"]
        }
      ],
      priority: "🟡 Média-Baixa"
    }
  ]
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
                Roadmap de Aprendizado
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">Tecnologias para 100% de manutenção do produto</p>
            </div>

            {/* Ordem de Estudo Sugerida */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl border border-purple-200 dark:border-purple-800 p-5 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6">
                📚 Roadmap por Objetivo de Carreira
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="border-l-4 border-blue-600 pl-4 md:pl-6">
                  <h3 className="text-base md:text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Estagiário (Agora)</h3>
                  <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">→</span>
                      <span>React Fundamentals & Hooks</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">→</span>
                      <span>TypeScript na prática</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">→</span>
                      <span>Design Systems & Styled Components</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">→</span>
                      <span>Integração com APIs (Axios)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">→</span>
                      <span>Testing básico (Jest + RTL)</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-600 pl-4 md:pl-6">
                  <h3 className="text-base md:text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">Junior (6-12 meses)</h3>
                  <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
                    <li className="flex gap-2">
                      <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">→</span>
                      <span>State Management (Redux/Zustand)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">→</span>
                      <span>Performance & Code Splitting</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">→</span>
                      <span>Autenticação & Segurança Frontend</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">→</span>
                      <span>AWS S3 + CloudFront Deploy</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">→</span>
                      <span>CI/CD & GitHub Actions</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-600 pl-4 md:pl-6">
                  <h3 className="text-base md:text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">Pleno (1-2 anos)</h3>
                  <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
                    <li className="flex gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 flex-shrink-0">→</span>
                      <span>Next.js Full-Stack (SSR, SSG, API Routes)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 flex-shrink-0">→</span>
                      <span>Observabilidade Frontend (Datadog, CloudWatch)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 flex-shrink-0">→</span>
                      <span>Micro Frontends (Module Federation)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 flex-shrink-0">→</span>
                      <span>Acessibilidade & Web Standards</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 flex-shrink-0">→</span>
                      <span>Backend conceitual (Node/NestJS básico)</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-600 pl-4 md:pl-6">
                  <h3 className="text-base md:text-lg font-bold text-pink-600 dark:text-pink-400 mb-2">Senior (2+ anos)</h3>
                  <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
                    <li className="flex gap-2">
                      <span className="text-pink-600 dark:text-pink-400 flex-shrink-0">→</span>
                      <span>Arquitetura de Sistemas Distribuídos</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-600 dark:text-pink-400 flex-shrink-0">→</span>
                      <span>Event-Driven Patterns</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-600 dark:text-pink-400 flex-shrink-0">→</span>
                      <span>Backend em Profundidade</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-600 dark:text-pink-400 flex-shrink-0">→</span>
                      <span>Infrastructure & DevOps Avançado</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-600 dark:text-pink-400 flex-shrink-0">→</span>
                      <span>Mentorado & Tech Leadership</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Priority Guide */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
              <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 md:p-4 border border-zinc-200 dark:border-zinc-800">
                <p className="text-xs md:text-sm font-semibold text-zinc-900 dark:text-white">🔴 Alta</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Frontend essencial (Estag/Junior)</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 md:p-4 border border-zinc-200 dark:border-zinc-800">
                <p className="text-xs md:text-sm font-semibold text-zinc-900 dark:text-white">🟠 Média</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Fullstack (Pleno)</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 md:p-4 border border-zinc-200 dark:border-zinc-800">
                <p className="text-xs md:text-sm font-semibold text-zinc-900 dark:text-white">🟡 Média-Baixa</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Arquitetura (Senior)</p>
              </div>
            </div>

            {/* Roadmap Items */}
            <div className="space-y-4 md:space-y-8">
              {roadmapItems.map((item, index) => (
                <div key={index} className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 md:p-6 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-start justify-between gap-2 md:gap-4">
                      <div className="flex items-start gap-3 md:gap-4 flex-1 min-w-0">
                        <span className="text-2xl md:text-4xl flex-shrink-0">{item.icon}</span>
                        <div className="min-w-0">
                          <h2 className="text-base md:text-xl font-bold text-zinc-900 dark:text-white break-words">
                            {item.section}
                          </h2>
                        </div>
                      </div>
                      <span className="text-xs md:text-sm font-semibold px-2 md:px-3 py-1 bg-white dark:bg-zinc-800 rounded-full text-zinc-900 dark:text-white whitespace-nowrap flex-shrink-0">
                        {item.priority}
                      </span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                    {item.topics.map((topic, topicIndex) => (
                      <div key={topicIndex}>
                        <h3 className="text-xs md:text-sm font-bold text-zinc-900 dark:text-white mb-2 md:mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0"></span>
                          <span>{topic.title}</span>
                        </h3>
                        <div className="flex flex-wrap gap-2 ml-4">
                          {topic.items.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className="px-2 md:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
