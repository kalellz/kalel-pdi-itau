export type Technology = {
  name: string;
  status: "green" | "yellow" | "red";
};

export type Section = {
  title: string;
  technologies: Technology[];
};

export type TechComponent = {
  name: string;
  sections: Section[];
};

export const itauStatusPage: TechComponent = {
  name: "Itaú Status Page",
  sections: [
    {
      title: "Frontend",
      technologies: [
        { name: "React", status: "green" },
        { name: "Next.js", status: "green" },
        { name: "Axios", status: "green" },
        { name: "React Query", status: "green" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", status: "yellow" },
        { name: "Nest.js", status: "yellow" },
        { name: "PrismaORM", status: "yellow" },
        { name: "Java", status: "yellow" },
        { name: "Quarkus", status: "red" },
        { name: "Apache Camel", status: "red" },
      ],
    },
    {
      title: "Infraestrutura e Serviços AWS",
      technologies: [
        { name: "CloudFront (CDN)", status: "yellow" },
        { name: "API Gateway", status: "yellow" },
        { name: "Lambda", status: "yellow" },
        { name: "ECS", status: "yellow" },
        { name: "ELB", status: "yellow" },
        { name: "S3", status: "yellow" },
        { name: "DynamoDB", status: "yellow" },
        { name: "EventBridge", status: "red" },
        { name: "Step Functions", status: "red" },
        { name: "CloudWatch", status: "yellow" },
        { name: "Secrets Manager", status: "red" },
        { name: "SQS", status: "red" },
        { name: "SNS", status: "red" },
        { name: "IAM", status: "red" },
        { name: "Route53", status: "red" },
        { name: "Cognito / SSO", status: "red" },
      ],
    },
    {
      title: "Outros Componentes e Frameworks",
      technologies: [
        { name: "PostgreSQL", status: "yellow" },
        { name: "Redis", status: "red" },
        { name: "OpenSearch", status: "red" },
        { name: "Kafka", status: "red" },
        { name: "Prometheus / Grafana", status: "red" },
      ],
    },
    {
      title: "Infrastructure as Code",
      technologies: [
        { name: "Terraform", status: "red" },
        { name: "CloudFormation", status: "red" },
      ],
    },
  ],
};

export const itau: TechComponent = {
  name: "Itaú",
  sections: [
    {
      title: "Frontend",
      technologies: [
        { name: "Angular", status: "yellow" },
        { name: "Module Federation", status: "green" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Java (Spring)", status: "red" },
        { name: "Dotnet", status: "red" },
      ],
    },
    {
      title: "Infraestrutura",
      technologies: [{ name: "AWS", status: "yellow" }],
    },
    {
      title: "Infrastructure as Code",
      technologies: [{ name: "Terraform", status: "red" }],
    },
  ],
};

export const technologyDetails: Record<
  string,
  { name: string; description: string; project: string }
> = {
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
