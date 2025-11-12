import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Her expertise and guidance have been instrumental in navigating the complex and intricate landscape of alcoholic beverage compliance and regulations. Lindsey's ability to handle these challenges with ease has been a game-changer for our venture.",
    author: "Ryan Laverty",
    position: "Co-Founder, VIDE",
  },
  {
    quote:
      "As newbies to the beverage industry, Lindsey has made our experience as painless and efficient as possible. Her all-encompassing knowledge of the Alcohol and Tobacco Trade Bureau (TTB) and its accompanying laws and regulations has provided invaluable guidance and support throughout our journey.",
    author: "Cole Orent",
    position: "Co-Founder and CEO, Smooth Tauker Inc.",
  },
  {
    quote:
      "It was essential to our company to have access to a knowledgeable expert. Lindsey Zahn is the expert we turn to for clear and thorough analysis.",
    author: "Jack Hoops",
    position: "Upstate Niagara Cooperative",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders and emerging businesses alike
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-coral opacity-50" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
