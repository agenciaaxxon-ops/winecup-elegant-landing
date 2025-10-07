import { useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";

const moments = [
  { id: 1, image: interior1, title: "Ambiente Elegante" },
  { id: 2, image: interior2, title: "Wine Bar" },
  { id: 3, image: interior3, title: "Sala Privativa" },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % moments.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + moments.length) % moments.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
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
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {moments.map((moment) => (
                <div key={moment.id} className="min-w-full px-4">
                  <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                      src={moment.image} 
                      alt={moment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-burgundy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Instagram-style overlay */}
                    <div className="absolute top-4 left-4 glass-card px-4 py-2 flex items-center gap-2">
                      <Instagram className="w-5 h-5 text-cream" />
                      <span className="text-cream font-medium text-sm">winecupsantos</span>
                    </div>
                  </div>
                  <p className="text-center mt-6 text-2xl font-semibold text-burgundy">
                    {moment.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            onClick={prev}
            variant="glass"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={next}
            variant="glass"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {moments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-wine' 
                    : 'w-2 bg-wine/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
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
