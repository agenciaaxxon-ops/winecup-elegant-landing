import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";

const SpaceSection = () => {
  return (
    <section id="espaco" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cream">
          Conheça nosso espaço
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <img 
              src={interior1} 
              alt="Interior do Wine Cup - Sala principal"
              className="w-full h-80 object-cover"
            />
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <img 
              src={interior2} 
              alt="Interior do Wine Cup - Wine bar"
              className="w-full h-80 object-cover"
            />
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <img 
              src={interior3} 
              alt="Interior do Wine Cup - Sala privativa"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
