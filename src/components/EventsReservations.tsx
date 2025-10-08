import { Button } from "@/components/ui/button";
import eventsImage from "@/assets/events-background.jpg";
import reservationsImage from "@/assets/reservations-background.jpg";

const EventsReservations = () => {
    return (
        <section id="eventos" className="grid md:grid-cols-2 text-cream">
            {/* Coluna de Eventos */}
            <div
                className="relative min-h-[75vh] flex items-center justify-center p-8 bg-cover bg-center"
                style={{ backgroundImage: `url(${eventsImage})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 glass rounded-3xl p-8 md:p-12 text-center flex flex-col items-center max-w-md animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold">Eventos</h2>
                    <p className="text-lg text-cream/90 leading-relaxed my-6">
                        Celebre momentos especiais em um ambiente único para eventos
                        corporativos e comemorações memoráveis.
                    </p>
                    <a
                        href="https://preview--winecup-reserve-now.lovable.app/cadastro-lead"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto"
                    >
                        <Button
                            size="lg"
                            className="glass rounded-full text-cream border border-cream/50 hover:border-cream hover:scale-105"
                        >
                            Saiba Mais
                        </Button>
                    </a>
                </div>
            </div>

            {/* Coluna de Reservas */}
            <div
                className="relative min-h-[75vh] flex items-center justify-center p-8 bg-cover bg-center"
                style={{ backgroundImage: `url(${reservationsImage})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 glass rounded-3xl p-8 md:p-12 text-center flex flex-col items-center max-w-md animate-fade-in-up animation-delay-300">
                    <h2 className="text-4xl md:text-5xl font-bold">Reservas</h2>
                    <p className="text-lg text-cream/90 leading-relaxed my-6">
                        Garanta sua mesa e desfrute de uma experiência gastronômica
                        excepcional. Uma noite inesquecível o aguarda.
                    </p>
                    <a
                        href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto"
                    >
                        <Button
                            size="lg"
                            className="glass rounded-full text-cream border border-cream/50 hover:border-cream hover:scale-105"
                        >
                            Fazer Reserva
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EventsReservations;