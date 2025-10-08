import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import heroImage1 from "@/assets/foto-1.png";
import heroImage2 from "@/assets/foto-2.png";
import heroImage3 from "@/assets/foto-3.png";

const heroImages = [heroImage1, heroImage2, heroImage3];

const HeroSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
            <Carousel
                plugins={[plugin.current]}
                opts={{ loop: true }}
                className="absolute inset-0 w-full h-full z-0"
            >
                <CarouselContent className="ml-0">
                    {heroImages.map((img, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <img
                                src={img}
                                alt={`Imagem de fundo do restaurante ${index + 1}`}
                                className="w-full h-screen object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Overlay escuro para garantir contraste */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col items-center space-y-8 animate-fade-in-up p-4 w-full">
                {/* As classes de gradiente foram removidas daqui para padronizar o efeito glass */}
                <div className="glass w-full max-w-4xl p-8 md:p-12 rounded-3xl">
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

                <a
                    href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
                    target="a_blank"
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