import { ArrowRight } from "lucide-react";
import wineImage from "@/assets/wine-law.jpg";
import beerImage from "@/assets/beer-law.jpg";
import spiritsImage from "@/assets/spirits-law.jpg";
import ciderImage from "@/assets/cider-law.jpg";
import meadImage from "@/assets/mead-law.jpg";

const sectors = [
  {
    title: "Wineries",
    image: wineImage,
    description: "Expert legal guidance for wine producers and distributors",
  },
  {
    title: "Breweries",
    image: beerImage,
    description: "Comprehensive support for craft and commercial breweries",
  },
  {
    title: "Distilleries",
    image: spiritsImage,
    description: "Spirits law expertise for all types of distilled beverages",
  },
  {
    title: "Cideries",
    image: ciderImage,
    description: "Specialized legal services for cider manufacturers",
  },
  {
    title: "Meaderies",
    image: meadImage,
    description: "Dedicated support for mead and honey wine producers",
  },
];

const BusinessSectors = () => {
  return (
    <section id="industries" className="py-24 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Business Sectors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized legal expertise across all segments of the alcohol beverage industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={sector.title}
              className="group relative overflow-hidden rounded-xl shadow-medium hover:shadow-large transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                <p className="text-sm text-primary-foreground/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {sector.description}
                </p>
                <div className="flex items-center text-coral group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-xl sm:text-2xl italic text-muted-foreground max-w-3xl mx-auto">
            "Beer is made by men, wine by God."
            <footer className="mt-3 text-base not-italic text-foreground font-medium">
              — Martin Luther
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;
