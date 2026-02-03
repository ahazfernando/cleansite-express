import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Admin Portal - Skill City Facility Solutions",
    description: "Admin portal for Skill City Facility Solutions",
};

export default function AdminPublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative min-h-screen w-full font-sans">
            {/* Full Screen Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/HomeHeaderSection.png"
                    alt="Skill City Facility Solutions"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Optional overlay for better text contrast if needed, currently just plain image as requested */}
                {/* <div className="absolute inset-0 bg-black/10" /> */}
            </div>

            {/* Testimonial Overlay - Bottom Left */}
            <div className="absolute bottom-12 left-12 z-10 hidden lg:block max-w-lg text-white">
                <div className="mb-6">
                    {/* Quote Icon */}
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-80">
                        <path d="M12.5 25C14.57 25 16.25 23.32 16.25 21.25V17.5H12.5V21.25H13.75C13.75 21.94 13.19 22.5 12.5 22.5C11.81 22.5 11.25 21.94 11.25 21.25H8.75C8.75 23.32 10.43 25 12.5 25ZM22.5 25C24.57 25 26.25 23.32 26.25 21.25V17.5H22.5V21.25H23.75C23.75 21.94 23.19 22.5 22.5 22.5C21.81 22.5 21.25 21.94 21.25 21.25H18.75C18.75 23.32 20.43 25 22.5 25Z" fill="white" transform="scale(1.5)" />
                        <path d="M10 10L15 10L15 25L10 25Z" fill="white" fillOpacity="0.01" /> {/* Spacer/Placeholder logic if needed, simpler SVG path prefered usually */}
                        <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C7.89543 16 7 16.8954 7 18L7 21C7 22.1046 7.89543 23 9 23H11V24C11 24.5523 10.5523 25 10 25H9V27H10C11.6569 27 13 25.6569 13 24V23H12.017C13.1216 23 14.017 22.1046 14.017 21Z" fill="currentColor" />
                        <path d="M24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19C17.8954 16 17 16.8954 17 18L17 21C17 22.1046 17.8954 23 19 23H21V24C21 24.5523 20.5523 25 20 25H19V27H20C21.6569 27 23 25.6569 23 24V23H22.017C23.1216 23 24.017 22.1046 24.017 21Z" fill="currentColor" />
                    </svg>

                    <p className="text-2xl font-medium leading-relaxed mb-6">
                        "Skill City Facility Solutions has transformed how we manage our properties. Their attention to detail and professional service is unmatched."
                    </p>

                    <div>
                        <p className="font-bold text-lg">Sarah Jenkins</p>
                        <p className="text-white/80">Property Manager, Urban Living</p>
                    </div>
                </div>
            </div>

            {/* Content Container - Pushes card to the right on large screens */}
            <div className="relative z-10 min-h-screen flex items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-20 py-12">
                {/* Auth Card */}
                <div className="w-full max-w-[480px] min-h-[600px] flex flex-col justify-center bg-white dark:bg-zinc-900 shadow-2xl rounded-3xl p-8 sm:p-12 space-y-8 backdrop-blur-sm bg-white/95 dark:bg-zinc-900/95">

                    {/* Logo aligned to left */}
                    <div className="flex justify-start">
                        <Image
                            src="/SkillCityPNGLOGO.png"
                            alt="Skill City Logo"
                            width={120}
                            height={120}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
}
