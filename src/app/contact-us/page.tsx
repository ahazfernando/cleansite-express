import { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";
import ContactFAQSchema from "@/components/contact/ContactFAQSchema";

const baseUrl = "https://www.skillcityfacilitysolutions.com.au";

export const metadata: Metadata = {
    title: "Contact Us | Free Quote | Skill City Melbourne & Victoria",
    description: "Get a free quote for house cleaning, office cleaning & builders cleaning in Melbourne, Oakleigh & Victoria. Contact Skill City Facility Solutions.",
    keywords: ["cleaning quote Melbourne", "contact Skill City", "free quote Victoria", "Oakleigh cleaning contact"],
    alternates: {
        canonical: `${baseUrl}/contact-us`,
    },
    openGraph: {
        title: "Contact Skill City | Free Cleaning Quote Melbourne & Victoria",
        description: "Free quote for residential and commercial cleaning in Melbourne, Oakleigh & Victoria.",
        url: `${baseUrl}/contact-us`,
        siteName: "Skill City Facility Solutions",
        locale: "en_AU",
        type: "website",
        images: [{ url: "/SkillCityPNGLOGO.png", width: 1200, height: 630, alt: "Skill City Facility Solutions" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Skill City Facility Solutions Melbourne",
        description: "Free quote for cleaning in Melbourne, Oakleigh & Victoria.",
    },
    robots: { index: true, follow: true },
};

export default function ContactUsPage() {
    return (
        <>
            <ContactFAQSchema />
            <ContactPageContent />
        </>
    );
}
