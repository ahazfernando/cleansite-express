import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import cleanHomeImage from "@/assets/clean-home.jpg";

const features = [
  "We always keep you up to date on your cleaning",
  "The cleaners treat your home like their own home",
  "Eco-friendly products and methods used",
  "100% satisfaction guaranteed",
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src={cleanHomeImage}
                alt="Clean modern living room"
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-60 blur-xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              We Are the Best <br />Option for a Sparkling Home
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At SparkleClean, our mission is to provide the most convenient platform for connecting you with exceptional, professional cleaners who deliver outstanding results. We take pride in our work and treat every home like it's our own.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <Button className="btn-primary" asChild>
              <Link href="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
