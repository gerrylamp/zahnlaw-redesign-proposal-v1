import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import blogImage from "@/assets/blog-ttb.png";

const News = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            News & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest developments in alcohol beverage and food law
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-large transition-shadow duration-300 group">
            <div className="md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src={blogImage}
                  alt="Understanding TTB Grape Variety Petitions"
                  className="w-full h-full object-cover min-h-[250px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="md:w-3/5 p-8">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>November 2025</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-coral transition-colors">
                  Understanding TTB Grape Variety Petitions
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  When it comes to wine labeling in the United States, grape variety designations
                  play an important role in how wineries market their products and how consumers
                  make purchasing decisions. The Alcohol and Tobacco Tax and Trade Bureau ("TTB")
                  regulates these designations and maintains a list of approved grape varieties...
                </p>
                
                <a
                  className="inline-flex items-center text-coral font-semibold hover:gap-3 transition-all group/link cursor-pointer"
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default News;
