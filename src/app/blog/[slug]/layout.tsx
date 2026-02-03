import type { Metadata } from "next";
import { getBlogPostForSEO, BLOG_BASE_URL } from "@/lib/blog-posts";

type Props = { children: React.ReactNode; params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostForSEO(slug);
    if (!post) {
        return {
            title: "Cleaning Advice | Skill City Facility Solutions",
            description: "Read our latest articles on home and office cleaning, maintenance tips, and eco-friendly solutions.",
        };
    }
    const url = `${BLOG_BASE_URL}/blog/${slug}`;
    return {
        title: post.title,
        description: post.description,
        keywords: ["cleaning tips", "cleaning advice", "Skill City", "Melbourne", "Victoria"],
        openGraph: {
            title: post.title,
            description: post.description,
            url,
            type: "article",
            publishedTime: post.datePublished,
            authors: [post.author],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
        alternates: { canonical: url },
    };
}

export default async function BlogPostLayout({ children, params }: Props) {
    const { slug } = await params;
    const post = getBlogPostForSEO(slug);

    const articleJsonLd = post
        ? {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              author: {
                  "@type": "Person",
                  name: post.author,
              },
              datePublished: post.datePublished,
              publisher: {
                  "@id": `${BLOG_BASE_URL}/#organization`,
                  "@type": "Organization",
                  name: "Skill City Facility Solutions",
              },
              mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `${BLOG_BASE_URL}/blog/${slug}`,
              },
              ...(post.image && { image: post.image }),
          }
        : null;

    return (
        <>
            {articleJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
                />
            )}
            {children}
        </>
    );
}
