import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wine-elegant.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 z-10 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-burgundy leading-tight">
              Transformamos sua experiência sensorial e gastronômica em momentos memoráveis
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Um ambiente sofisticado onde cada taça conta uma história e cada prato é uma obra de arte.
            </p>
            
            <a 
              href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="elegant" 
                size="xl"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Fazer Reserva</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-gold to-wine opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </a>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Wine Cup Restaurant Interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/30 to-transparent" />
            </div>
            
            {/* Floating Glass Card */}
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 animate-fade-in">
              <p className="text-cream text-sm font-medium">
                ⭐ Avaliado 4.9/5 por nossos clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
