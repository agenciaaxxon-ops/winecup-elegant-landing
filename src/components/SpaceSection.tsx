import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";

const images = [interior1, interior2, interior3];
const imageAlts = [
    "Interior do Wine Cup - Sala principal",
    "Interior do Wine Cup - Wine bar",
    "Interior do Wine Cup - Sala privativa",
];

const SpaceSection = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    return (
        <section id="espaco" className="bg-dark py-20 md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cream">
                    Conheça nosso espaço
                </h2>

                <Carousel setApi={setApi} opts={{ loop: true }} className="relative">
                    <CarouselContent>
                        {images.map((imgSrc, index) => (
                            <CarouselItem key={index}>
                                <div className="glass rounded-3xl p-2">
                                    <img
                                        src={imgSrc}
                                        alt={imageAlts[index]}
                                        className="w-full h-auto rounded-2xl aspect-video object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Setas de Navegação */}
                    <CarouselPrevious className="absolute left-[-1rem] md:left-4 top-1/2 -translate-y-1/2 glass text-cream border-cream/50 hover:border-cream hover:bg-wine/20 z-20" />
                    <CarouselNext className="absolute right-[-1rem] md:right-4 top-1/2 -translate-y-1/2 glass text-cream border-cream/50 hover:border-cream hover:bg-wine/20 z-20" />

                    {/* Indicadores de Bolinha (SOLUÇÃO DEFINITIVA) */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                        <div className="flex items-center justify-center gap-2 rounded-full bg-black/30 px-3 py-1.5">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === current ? "w-6 bg-white" : "w-2 bg-white/50"
                                    }`}
                                    aria-label={`Ir para imagem ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default SpaceSection;