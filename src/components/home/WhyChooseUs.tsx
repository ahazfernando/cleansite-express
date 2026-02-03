import { FileText, Package, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: FileText,
    title: "Free Consultation & Instant Pricing",
    description: "Get instant pricing and book your free consultation all online.",
  },
  {
    icon: Package,
    title: "Equipment & Supplies Provided",
    description: "Our cleaners provide all the essential equipment & supplies.",
  },
  {
    icon: Award,
    title: "100% Satisfaction Guarantee",
    description: "If you're not happy with your cleaning, we'll fix it for free.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted & Background Checked",
    description: "Our cleaners go through a rigorous hiring process to ensure safety.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10+", label: "Expert Cleaners" },
  { value: "500+", label: "Hours Saved" },
  { value: "95%", label: "Client Retention" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center justify-center gap-2">
            Why Choose Us
            <span className="text-accent">✨</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            We Are Experienced & We Have Expert Teams
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-3xl p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="btn-secondary" asChild>
            <Link href="/about">Cleaning Process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
