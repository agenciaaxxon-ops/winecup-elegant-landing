import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.svg";

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const scrollToSection = (id: string) => {
        if (id === "inicio") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsDrawerOpen(false);
            return;
        }
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsDrawerOpen(false);
    };

    const navLinks = [
        { id: "inicio", label: "Início" },
        { id: "sobre", label: "Sobre" },
        { id: "espaco", label: "O Espaço" },
        { id: "momentos", label: "Momentos" },
        { id: "eventos", label: "Eventos" },
        { id: "contato", label: "Contato" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4">
            <div className="container mx-auto px-4">
                <div className="relative flex items-center justify-between h-14">
                    {/* Logo */}
                    <div
                        className="cursor-pointer z-10"
                        onClick={() => scrollToSection("inicio")}
                    >
                        {/* Sombra adicionada ao logo */}
                        <img src={logo} alt="Wine Cup Logo" className="h-10 w-auto drop-shadow-lg" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center gap-1 glass px-2 py-1.5 rounded-full">
                            {navLinks.map((link) => (
                                <Button
                                    key={link.id}
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-white/80 hover:text-white hover:bg-wine/20 rounded-full px-3"
                                >
                                    {link.label}
                                </Button>
                            ))}
                        </div>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 z-10">
                        <a
                            href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block"
                        >
                            <Button variant="wine" className="rounded-full">
                                Fazer Reserva
                            </Button>
                        </a>
                        <div className="md:hidden">
                            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                                <DrawerTrigger asChild>
                                    <Button size="icon" className="glass rounded-full w-12 h-12">
                                        <Menu className="h-5 w-5 text-cream" />
                                        <span className="sr-only">Abrir menu</span>
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent className="glass border-t">
                                    <div className="mx-auto w-full max-w-sm p-4">
                                        <nav className="flex flex-col gap-4 text-center text-lg font-medium text-cream mt-4">
                                            {navLinks.map((link) => (
                                                <button
                                                    key={link.id}
                                                    onClick={() => scrollToSection(link.id)}
                                                    className="text-center hover:text-white py-2"
                                                >
                                                    {link.label}
                                                </button>
                                            ))}
                                        </nav>
                                        <div className="mt-8 mb-4">
                                            <a
                                                href="https://preview--winecup-reserve-now.lovable.app/cadastro-reserva"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full"
                                            >
                                                <Button
                                                    variant="wine"
                                                    size="lg"
                                                    className="w-full rounded-full"
                                                    onClick={() => setIsDrawerOpen(false)}
                                                >
                                                    Fazer Reserva
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;