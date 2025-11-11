import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Repeat, 
  FileText, 
  GitBranch, 
  Eye, 
  Lightbulb, 
  Radar, 
  Users, 
  Zap, 
  Target 
} from "lucide-react";

const rationalFeatures = [
  {
    icon: Repeat,
    title: "Ciclos de Estudo Otimizados",
    description: "Sistemas de revisão espaçada baseados em ciência cognitiva para maximizar retenção."
  },
  {
    icon: Brain,
    title: "Flashcards Dinâmicos",
    description: "Cartões inteligentes que se adaptam ao seu desempenho e priorizam conteúdos que você precisa reforçar."
  },
  {
    icon: FileText,
    title: "Resumos Inteligentes",
    description: "IA cria resumos personalizados dos seus materiais, destacando pontos cruciais."
  },
  {
    icon: GitBranch,
    title: "Mapas Mentais",
    description: "Visualização de conexões entre conceitos para facilitar memorização e compreensão."
  },
  {
    icon: Eye,
    title: "Sugestões de Visualização",
    description: "Recomendações de vídeos e materiais complementares alinhados ao seu estudo."
  }
];

const emotionalFeatures = [
  {
    icon: Lightbulb,
    title: "Insights Personalizados",
    description: "Análise do seu comportamento de estudo com dicas para melhorar produtividade e bem-estar."
  },
  {
    icon: Radar,
    title: "Radar de Oportunidades",
    description: "Notificações inteligentes sobre editais que combinam com seu perfil e momento de preparo."
  },
  {
    icon: Users,
    title: "Suporte do QG",
    description: "Comunidade ativa de concurseiros e mentoria para manter você motivado e conectado."
  },
  {
    icon: Zap,
    title: "Treinamento Ininterrupto",
    description: "Acesso ilimitado a simulados, questões e exercícios práticos para testar conhecimento."
  },
  {
    icon: Target,
    title: "Concursos Pré-Estruturados",
    description: "Base de dados com editais organizados e prontos para você começar imediatamente."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Arsenal Completo</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Super Inteligência AC:</span>
              <br />
              Desbloqueie Seu Arsenal para a Aprovação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Super Inteligência AC age como um mentor virtual completo, otimizando o estudo 
              em dois níveis: o racional (conteúdo) e o emocional (motivação).
            </p>
          </div>
          
          <Tabs defaultValue="rational" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
              <TabsTrigger value="rational" className="text-base">Pilar Racional</TabsTrigger>
              <TabsTrigger value="emotional" className="text-base">Pilar Emocional</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rational" className="mt-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rationalFeatures.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="p-6 space-y-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="emotional" className="mt-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emotionalFeatures.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="p-6 space-y-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
