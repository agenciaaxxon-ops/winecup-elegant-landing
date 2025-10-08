import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.svg"; // Importando o logo

const contactLinks = [
    {
        href: "https://www.instagram.com/winecupsantos/",
        icon: <Instagram className="w-5 h-5" />,
        label: "Instagram",
    },
    {
        href: "#", // Adicione o link do Facebook aqui
        icon: <Facebook className="w-5 h-5" />,
        label: "Facebook",
    },
    {
        href: "mailto:contato@winecup.com",
        icon: <Mail className="w-5 h-5" />,
        label: "Email",
    },
    {
        href: "tel:+5513978004187", // TELEFONE ATUALIZADO
        icon: <Phone className="w-5 h-5" />,
        label: "Telefone",
    },
];

const Footer = () => {
    return (
        <footer id="contato" className="bg-dark text-cream py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Coluna de Informações */}
                    <div className="glass rounded-3xl p-8 md:p-10 flex flex-col text-center md:text-left items-center md:items-start">
                        {/* Texto substituído pela imagem do logo */}
                        <img src={logo} alt="Wine Cup Logo" className="h-12 w-auto mb-6" />

                        <p className="text-cream/80 max-w-sm mb-6">
                            {/* ENDEREÇO ATUALIZADO */}
                            R. Luiz de Faria, 82 - Gonzaga, Santos - SP. Venha nos visitar e
                            viver uma experiência inesquecível.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                >
                                    <Button
                                        size="icon"
                                        className="glass rounded-full text-cream border-cream/50 hover:border-cream hover:bg-cream/10"
                                    >
                                        {link.icon}
                                    </Button>
                                </a>
                            ))}
                        </div>
                        <div className="text-cream/60 text-sm mt-auto">
                            <p>
                                © {new Date().getFullYear()} Wine Cup. Todos os direitos
                                reservados.
                            </p>
                        </div>
                    </div>

                    {/* Coluna do Mapa */}
                    <div className="h-full min-h-[400px] md:min-h-full rounded-3xl overflow-hidden shadow-2xl">
                        {/* MAPA ATUALIZADO */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.220593994793!2d-46.3338383885062!3d-23.95232797843863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce0385304b8ce9%3A0x28f0de2f91e95697!2sR.%20Luiz%20de%20Faria%2C%2082%20-%20Gonzaga%2C%20Santos%20-%20SP%2C%2011060-480!5e0!3m2!1spt-BR!2sbr!4v1728389366115!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;