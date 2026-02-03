import { Metadata } from "next";
import { BuildersHeroSection } from "@/components/services/BuildersHeroSection";
import { BuildersHeroImmersive } from "@/components/services/BuildersHeroImmersive";

export const metadata: Metadata = {
    title: "Builders Cleaning Melbourne & Victoria | Post-Construction Cleaning",
    description: "Professional builders cleaning and post-construction cleaning in Melbourne, Oakleigh & Victoria. End-of-build clean, dust removal, site handover.",
    keywords: ["builders cleaning Melbourne", "post construction cleaning Victoria", "Oakleigh builders clean", "end of build cleaning"],
    openGraph: {
        title: "Builders Cleaning Melbourne & Victoria | Skill City",
        description: "Post-construction and builders cleaning in Melbourne, Oakleigh & Victoria. Free quote.",
        url: "https://www.skillcityfacilitysolutions.com.au/services/builders-cleaning",
    },
};
import { BuildersHeroCard } from "@/components/services/BuildersHeroCard";
import { BuildersProcessSection } from "@/components/services/BuildersProcessSection";
import LocationsSection from "@/components/home/LocationsSection";
import { BuildersWhyChooseUs } from "@/components/services/BuildersWhyChooseUs";

export default function BuildersCleaningPage() {
    return (
        <main>


            {/* --- Design Option 2 --- */}
            <div className="bg-slate-100 py-2 text-center uppercase text-xs font-bold tracking-widest text-slate-400">Option 2: Immersive Visual</div>
            <BuildersHeroImmersive />

            {/* --- Design Option 3 --- */}

            <BuildersHeroCard />
            <BuildersProcessSection />
            <LocationsSection />
            <BuildersWhyChooseUs />
        </main>
    );
}
