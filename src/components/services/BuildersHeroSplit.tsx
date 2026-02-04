import { ArrowRight, Shield, Clock, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
    { icon: Shield, text: "100% Fully Insured Team" },
    { icon: Clock, text: "Flexible 24/7 Scheduling" },
    { icon: Star, text: "5-Star Rated Service" },
];

export function BuildersHeroSplit() {
    return (
        <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
            {/* Abstract Geometric Background Shape */}
            <div className="absolute top-0 right-0 w-[55%] h-full bg-slate-900 hidden lg:block"
                style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}>
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                <Image
                    src="/home/257579cd91eb4c7b3d48193da76ae1d8.jpg"
                    alt="Construction Site"
                    fill
                    className="object-cover opacity-40 mix-blend-luminosity"
                />
                {/* Decorative circles */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-white/20"></div>
                <div className="absolute bottom-40 left-40 w-64 h-64 rounded-full border border-white/10"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Available for Immediate Booking</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900 tracking-tight mb-8">
                            We Clean <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                                What You Build.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            The final step between construction and completion. Professional, precise builders cleaning that transforms sites into showpieces.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 mb-12">
                            <Button asChild size="lg" className="h-14 px-8 text-lg bg-slate-900 hover:bg-slate-800 text-white rounded-none border-b-4 border-green-500 transition-all hover:-translate-y-1">
                                <Link href="/contact-us">Get a Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-200 text-slate-900 hover:bg-slate-50 rounded-none transition-all">
                                <Link href="/services">Our Services</Link>
                            </Button>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                            {features.map((feature, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <feature.icon className="w-6 h-6 text-green-600" />
                                    <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual (Visible on Mobile/Tablet usually below, but here effectively hidden/different on large screens due to absolute bg) */}
                    <div className="relative lg:hidden rounded-3xl overflow-hidden aspect-video shadow-xl">
                        <Image
                            src="/home/257579cd91eb4c7b3d48193da76ae1d8.jpg"
                            alt="Construction Cleaning"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
