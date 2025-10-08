import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Instagram, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

// IMPORTANDO os vídeos da pasta assets.
// Certifique-se que os nomes dos arquivos aqui são os mesmos da sua pasta.
import video1 from "@/assets/wine-moment-1.mp4";
import video2 from "@/assets/wine-moment-2.mp4";
import video3 from "@/assets/wine-moment-3.mp4";

const videos = [video1, video2, video3];

const VideoCarousel = () => {
    const [isMuted, setIsMuted] = React.useState(true);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-background to-cream/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-burgundy">
                        Momentos Wine Cup
                    </h2>
                    <a
                        href="https://www.instagram.com/winecupsantos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-wine hover:text-wine-light transition-colors"
                    >
                        <Instagram className="w-6 h-6" />
                        <span className="text-lg font-medium">@winecupsantos</span>
                    </a>
                </div>

                <Carousel
                    opts={{ loop: true }}
                    className="relative w-full max-w-sm mx-auto animate-fade-in-up"
                >
                    <CarouselContent>
                        {videos.map((videoSrc, index) => (
                            <CarouselItem key={index}>
                                <div className="relative glass rounded-3xl p-2">
                                    <video
                                        src={videoSrc}
                                        className="w-full h-auto rounded-2xl aspect-[9/16] object-cover bg-black/50"
                                        autoPlay
                                        loop
                                        muted={isMuted}
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
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="absolute left-[-1rem] md:-left-20 top-1/2 -translate-y-1/2 glass text-cream border-cream/50 hover:border-cream hover:bg-wine/20 z-20" />
                    <CarouselNext className="absolute right-[-1rem] md:-right-20 top-1/2 -translate-y-1/2 glass text-cream border-cream/50 hover:border-cream hover:bg-wine/20 z-20" />
                </Carousel>

                <div className="text-center mt-12 animate-fade-in-up">
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