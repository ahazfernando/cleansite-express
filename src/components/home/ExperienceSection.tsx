import Link from "next/link";
import cleanHomeImg from "@/assets/clean-home.jpg";
import windowCleaningImg from "@/assets/window-cleaning.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";

const featuredServices = [
  {
    title: "Residential Cleaning",
    description: "Our cooperation with clients is based on trust and delivering exceptional results every time.",
    image: cleanHomeImg,
  },
  {
    title: "Window Cleaning",
    description: "Crystal clear windows that let the sunshine in and make your property look its best.",
    image: windowCleaningImg,
  },
  {
    title: "Deep Cleaning",
    description: "Revitalize your home with our deep cleaning services, reaching every corner and surface.",
    image: deepCleaningImg,
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-forest py-16 md:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          {/* Left - Title */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              / CleanSite Express
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Experienced partner in{" "}
              <span className="text-primary">House Cleaning</span> in Australia
            </h2>
          </div>

          {/* Right - Description & CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-white/80 text-lg mb-6">
              We offer solutions ranging from day-to-day cleaning support to deep cleaning projects where CleanSite manages the entire process from assessment to sparkling completion.
            </p>
            <div>
              <Link
                href="/services"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <div
              key={service.title}
              className="relative group rounded-2xl overflow-hidden h-[400px] md:h-[500px] animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Image */}
              <img
                src={service.image.src}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
