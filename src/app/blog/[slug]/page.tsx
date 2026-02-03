"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronRight,
    Star,
    BookOpen,
    Clock,
    Users,
    Globe,
    FileText,
    Timer,
    MessageSquare,
    Award,
    Gift,
    Plus,
    Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPostData = {
    id: 1,
    title: "Advanced Deep Cleaning Techniques for Your Home",
    author: { name: "Sarah Johnson", avatar: "SJ" },
    reviews: { count: 1421, rating: 4.5 },
    price: 0,
    isFree: true,
    lessons: 12,
    difficulty: "Moderate",
    readers: 3215,
    language: "English",
    subtitles: ["English", "Spanish", "French", "Italian", "Russian", "Polish", "Dutch", "German"],
    resources: "12 files",
    duration: "8h 23m",
    critiqueSession: "Individual recordings",
    certificate: "Upon completion of the course",
    description: [
        "Embark on a creative journey and master the art of transforming your living spaces with professional deep cleaning techniques.",
        "Unleash your inner cleaning professional as you learn to meticulously clean every surface and organize spaces with efficiency."
    ],
    tableOfContents: [
        { title: "Introduction", content: null },
        { title: "Preparing the cleaning supplies", content: "Essential techniques for preparing a cleaning kit." },
        { title: "Kitchen deep cleaning methods", content: "Professional techniques for degreasing and sanitizing." },
        { title: "Bathroom sanitization", content: "Master bathroom deep cleaning including tile restoration." },
        { title: "Living areas and bedrooms", content: "Efficient methods for dust removal and upholstery cleaning." }
    ],
    assignment: "Plan to dedicate 1-2 hours per day to watch lectures and complete assignments.",
    prerequisites: "Familiarity with basic cleaning tools and concepts.",
    materials: "Cleaning Kit 2.93 | Vacuum with HEPA filter and standard cleaning supplies."
};

export default function BlogPost() {
    const [expandedSections, setExpandedSections] = useState<number[]>([1]);

    const toggleSection = (index: number) => {
        setExpandedSections(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="bg-background min-h-screen pt-20">
            {/* Breadcrumb */}
            <div className="border-b border-border">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/blog" className="hover:text-foreground">Blog</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground">Advanced Deep Cleaning Techniques</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-[1fr,400px] gap-12">
                    {/* Left Column */}
                    <div>
                        {/* Featured Image */}
                        <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 group">
                            <Image
                                src="/home/PHOTO-2025-10-06-14-54-06.jpg"
                                alt="Cleaning"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            {/* Reviews Badge */}
                            <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg z-10">
                                <span className="text-sm text-muted-foreground">{blogPostData.reviews.count.toLocaleString()} reviews</span>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className={`w-4 h-4 ${star <= Math.floor(blogPostData.reviews.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                                    ))}
                                </div>
                            </div>

                            {/* Author Avatar */}
                            <div className="absolute bottom-4 left-4 z-10">
                                <div className="w-16 h-16 rounded-full bg-muted border-4 border-card flex items-center justify-center text-lg font-bold text-muted-foreground">
                                    {blogPostData.author.avatar}
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-2">
                            A course by <span className="text-foreground font-medium">{blogPostData.author.name}</span>
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{blogPostData.title}</h1>

                        <div className="space-y-4 text-muted-foreground mb-12">
                            {blogPostData.description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>

                        {/* Table of Contents */}
                        <div className="mb-12">
                            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">COURSE TABLE OF CONTENTS</h3>
                            <div className="border border-border rounded-xl divide-y divide-border">
                                {blogPostData.tableOfContents.map((section, index) => (
                                    <div key={index}>
                                        <button onClick={() => toggleSection(index)} className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50">
                                            <span className="font-medium text-foreground">{section.title}</span>
                                            {expandedSections.includes(index) ? <Minus className="w-5 h-5 text-muted-foreground" /> : <Plus className="w-5 h-5 text-muted-foreground" />}
                                        </button>
                                        {section.content && expandedSections.includes(index) && (
                                            <div className="px-4 pb-4 text-sm text-muted-foreground">{section.content}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
                        <span className="text-4xl font-bold text-foreground">{blogPostData.isFree ? "Free" : `$${blogPostData.price}`}</span>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-sm">
                                    <BookOpen className="w-5 h-5 text-muted-foreground" />
                                    <span className="text-muted-foreground">Lessons:</span>
                                    <span className="font-medium">{blogPostData.lessons}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground uppercase">DIFFICULTY</span>
                                    <span className="px-3 py-1 rounded-full border text-sm font-medium">{blogPostData.difficulty}</span>
                                </div>
                            </div>

                            {[
                                { icon: Users, label: "Students", value: blogPostData.readers.toLocaleString() },
                                { icon: Globe, label: "Language", value: blogPostData.language },
                                { icon: MessageSquare, label: "Subtitles", value: blogPostData.subtitles.join(", ") },
                                { icon: FileText, label: "Additional resources", value: blogPostData.resources },
                                { icon: Timer, label: "Duration", value: blogPostData.duration },
                                { icon: Clock, label: "Critique session", value: blogPostData.critiqueSession },
                                { icon: Award, label: "Certificate", value: blogPostData.certificate },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex items-start gap-3 text-sm">
                                    <Icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                                    <span className="text-muted-foreground">{label}:</span>
                                    <span className="font-medium text-foreground">{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button className="flex-1" size="lg"><BookOpen className="w-4 h-4" /> Enroll in course</Button>
                            <Button variant="outline" size="lg"><Gift className="w-4 h-4" /> Buy as a gift</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
