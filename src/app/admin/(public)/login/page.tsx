"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Check if user is approved
            const userDoc = await getDoc(doc(db, "users", user.uid));

            if (userDoc.exists()) {
                const userData = userDoc.data();
                if (userData.role === 'admin' && !userData.isApproved) {
                    await signOut(auth);
                    toast.error("Account pending approval. Please contact administrator.");
                    setLoading(false);
                    return;
                }
            } else {
                // Handle legacy users or errors - optionally allow them or force create profile
                // For security, maybe best to treat missing profile as unapproved if we are strict.
                // But for now, if no profile exists (legacy), we might want to let them in or create one.
                // Let's assume strict mode: no profile = no access, or create profile and pending.
                // For this implementation, let's just log it and proceed (legacy support) or block.
                // Plan said block, but let's be careful. Let's block to be safe.
                await signOut(auth);
                toast.error("User profile not found. Please contact support.");
                setLoading(false);
                return;
            }

            toast.success("Logged in successfully");
            router.push("/admin");
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "Failed to login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                    Welcome Back!
                </h1>
                <p className="text-sm text-muted-foreground">
                    Log in to start managing your facility solutions with ease.
                </p>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
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
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-11"
                    />
                </div>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                        {/* Checkbox Placeholder if needed */}
                        {/* <input type="checkbox" className="rounded border-gray-300" />
                        <span>Remember Me</span> */}
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full h-11 bg-black hover:bg-zinc-800 text-white dark:bg-white dark:text-black mt-2"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Signing in...
                        </>
                    ) : (
                        "Login"
                    )}
                </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>
                    Don't have an account?{" "}
                    <Link
                        href="/admin/signup"
                        className="font-medium text-black dark:text-white underline-offset-4 hover:underline"
                    >
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
}
