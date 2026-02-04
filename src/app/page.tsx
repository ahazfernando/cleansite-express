import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

const baseUrl = "https://www.skillcityfacilitysolutions.com.au";

export const metadata: Metadata = {
    title: "Skill City Facility Solutions | Professional Cleaning Melbourne & Victoria",
    description: "Skill City Facility Solutions offers professional cleaning in Melbourne, Oakleigh & Victoria. House cleaning, office cleaning, builders cleaning. Eco-friendly. Free quote.",
    keywords: ["Skill City Facility Solutions", "cleaning Melbourne", "house cleaning Victoria", "office cleaning Oakleigh", "eco-friendly cleaning", "commercial cleaning"],
    alternates: { canonical: baseUrl },
    openGraph: {
        title: "Skill City Facility Solutions | Professional Cleaning Melbourne & Victoria",
        description: "Skill City Facility Solutions — Professional cleaning in Melbourne, Oakleigh & Victoria. House, office & builders cleaning. Eco-friendly. Free quote.",
        url: baseUrl,
        siteName: "Skill City Facility Solutions",
        locale: "en_AU",
        type: "website",
        images: [{ url: "/SkillCityPNGLOGO.png", width: 1200, height: 630, alt: "Skill City Facility Solutions" }],
    },
    twitter: { card: "summary_large_image", title: "Skill City Facility Solutions | Cleaning Melbourne & Victoria", description: "Professional cleaning in Melbourne, Oakleigh & Victoria. Free quote." },
    robots: { index: true, follow: true },
};
import FeaturesHero from "@/components/home/FeaturesHero";
import HowItWorks from "@/components/home/HowItWorks";
import LocationsSection from "@/components/home/LocationsSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import HomeServicesGrid from "@/components/home/HomeServicesGrid";
import ExperienceSection from "@/components/home/ExperienceSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturesHero />
            <HowItWorks />
            <LocationsSection />
            <AboutPreview />
            <ServicesSection />
            <HomeServicesGrid />
            <ExperienceSection />
            {/* <WhyChooseUs /> */}
            <BlogSection />
            <CTASection />
        </>
    );
}
