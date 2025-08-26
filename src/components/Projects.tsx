import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Sistema de Gestão Hospitalar",
    industry: "Saúde",
    description: "Solução abrangente de transformação digital para operações de saúde, melhorando o atendimento ao paciente e a eficiência operacional.",
    year: "2023",
    logoPlaceholder: "Logo Unimed",
    isRecent: false,
    isLogistics: false
  },
  {
    title: "Plataforma de Monitoramento Energético",
    industry: "Energia e Utilities",
    description: "Plataforma avançada de monitoramento e análise para otimização de distribuição e consumo de energia.",
    year: "2023",
    logoPlaceholder: "Logo Energisa",
    isRecent: false,
    isLogistics: false
  },
  {
    title: "Sistema de Automação Industrial",
    industry: "Manufatura",
    description: "Solução inteligente de automação para processos industriais, aumentando a produtividade e reduzindo custos operacionais.",
    year: "2022",
    logoPlaceholder: "Logo Conlog",
    isRecent: false,
    isLogistics: false
  },
  {
    title: "Plataforma Digital de Pedidos",
    industry: "Alimentação e Varejo",
    description: "Sistema moderno de pedidos digitais e gestão para melhor experiência do cliente e eficiência operacional.",
    year: "2022",
    logoPlaceholder: "Logo McDonald's",
    isRecent: false,
    isLogistics: false
  },
  {
    title: "Otimização da Cadeia de Suprimentos",
    industry: "Logística e Transporte",
    description: "Sistema completo de gestão logística com rastreamento em tempo real, otimização de rotas e gestão de estoque.",
    year: "2024",
    logoPlaceholder: "Logo LogiX",
    isRecent: true,
    isLogistics: true
  },
  {
    title: "Solução de Gestão de Frota",
    industry: "Logística e Transporte",
    description: "Plataforma abrangente de gestão de frota com rastreamento GPS, agendamento de manutenção e análise de desempenho.",
    year: "2024",
    logoPlaceholder: "Logo Horizon",
    isRecent: true,
    isLogistics: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosso Portfólio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fizemos parcerias com líderes do setor para entregar soluções inovadoras em diversos segmentos. 
            Nosso foco recente em soluções logísticas nos posiciona como seu parceiro tecnológico ideal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Procurando Soluções em Logística?
            </h3>
            <p className="text-gray-600 mb-6">
              Com nosso sucesso recente em projetos logísticos, estamos buscando ativamente novas parcerias 
              no setor de transporte e cadeia de suprimentos. Vamos conversar sobre como podemos otimizar suas operações.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Inicie Seu Projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}