import { Button } from "@/components/ui/button";
import eventsImage from "@/assets/events-background.jpg";
import reservationsImage from "@/assets/reservations-background.jpg";

const EventsReservations = () => {
  return (
    <section id="eventos" className="grid md:grid-cols-2">
      {/* Events Section */}
      <div 
        className="relative min-h-[600px] flex flex-col items-center justify-center text-center px-8 py-32 overflow-hidden group"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${eventsImage})` }}
        />
        
        {/* Overlay with glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy/90 via-burgundy/70 to-wine/80" />
        
        {/* Content */}
        <div className="relative z-10 space-y-6 max-w-lg">
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-cream">
              Eventos
            </h2>
            <p className="text-cream/90 text-lg leading-relaxed">
              Celebre momentos especiais em um ambiente único. Nosso espaço é perfeito para eventos corporativos, comemorações e ocasiões memoráveis.
            </p>
            
            <a 
              href="https://preview--winecup-reserve-now.lovable.app/cadastro-lead"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="elegant" 
                size="xl"
                className="bg-cream text-burgundy hover:bg-champagne hover:scale-110 shadow-2xl"
              >
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-rose-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-wine/20 rounded-full blur-3xl" />
      </div>
      
      {/* Reservations Section */}
      <div 
        className="relative min-h-[600px] flex flex-col items-center justify-center text-center px-8 py-32 overflow-hidden group"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${reservationsImage})` }}
        />
        
        {/* Overlay with glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-wine/90 via-wine/70 to-burgundy/80" />
        
        {/* Content */}
        <div className="relative z-10 space-y-6 max-w-lg">
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-cream">
              Reservas
            </h2>
            <p className="text-cream/90 text-lg leading-relaxed">
              Garanta sua mesa e desfrute de uma experiência gastronômica excepcional. Reserve agora e prepare-se para uma noite inesquecível.
            </p>
            
            <a 
              href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="elegant" 
                size="xl"
                className="bg-cream text-wine hover:bg-champagne hover:scale-110 shadow-2xl"
              >
                Fazer Reserva
              </Button>
            </a>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-burgundy/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default EventsReservations;
