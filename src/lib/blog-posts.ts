/**
 * Blog post data for SEO (metadata, JSON-LD) and listing.
 * Keep in sync with any content in app/blog/[slug]/page.tsx.
 */
export const BLOG_BASE_URL = "https://www.skillcityfacilitysolutions.com.au";

export const blogPostsBySlug: Record<
    string,
    { title: string; description: string; author: string; datePublished: string; image?: string }
> = {
    "1": {
        title: "10 Tips for a Cleaner Home",
        description:
            "Discover the best practices and hidden gems for maintaining a spotless living space. From daily habits to weekly routines, we cover everything you need to know.",
        author: "Sarah Johnson",
        datePublished: "2026-01-20",
        image: `${BLOG_BASE_URL}/home/PHOTO-2025-10-06-14-54-06.jpg`,
    },
    "2": {
        title: "Benefits of Eco-Friendly Cleaning",
        description:
            "How professional green cleaning services can improve your health and property value. Learn about sustainable products and methods.",
        author: "Michael Chen",
        datePublished: "2026-01-18",
    },
    "3": {
        title: "Office Cleaning Best Practices",
        description:
            "Explore the most effective strategies for maintaining a productive clean workspace that boosts employee morale and efficiency.",
        author: "Emily Davis",
        datePublished: "2026-01-15",
    },
    "4": {
        title: "Spring Cleaning Checklist",
        description:
            "Your ultimate guide to spring cleaning. A comprehensive checklist to ensure every corner of your home gets the attention it deserves.",
        author: "Jessica Williams",
        datePublished: "2026-01-12",
    },
    "5": {
        title: "Deep Cleaning vs Regular Cleaning",
        description:
            "Understanding the difference between deep cleaning and regular cleaning services. When do you need each?",
        author: "David Brown",
        datePublished: "2026-01-10",
    },
    "6": {
        title: "How to Choose a Cleaning Service",
        description:
            "A complete guide to selecting the right professional cleaning service for your home or business needs.",
        author: "Amanda Taylor",
        datePublished: "2026-01-08",
    },
    "7": {
        title: "Complete Guide to Move-Out Cleaning",
        description:
            "Moving out? Make sure you get your security deposit back with our comprehensive move-out cleaning checklist.",
        author: "James Wilson",
        datePublished: "2026-01-05",
    },
};

export function getBlogPostForSEO(slug: string) {
    return blogPostsBySlug[slug] ?? null;
}
