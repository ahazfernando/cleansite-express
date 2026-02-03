import { ArrowRight, Sparkles, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
    { icon: Shield, text: "100% Insured" },
    { icon: Clock, text: "Flexible Scheduling" },
    { icon: Star, text: "5-Star Rated" },
];

export function AboutHeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-40 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto max-w-7xl py-16 md:py-24 px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                            <Sparkles className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">
                                About Our Services
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                            Your Trusted{" "}
                            <span className="text-green-600">Cleaning</span>{" "}
                            <span className="relative">
                                Partner
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8C50 2 150 2 198 8" stroke="hsl(152 69% 40%)" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                            We're dedicated to providing exceptional cleaning services that transforms your space into a haven of cleanliness and comfort. With years of experience and a passion for perfection, we bring sparkle to every corner.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild className="bg-green-600 hover:bg-green-700 text-white h-14 px-10 text-lg rounded-xl">
                                <Link href="/contact">Get Started <ArrowRight className="w-5 h-5" /></Link>
                            </Button>
                            <Button asChild variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 h-14 px-10 text-lg rounded-xl">
                                <Link href="/services">Our Services</Link>
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

                    {/* Hero Visual with Real Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/5]">
                                <img
                                    src="/home/PHOTO-2025-10-06-14-54-06.jpg"
                                    alt="Professional cleaning service"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                                    <Star className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold">4.9/5</p>
                                    <p className="text-xs text-gray-500">2000+ Reviews</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-bold">100%</p>
                                    <p className="text-xs text-gray-500">Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
