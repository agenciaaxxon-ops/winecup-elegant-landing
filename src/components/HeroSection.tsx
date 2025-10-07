import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-cream mb-8 leading-tight">
          Transformamos sua experiência sensorial e gastronômica em momentos memoráveis
        </h1>
        
        <a 
          href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gold text-black hover:bg-gold/90 rounded-full px-8 py-6 text-lg">
            Fazer Reserva
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
