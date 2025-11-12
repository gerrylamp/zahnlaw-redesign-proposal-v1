const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-coral text-sm font-semibold uppercase tracking-wider mb-3">
              Welcome to...
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Lindsey Zahn P.C.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Lindsey Zahn P.C. is an alcohol beverage and food law firm representing wineries,
              breweries, distilleries, cideries, meaderies, importers, distributors, brand owners,
              and food manufacturers before the Alcohol and Tobacco Tax and Trade Bureau ("TTB"),
              the Food and Drug Administration ("FDA"), and various state regulators, including the
              New York State Liquor Authority ("NYSLA").
            </p>

            <p>
              The firm's clients range from multinational food and beverage companies to small,
              family-owned startups. No matter your size, Lindsey Zahn P.C. will work with you to
              navigate the complex network of laws that govern one of the nation's most highly
              regulated industries. The firm empowers clients and helps them thrive in this
              ever-changing environment.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              className="inline-flex items-center px-6 py-3 bg-coral text-primary-foreground font-medium rounded-lg hover:bg-coral/90 transition-smooth shadow-medium hover:shadow-large cursor-pointer"
            >
              Learn More About Our Firm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
