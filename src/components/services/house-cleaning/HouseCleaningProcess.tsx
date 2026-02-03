'use client';

import { motion } from 'framer-motion';
import { Calendar, Sparkles, Coffee } from 'lucide-react';

const steps = [
    {
        icon: Calendar,
        title: "Book Online",
        description: "Choose your preferred date and time in just a few clicks.",
        color: "bg-blue-500"
    },
    {
        icon: Sparkles,
        title: "We Clean",
        description: "Our professional team arrives and makes your home shine.",
        color: "bg-lime-500"
    },
    {
        icon: Coffee,
        title: "You Relax",
        description: "Enjoy your free time and come home to a fresh space.",
        color: "bg-orange-500"
    }
];

export function HouseCleaningProcess() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6 font-sans">How It Works</h2>
                    <p className="text-gray-500 text-lg">Three simple steps to a cleaner home.</p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 rounded-full">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-blue-500 via-lime-500 to-orange-500 rounded-full"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className={`w-24 h-24 rounded-full ${step.color} text-white flex items-center justify-center shadow-xl z-10 mb-8 transform transition-transform hover:scale-110 duration-300`}>
                                <step.icon className="w-10 h-10" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-500 max-w-xs mx-auto text-lg leading-relaxed">
                                {step.description}
                            </p>

                            {/* Step Number Background */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[150px] font-bold text-gray-50/80 -z-10 select-none">
                                {index + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
