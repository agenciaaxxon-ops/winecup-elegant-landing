import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/custom-carousel";
import { Instagram, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

import video1 from "@/assets/wine-moment-1.mp4";
import video2 from "@/assets/wine-moment-2.mp4";
import video3 from "@/assets/wine-moment-3.mp4";

const videos = [video1, video2, video3];

const VideoCarousel = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [isMuted, setIsMuted] = React.useState(true);

    // Criamos referências para cada elemento de vídeo
    const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

    // Efeito para controlar o som quando o slide muda
    React.useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            const newCurrent = api.selectedScrollSnap();
            setCurrent(newCurrent);

            // Coloca todos os vídeos no mudo, exceto o atual
            videoRefs.current.forEach((video, index) => {
                if (video) {
                    if (index === newCurrent) {
                        video.muted = isMuted;
                    } else {
                        video.muted = true;
                    }
                }
            });
        };

        onSelect(); // Executa na inicialização
        api.on("select", onSelect);
        return () => {
            api.off("select", onSelect);
        };
    }, [api, isMuted]); // Adicionamos isMuted como dependência

    // Função para alternar o som APENAS do vídeo ativo
    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newMutedState = !isMuted;
        setIsMuted(newMutedState);

        const activeVideo = videoRefs.current[current];
        if (activeVideo) {
            activeVideo.muted = newMutedState;
        }
    };

    return (
        <section id="momentos" className="py-16 bg-gradient-to-b from-background to-cream/20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-burgundy">
                        Momentos Wine Cup
                    </h2>
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{ loop: true, align: "center" }}
                    className="relative w-full max-w-5xl mx-auto animate-fade-in-up animation-delay-300 md:carousel-overflow-visible"
                >
                    <CarouselContent>
                        {videos.map((videoSrc, index) => (
                            <CarouselItem key={index} className="basis-full md:basis-1/2">
                                <div
                                    className={`p-4 ${
                                        index === current
                                            ? "opacity-100 scale-100"
                                            : "opacity-50 scale-75 blur-sm"
                                    }`}
                                >
                                    <div className="relative glass rounded-3xl p-2">
                                        <video
                                            // Adicionamos a ref para cada vídeo
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            src={videoSrc}
                                            className="w-full h-auto rounded-2xl aspect-[9/16] object-cover bg-black/50"
                                            autoPlay
                                            loop
                                            // Começa mudo por padrão para garantir o autoplay
                                            muted
                                            playsInline
                                        />
                                        <Button
                                            size="icon"
                                            onClick={toggleMute}
                                            className="absolute bottom-4 right-4 z-10 glass rounded-full w-10 h-10 text-cream border-cream/50 hover:border-cream"
                                        >
                                            {isMuted ? (
                                                <VolumeX className="h-5 w-5" />
                                            ) : (
                                                <Volume2 className="h-5 w-5" />
                                            )}
                                            <span className="sr-only">Ativar/Desativar som</span>
                                        </Button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="absolute left-2 md:-left-20 top-1/2 -translate-y-1/2 glass text-cream border-cream/50 hover:border-cream hover:bg-wine/20 z-20" />
                    <CarouselNext className="absolute right-2 md:-right-20 top-1/2 -translate-y-1/2 glass text-cream border-cream/50 hover:border-cream hover:bg-wine/20 z-20" />
                </Carousel>

                <div className="text-center mt-8 animate-fade-in-up animation-delay-500">
                    <a
                        href="https://www.instagram.com/winecupsantos/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="wine" size="lg">
                            <Instagram className="w-5 h-5 mr-2" />
                            Ver mais no Instagram
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VideoCarousel;