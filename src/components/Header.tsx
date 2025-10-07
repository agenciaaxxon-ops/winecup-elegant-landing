import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="text-2xl font-bold text-wine cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Wine Cup
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover-wine font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('espaco')}
              className="text-foreground hover-wine font-medium"
            >
              O Espaço
            </button>
            <button 
              onClick={() => scrollToSection('eventos')}
              className="text-foreground hover-wine font-medium"
            >
              Eventos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover-wine font-medium"
            >
              Contato
            </button>
            
            <a 
              href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="wine" size="default" className="rounded-full">
                Fazer Reserva
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
