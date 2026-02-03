import { HouseCleaningHero } from "@/components/services/house-cleaning/HouseCleaningHero";
import { HouseCleaningFeatures } from "@/components/services/house-cleaning/HouseCleaningFeatures";
import { HouseCleaningProcess } from "@/components/services/house-cleaning/HouseCleaningProcess";
import { HouseCleaningReviews } from "@/components/services/house-cleaning/HouseCleaningReviews";
import { HouseCleaningCTA } from "@/components/services/house-cleaning/HouseCleaningCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "House Cleaning Melbourne & Victoria | Premium Home Cleaning",
    description: "Professional house cleaning in Melbourne, Oakleigh & Victoria. Eco-friendly, thorough home cleaning. Regular & deep cleaning. Free quote.",
    keywords: ["house cleaning Melbourne", "home cleaning Victoria", "Oakleigh house cleaning", "eco-friendly house cleaning"],
    openGraph: {
        title: "House Cleaning Melbourne & Victoria | Skill City",
        description: "Premium, eco-friendly house cleaning in Melbourne, Oakleigh & Victoria. Free quote.",
        url: "https://www.skillcityfacilitysolutions.com.au/services/house-cleaning",
    },
};

export default function HouseCleaningPage() {
    return (
        <main className="bg-white">
            <HouseCleaningHero />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "House Cleaning Services",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Skill City Facility Solutions"
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": "Melbourne"
                        },
                        "description": "Professional house cleaning services including deep cleaning, regular maintenance, and eco-friendly options.",
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "AUD",
                            "availability": "https://schema.org/InStock",
                            "price": "Call for Quote"
                        }
                    })
                }}
            />
            <HouseCleaningFeatures />
            <HouseCleaningProcess />
            <HouseCleaningReviews />
            <HouseCleaningCTA />
        </main>
    );
}
