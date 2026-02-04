import { ArrowRight, Sparkles, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
    { icon: Shield, text: "100% Insured" },
    { icon: Clock, text: "Flexible Scheduling" },
    { icon: Star, text: "5-Star Rated" },
];

export function BuildersHeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-40 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto max-w-7xl py-16 md:py-24 px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                            Post-Construction{" "}
                            <span className="text-green-600">Cleaning</span>{" "}
                            <span className="relative">
                                Experts
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8C50 2 150 2 198 8" stroke="hsl(152 69% 40%)" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-600 max-w-lg">
                            Transform your construction site into a pristine, move-in ready space. Our specialized builders cleaning service handles all post-construction cleanup with precision and care.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild className="bg-green-600 hover:bg-green-700 text-white h-14 px-10 text-lg rounded-xl">
                                <Link href="/contact-us">Get a Quote <ArrowRight className="w-5 h-5" /></Link>
                            </Button>
                            <Button asChild variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 h-14 px-10 text-lg rounded-xl">
                                <Link href="/services">All Services</Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-gray-600">
                                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                                        <feature.icon className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="text-sm font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[2/1]">
                                <img
                                    src="/home/257579cd91eb4c7b3d48193da76ae1d8.jpg"
                                    alt="Post-Construction Cleaning"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
