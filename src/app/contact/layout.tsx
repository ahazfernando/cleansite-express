import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Free Quote | Skill City Melbourne & Victoria",
    description: "Get a free quote for house cleaning, office cleaning & builders cleaning in Melbourne, Oakleigh & Victoria. Contact Skill City Facility Solutions.",
    keywords: ["cleaning quote Melbourne", "contact Skill City", "free quote Victoria", "Oakleigh cleaning contact"],
    openGraph: {
        title: "Contact Skill City | Free Cleaning Quote Melbourne & Victoria",
        description: "Free quote for residential and commercial cleaning in Melbourne, Oakleigh & Victoria.",
        url: "https://www.skillcityfacilitysolutions.com.au/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
