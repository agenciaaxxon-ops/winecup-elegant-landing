import { Button } from "@/components/ui/button";
import heroImage from "@/assets/sem poste.png";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay escuro para garantir contraste em toda a imagem */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Contêiner para os elementos flutuantes */}
            <div className="relative z-10 flex flex-col items-center space-y-8 animate-fade-in-up p-4 w-full">
                {/* Plataforma de Vidro para o Conteúdo Principal */}
                <div className="glass w-full max-w-4xl p-8 md:p-12 rounded-3xl bg-gradient-to-b from-black/40 to-black/20">
                    <Badge
                        variant="outline"
                        className="glass text-cream border-glass-border mb-6"
                    >
                        ⭐ Avaliado 4.9/5 por nossos clientes
                    </Badge>

                    <h1 className="text-5xl md:text-7xl font-bold text-cream leading-tight">
                        Uma experiência sensorial e gastronômica memorável
                    </h1>
                </div>

                {/* Botão de Ação Flutuante */}
                <a
                    href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        size="xl"
                        className="glass rounded-full text-cream border border-cream/50 hover:border-cream hover:scale-105"
                    >
                        Fazer Reserva
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;