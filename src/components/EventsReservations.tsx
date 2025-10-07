import { Button } from "@/components/ui/button";

const EventsReservations = () => {
  return (
    <section id="eventos" className="grid md:grid-cols-2">
      <div className="bg-gray-500 py-32 px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Eventos</h2>
        <p className="text-white mb-8 max-w-md leading-relaxed">
          Celebre momentos especiais em um ambiente único. Nosso espaço é perfeito para eventos corporativos, comemorações e ocasiões memoráveis.
        </p>
        <a 
          href="https://preview--winecup-reserve-now.lovable.app/cadastro-lead"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-cream text-black hover:bg-cream/90 rounded-full px-8 py-6 text-lg">
            Saiba Mais
          </Button>
        </a>
      </div>
      
      <div className="bg-gray-600 py-32 px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Reservas</h2>
        <p className="text-white mb-8 max-w-md leading-relaxed">
          Garanta sua mesa e desfrute de uma experiência gastronômica excepcional. Reserve agora e prepare-se para uma noite inesquecível.
        </p>
        <a 
          href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-cream text-black hover:bg-cream/90 rounded-full px-8 py-6 text-lg">
            Fazer Reserva
          </Button>
        </a>
      </div>
    </section>
  );
};

export default EventsReservations;
