import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cream">
          Fale Conosco
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-cream">Endereço</h3>
            <p className="text-cream/80">
              R Luiz de Farias 82 - Gonzaga<br />
              Santos/SP
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-cream">Contato</h3>
            <p className="text-cream/80">
              contato@winecup.com<br />
              (11) 98765-4321
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-cream">Horários</h3>
            <p className="text-cream/80">
              Quarta a Sábado: 18h - 23h<br />
              Domingo: 13h - 20h
            </p>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cream hover-gold"
          >
            <Instagram size={32} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cream hover-gold"
          >
            <Facebook size={32} />
          </a>
          <a 
            href="https://wa.me/5511987654321" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cream hover-gold"
          >
            <MessageCircle size={32} />
          </a>
        </div>
        
        <p className="text-center text-gray-400 text-sm">
          © 2025 Wine Cup. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
