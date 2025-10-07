import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-cream">
          Wine Cup
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-cream hover-gold cursor-pointer"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('espaco')}
            className="text-cream hover-gold cursor-pointer"
          >
            O Espaço
          </button>
          <button 
            onClick={() => scrollToSection('eventos')}
            className="text-cream hover-gold cursor-pointer"
          >
            Eventos
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-cream hover-gold cursor-pointer"
          >
            Contato
          </button>
          
          <a 
            href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gold text-black hover:bg-gold/90 rounded-full px-6">
              Fazer Reserva
            </Button>
          </a>
        </nav>

        <div className="md:hidden">
          <a 
            href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gold text-black hover:bg-gold/90 rounded-full px-4 text-sm">
              Reserva
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
