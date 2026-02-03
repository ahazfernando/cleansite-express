"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", pathname);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-secondary flex items-center justify-center">
            <div className="text-center px-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8">
                    <span className="text-6xl">🧹</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Oops! This Page Got Cleaned Up
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    The page you're looking for seems to have been swept away. Let's get you back to a clean start.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-primary flex items-center gap-2" asChild>
                        <Link href="/">
                            <Home className="w-4 h-4" />
                            Go Home
                        </Link>
                    </Button>
                    <Button className="btn-outline flex items-center gap-2" onClick={() => router.back()}>
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    );
}
