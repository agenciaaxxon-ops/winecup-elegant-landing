import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          Momentos Wine Cup
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {moments.map((moment) => (
                <div key={moment.id} className="min-w-full px-4">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={moment.image} 
                      alt={moment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-4 text-xl font-semibold text-black">
                    {moment.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            onClick={prev}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={next}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
