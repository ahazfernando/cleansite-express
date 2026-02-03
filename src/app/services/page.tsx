import { Metadata } from "next";
import { ArrowRight, Home, Building2, Sparkles, Truck, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Cleaning Services Melbourne & Victoria | House, Office & Builders",
    description: "House cleaning, office cleaning, builders cleaning, deep cleaning & move-in/out in Melbourne, Oakleigh & Victoria. Eco-friendly. Free quote.",
    keywords: ["cleaning services Melbourne", "house cleaning Victoria", "office cleaning Oakleigh", "builders cleaning", "deep cleaning", "move out cleaning"],
    openGraph: {
        title: "Cleaning Services Melbourne & Victoria | Skill City",
        description: "House, office, builders & deep cleaning in Melbourne, Oakleigh & Victoria. Eco-friendly. Free quote.",
        url: "https://www.skillcityfacilitysolutions.com.au/services",
    },
};
import { Button } from "@/components/ui/button";
import Link from "next/link";
import cleanHomeImg from "@/assets/clean-home.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import moveCleaningImg from "@/assets/move-cleaning.jpg";

const services = [
    {
        icon: Home,
        title: "House Cleaning",
        description: "Our house cleaning services are designed to give your home a thorough, professional clean. From dusting and vacuuming to bathroom sanitization, we cover every corner of your living space.",
        image: cleanHomeImg,
        features: ["Kitchen deep clean", "Bathroom sanitization", "Bedroom & living areas", "Floor mopping & vacuuming"],

    },
    {
        icon: Building2,
        title: "Office Cleaning",
        description: "Maintain a productive and healthy work environment with our commercial cleaning services. We work around your schedule to ensure minimal disruption to your business operations.",
        image: officeCleaningImg,
        features: ["Desk & workspace cleaning", "Restroom sanitization", "Kitchen/break room cleaning", "Floor care & maintenance"],

    },
    {
        icon: Sparkles,
        title: "Deep Cleaning",
        description: "Our deep cleaning service goes beyond regular cleaning to tackle built-up grime, hidden dust, and those hard-to-reach areas that need extra attention.",
        image: deepCleaningImg,
        features: ["Behind appliances", "Inside cabinets & closets", "Baseboards & light fixtures", "Grout & tile deep clean"],

    },
    {
        icon: Truck,
        title: "Move In/Out Cleaning",
        description: "Whether you're moving into a new home or preparing your old one for new occupants, our move-in/out cleaning service ensures every space is spotless.",
        image: moveCleaningImg,
        features: ["Complete property cleaning", "Appliance cleaning", "Carpet deep cleaning", "Window & glass cleaning"],

    },
];

const additionalServices = [
    "Window Cleaning",
    "Carpet Cleaning",
    "Upholstery Cleaning",
    "Post-Construction Cleaning",
    "Airbnb/Vacation Rental Cleaning",
    "Event Cleanup",
];

export default function Services() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container-custom text-center">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                        Professional Cleaning Solutions
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From regular house cleaning to specialized deep cleaning services, we have the expertise to make your space shine.
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                                        <img
                                            src={service.image.src}
                                            alt={service.title}
                                            className="w-full h-80 object-cover"
                                        />

                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <service.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground">
                                        {service.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="text-foreground text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button className="btn-primary flex items-center gap-2" asChild>
                                        <Link href="/contact">
                                            Get a Quote
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="section-padding bg-secondary">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Additional Services
                        </h2>
                        <p className="text-muted-foreground">
                            We also offer specialized cleaning services to meet all your needs.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {additionalServices.map((service) => (
                            <div
                                key={service}
                                className="bg-card rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
                            >
                                <Star className="w-6 h-6 text-accent" />
                                <span className="font-medium text-foreground">{service}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button className="btn-secondary" asChild>
                            <Link href="/contact">Contact Us for Custom Quotes</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
