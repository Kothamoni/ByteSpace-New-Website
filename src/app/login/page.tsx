"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/layout/AuthLayout";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter your email and password.");
      return;
    }
    setError("");
    // Demo only: no backend is wired up yet.
    router.push("/");
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue learning on ByteSpace."
      footerText="Don't have an account?"
      footerLinkText="Join Us"
      footerLinkHref="/signup"
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Input id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        <Input id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
        {error && <p className="text-xs text-red-600">{error}</p>}
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </AuthLayout>
  );
}
