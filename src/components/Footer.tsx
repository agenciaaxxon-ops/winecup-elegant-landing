import { Instagram, Facebook, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-gradient-to-b from-burgundy to-dark-bg py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cream">
          Fale Conosco
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Map Section */}
          <div className="glass-card p-6 rounded-3xl overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-rose-gold" />
              <h3 className="text-xl font-bold text-cream">Localização</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.8899471334!2d-46.33359!3d-23.9659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce033e6d1c0001%3A0x1!2sR.%20Luiz%20de%20Farias%2C%2082%20-%20Gonzaga%2C%20Santos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
            <p className="text-cream/90 mt-4 text-center">
              R Luiz de Farias 82 - Gonzaga<br />
              Santos/SP
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-rose-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cream mb-1">Contato</h3>
                  <a href="mailto:contato@winecup.com" className="text-cream/80 hover:text-rose-gold transition-colors">
                    contato@winecup.com
                  </a>
                  <br />
                  <a href="tel:+5511987654321" className="text-cream/80 hover:text-rose-gold transition-colors">
                    (11) 98765-4321
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-rose-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cream mb-1">Horários</h3>
                  <p className="text-cream/80">
                    Quarta a Sábado: 18h - 23h<br />
                    Domingo: 13h - 20h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://www.instagram.com/winecupsantos/"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-cream hover:text-rose-gold hover:scale-110 transition-all"
          >
            <Instagram size={28} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-cream hover:text-rose-gold hover:scale-110 transition-all"
          >
            <Facebook size={28} />
          </a>
          <a 
            href="https://wa.me/5511987654321" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-cream hover:text-rose-gold hover:scale-110 transition-all"
          >
            <MessageCircle size={28} />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-cream/60 text-sm">
            © 2025 Wine Cup. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
