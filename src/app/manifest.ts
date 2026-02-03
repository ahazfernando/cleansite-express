import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    const baseUrl = "https://www.skillcityfacilitysolutions.com.au";
    return {
        name: "Skill City Facility Solutions",
        short_name: "Skill City",
        description: "Professional cleaning services in Melbourne, Oakleigh & Victoria. House cleaning, office cleaning, builders cleaning.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        orientation: "portrait-primary",
        scope: "/",
        lang: "en-AU",
        categories: ["business", "lifestyle"],
        icons: [
            {
                src: "/SkillCityFSEC.png",
                sizes: "any",
                type: "image/png",
                purpose: "any",
            },
        ],
    };
}
