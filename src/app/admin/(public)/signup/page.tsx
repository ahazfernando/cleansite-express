"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function AdminSignup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            try {
                // Determine role based on email or other logic if needed, for now default to admin request
                await setDoc(doc(db, "users", user.uid), {
                    email,
                    createdAt: serverTimestamp(),
                    isApproved: false,
                    role: "admin",
                });

                toast.success("Account created. Please wait for admin approval.");
                // Redirect to login instead of admin dashboard since they are not approved yet
                router.push("/admin/login");
            } catch (firestoreError: any) {
                console.error("Error creating user document:", firestoreError);
                // If firestore write fails, should we delete the auth user? 
                // For now, let's just show an error.
                toast.error("Account created but failed to set profile. Please contact support.");
            }

        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "Failed to create account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                    Create Account
                </h1>
                <p className="text-sm text-muted-foreground">
                    Sign up to become an administrator.
                </p>
            </div>

            <form className="space-y-4" onSubmit={handleSignup}>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-11"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-11"
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full h-11 bg-black hover:bg-zinc-800 text-white dark:bg-white dark:text-black mt-2"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating account...
                        </>
                    ) : (
                        "Sign Up"
                    )}
                </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>
                    Already have an account?{" "}
                    <Link
                        href="/admin/login"
                        className="font-medium text-black dark:text-white underline-offset-4 hover:underline"
                    >
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );
}
