'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const reviews = [
    {
        name: "Sarah Jenkins",
        role: "Busy Mom",
        content: "I've tried many cleaning services, but this team is on another level. They didn't just clean; they organized! Coming home felt like walking into a hotel.",
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        content: "Fast, efficient, and super quiet. I work from home and they didn't disturb me at all. The kitchen has never looked this good.",
        image: "https://i.pravatar.cc/150?img=11"
    },
    {
        name: "Emily Davis",
        role: "Interior Designer",
        content: "As a designer, I'm picky about details. These guys missed nothing. The baseboards, the light fixtures—everything is spotless. Highly recommend!",
        image: "https://i.pravatar.cc/150?img=9"
    }
];

export function HouseCleaningReviews() {
    return (
        <section className="py-24 bg-forest text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white/20" />
                <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full border-2 border-white/20" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-white">Loved by Locals</h2>
                    <p className="text-lime-100 text-lg">Don't just take our word for it.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                        >
                            <div className="flex items-center gap-1 text-yellow-400 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-lg text-gray-100 italic mb-8 leading-relaxed">"{review.content}"</p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-lime-400">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <p className="text-lime-200 text-sm">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
