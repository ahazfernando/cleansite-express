import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function BuildersHeroCard() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="relative">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-tight mb-6">
                                Construction <br />
                                Finished. <br />
                                <span className="text-green-600">Cleaning Begins.</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 max-w-md">
                                Your trusted partner for seamless handover. We ensure every corner is inspection-ready with our specialized builders cleaning service.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    "White Card Certified Staff",
                                    "Compliance with Safety Standards",
                                    "Rough, Final & Touch-up Cleans"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button asChild className="bg-slate-900 text-white rounded-2xl h-14 px-8 text-lg hover:bg-green-600 transition-colors">
                                <Link href="/contact">
                                    Book Now <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>

                        {/* Floating Image Composition */}
                        <div className="relative h-[400px] lg:h-[500px]">
                            {/* Main Large Image */}
                            <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
                                <Image
                                    src="/home/257579cd91eb4c7b3d48193da76ae1d8.jpg"
                                    alt="Clean Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Badge/Card */}
                            <div className="absolute bottom-12 left-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] animate-bounce-slow">
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-xs font-semibold text-slate-900">"Incredible attention to detail. Passed inspection first time!"</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
