import gourmetDish from "@/assets/foto-4.png";

const AboutSection = () => {
    return (
        <section id="sobre" className="bg-white">
            <div className="grid md:grid-cols-2">
                {/* Coluna da Imagem (Esquerda) */}
                <div
                    className="min-h-[50vh] md:min-h-[75vh] bg-cover bg-center"
                    style={{ backgroundImage: `url(${gourmetDish})` }}
                />

                {/* Coluna do Texto (Direita) */}
                <div className="flex items-center justify-center p-8 md:p-16">
                    <div className="max-w-md">
                        <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-6">
                            Nossa História
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            No coração de Santos, o Wine Cup nasceu do sonho de criar
                            experiências gastronômicas inesquecíveis. Combinamos
                            ingredientes selecionados, técnicas refinadas e um ambiente
                            sofisticado para proporcionar momentos únicos.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-4">
                            Cada prato é uma obra de arte, cada vinho uma descoberta.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;