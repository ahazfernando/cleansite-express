import { Metadata } from "next";
import { BlogHeroSection } from "@/components/blog/BlogHeroSection";

export const metadata: Metadata = {
    title: "Cleaning Tips & Guides | Melbourne & Victoria | Skill City",
    description: "Cleaning tips, eco-friendly advice & facility guides from Skill City. House cleaning, office cleaning & maintenance for Melbourne, Oakleigh & Victoria.",
    keywords: ["cleaning tips Melbourne", "eco-friendly cleaning Victoria", "house cleaning guides", "office cleaning tips"],
    openGraph: {
        title: "Cleaning Tips & Guides | Skill City Melbourne & Victoria",
        description: "Expert cleaning advice, eco-friendly tips and facility guides from Skill City.",
        url: "https://www.skillcityfacilitysolutions.com.au/blog",
    },
};
import Link from "next/link";
import blogCleanHome from "@/assets/blog-clean-home.jpg";
import blogEcoCleaning from "@/assets/blog-eco-cleaning.jpg";
import blogOfficeTips from "@/assets/blog-office-tips.jpg";
import cleanHomeImg from "@/assets/clean-home.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import moveCleaningImg from "@/assets/move-cleaning.jpg";

const blogPosts = [
    {
        id: 1,
        title: "10 Tips for a Cleaner Home",
        excerpt: "Discover the best practices and hidden gems for maintaining a spotless living space. From daily habits to weekly routines, we cover everything you need to know.",
        image: blogCleanHome,
        category: "Home Tips",
        author: {
            name: "Sarah Johnson",
            avatar: "SJ",
        },
        date: "20 Jan 2026",
        readTime: "5 min read",
        featured: true,
    },
    {
        id: 2,
        title: "Benefits of Eco-Friendly Cleaning",
        excerpt: "How professional green cleaning services can improve your health and property value. Learn about sustainable products and methods.",
        image: blogEcoCleaning,
        category: "Sustainability",
        author: {
            name: "Michael Chen",
            avatar: "MC",
        },
        date: "18 Jan 2026",
        readTime: "4 min read",
        featured: true,
    },
    {
        id: 3,
        title: "Office Cleaning Best Practices",
        excerpt: "Explore the most effective strategies for maintaining a productive clean workspace that boosts employee morale and efficiency.",
        image: blogOfficeTips,
        category: "Commercial",
        author: {
            name: "Emily Davis",
            avatar: "ED",
        },
        date: "15 Jan 2026",
        readTime: "6 min read",
        featured: true,
    },
    {
        id: 4,
        title: "Spring Cleaning Checklist",
        excerpt: "Your ultimate guide to spring cleaning. A comprehensive checklist to ensure every corner of your home gets the attention it deserves.",
        image: cleanHomeImg,
        category: "Home Tips",
        author: {
            name: "Jessica Williams",
            avatar: "JW",
        },
        date: "12 Jan 2026",
        readTime: "7 min read",
        featured: false,
    },
    {
        id: 5,
        title: "Deep Cleaning vs Regular Cleaning",
        excerpt: "Understanding the difference between deep cleaning and regular cleaning services. When do you need each?",
        image: deepCleaningImg,
        category: "Guides",
        author: {
            name: "David Brown",
            avatar: "DB",
        },
        date: "10 Jan 2026",
        readTime: "5 min read",
        featured: false,
    },
    {
        id: 6,
        title: "How to Choose a Cleaning Service",
        excerpt: "A complete guide to selecting the right professional cleaning service for your home or business needs.",
        image: officeCleaningImg,
        category: "Guides",
        author: {
            name: "Amanda Taylor",
            avatar: "AT",
        },
        date: "8 Jan 2026",
        readTime: "4 min read",
        featured: false,
    },
    {
        id: 7,
        title: "Complete Guide to Move-Out Cleaning",
        excerpt: "Moving out? Make sure you get your security deposit back with our comprehensive move-out cleaning checklist.",
        image: moveCleaningImg,
        category: "Moving Tips",
        author: {
            name: "James Wilson",
            avatar: "JW",
        },
        date: "5 Jan 2026",
        readTime: "8 min read",
        featured: false,
    },
];

const categories = [
    "All Posts",
    "Home Tips",
    "Sustainability",
    "Commercial",
    "Guides",
    "Moving Tips",
];

export default function Blog() {
    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <>
            {/* Hero Section */}
            <BlogHeroSection />


            {/* Categories */}
            <section className="py-8 border-b border-border">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${index === 0
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-foreground hover:bg-primary/10"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPosts.map((post, index) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="group animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <article className="h-full">
                                    {/* Image */}
                                    <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
                                        <img
                                            src={post.image.src}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-5 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                                            {post.author.avatar}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-foreground">
                                                {post.author.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">{post.date}</p>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Posts */}
            <section className="section-padding bg-secondary">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold text-foreground mb-8">All Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {regularPosts.map((post, index) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="group animate-fade-in bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <article className="h-full">
                                    {/* Image */}
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={post.image.src}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        {/* Author & Meta */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                                                    {post.author.avatar}
                                                </div>
                                                <p className="text-xs font-medium text-foreground">
                                                    {post.author.name}
                                                </p>
                                            </div>
                                            <p className="text-xs text-muted-foreground">{post.readTime}</p>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="btn-outline">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                            Get Cleaning Tips in Your Inbox
                        </h3>
                        <p className="text-primary-foreground/90 mb-8 max-w-lg mx-auto">
                            Subscribe to our newsletter for the latest cleaning tips, exclusive offers, and more.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 rounded-full bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
