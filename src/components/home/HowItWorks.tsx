const process = [
  {
    step: "01",
    title: "Book Online",
    description: "Choose your service and schedule a convenient time",
  },
  {
    step: "02",
    title: "We Arrive",
    description: "Our vetted professionals arrive on time, ready to clean",
  },
  {
    step: "03",
    title: "We Clean",
    description: "Thorough cleaning following our detailed checklist",
  },
  {
    step: "04",
    title: "You Relax",
    description: "Enjoy your sparkling clean space, guaranteed",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Quick and Easy
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Getting your space cleaned has never been easier
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div key={index} className="relative text-center">
              <div className="text-6xl font-bold text-primary/30 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
