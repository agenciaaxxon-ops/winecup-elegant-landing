import gourmetDish from "@/assets/gourmet-dish.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          Nossa História
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={gourmetDish} 
              alt="Prato gourmet do Wine Cup"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6 text-black">Nossa História</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              No coração de Santos, o Wine Cup nasceu do sonho de criar experiências gastronômicas inesquecíveis. Combinamos ingredientes selecionados, técnicas refinadas e um ambiente sofisticado para proporcionar momentos únicos aos nossos clientes. Cada prato é uma obra de arte, cada vinho uma descoberta, cada visita uma memória que permanece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
