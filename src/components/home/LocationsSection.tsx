import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const locations = [
    "Queensland",
    "South Australia",
    "New South Wales",
    "Victoria",
    "Tasmania",
    "Western Australia",
];

const LocationsSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content - Left Side */}
                    <div className="space-y-8">
                        {/* Section Header */}
                        <div>
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                Our Service Areas
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                                Locations We <br />Serve Around Australia
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                We're proud to provide professional cleaning services across multiple Australian states and territories, bringing excellence to homes and businesses nationwide.
                            </p>
                        </div>

                        {/* Locations List */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {locations.map((location) => (
                                <div key={location} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-lg font-medium text-foreground">
                                        {location}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="btn-secondary flex items-center gap-2" asChild>
                                <Link href="/services">
                                    View Our Services
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button className="btn-outline" asChild>
                                <Link href="/contact-us">Book a Free Consultation</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="/locations/australia-map.png"
                                alt="Service locations across Australia"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
