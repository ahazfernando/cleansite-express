import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
    title: "Skill City Facility Solutions | Professional Cleaning Melbourne & Victoria",
    description: "Skill City Facility Solutions offers professional cleaning in Melbourne, Oakleigh & Victoria. House cleaning, office cleaning, builders cleaning. Eco-friendly. Free quote.",
    keywords: ["Skill City Facility Solutions", "cleaning Melbourne", "house cleaning Victoria", "office cleaning Oakleigh", "eco-friendly cleaning", "commercial cleaning"],
    openGraph: {
        title: "Skill City Facility Solutions | Professional Cleaning Melbourne & Victoria",
        description: "Skill City Facility Solutions — Professional cleaning in Melbourne, Oakleigh & Victoria. House, office & builders cleaning. Eco-friendly. Free quote.",
        url: "https://www.skillcityfacilitysolutions.com.au",
    },
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
