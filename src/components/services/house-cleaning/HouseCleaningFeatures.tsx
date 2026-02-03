'use client';

import { motion } from 'framer-motion';
import { Leaf, Award, Clock, Heart, Shield, Zap } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: "Eco-Friendly Products",
        description: "We use plant-based, non-toxic cleaning agents that are tough on dirt but safe for your family and pets.",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: Award,
        title: "5-Star Quality",
        description: "Our rigorous training and quality checks ensure a hotel-standard clean, every single time.",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        icon: Clock,
        title: "On-Time Arrival",
        description: "We respect your time. Our team arrives promptly and works efficiently to get your home sparkling.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: Shield,
        title: "Insured & Bonded",
        description: "Rest easy knowing your property is protected. We are fully insured and our staff is background-checked.",
        color: "bg-purple-100 text-purple-600"
    },
    {
        icon: Heart,
        title: "Satisfaction Guarantee",
        description: "Not happy? Let us know within 24 hours and we'll come back to reclean the area for free.",
        color: "bg-pink-100 text-pink-600"
    },
    {
        icon: Zap,
        title: "Instant Booking",
        description: "Book your service in under 60 seconds with our seamless online booking platform.",
        color: "bg-orange-100 text-orange-600"
    }
];

export function HouseCleaningFeatures() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
                        Why Choose Our <span className="text-lime-600">Magic?</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We don't just clean; we care. Discover the difference of a cleaning service designed around your lifestyle.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest transition-colors">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
