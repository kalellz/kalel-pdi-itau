export function ContributionsSection() {
  const contributions = [
    {
      title: "Desenvolvimento de Sistema de Notificações",
      description: "Implementei todo o sistema front-end de notificações do Itaú Status Page utilizando Next.js, Styled Components, Axios e TypeScript, garantindo comunicação eficiente e em tempo real sobre o status dos serviços.",
      icon: "🔔"
    },
    {
      title: "Discovery e Implementação do Modelo de Micro Frontends (MFE)",
      description: "Liderei o processo de discovery e a implementação do modelo de MFE no redesign do produto, estudando a melhor estrutura para a aplicação e conduzindo essa frente no frontend para garantir modularidade e escalabilidade.",
      icon: "🏗️"
    },
    {
      title: "Criação da Documentação Técnica",
      description: "Desenvolvi a documentação do projeto utilizando Docusaurus, facilitando o acesso e entendimento das funcionalidades e arquitetura para toda a equipe e comunidades do banco.",
      icon: "📚"
    },
    {
      title: "Gestão e Evolução da Plataforma",
      description: "Atuo na melhoria contínua do Itaú Status Page, focando em alta performance, escalabilidade e usabilidade, sempre alinhado às práticas ágeis do Scrum para otimizar processos e resultados.",
      icon: "⚡"
    }
  ]

  return (
    <section id="contribuicoes" className="space-y-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 dark:from-blue-400 dark:to-purple-400">
          Principais Contribuições
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">Impacto gerado durante o estágio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contributions.map((contribution, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">{contribution.icon}</div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex-1">
                {contribution.title}
              </h3>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {contribution.description}
            </p>

            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                Implementado com sucesso
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
