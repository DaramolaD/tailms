"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SignInForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "student"; // Default to student if no role specified
  const [showPassword, setShowPassword] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [passcode, setPasscode] = useState("");

  return (
    <div className="flex min-h-screen">
      {/* Left Column - Orange background with logo */}
      <div className="hidden w-2/5 bg-[#FFB974] lg:flex lg:items-center lg:justify-center">
        <div className="relative">
          {/* Logo - Using logoBig.svg */}
          <Image
            src="/icons/logoBig.svg"
            alt="TAILMS Logo"
            width={200}
            height={200}
            className="drop-shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Right Column - White background with login form */}
      <div className="flex w-full flex-col items-center justify-center bg-white px-6 py-12 lg:w-3/5">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <h1 className="mb-2 text-3xl font-bold text-gray-800">
                Welcome back
              </h1>
              <Image src="/icons/Sparkles.svg" alt="Sparkles" width={36} height={36} className="drop-shadow-lg" priority />
            </div>
            <p className="text-sm text-gray-600">
              Enter your credentials to access your account and continue your
              learning journey.
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Student ID Field */}
            <div>
              <label
                htmlFor="studentId"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Enter your student id"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
              />
            </div>

            {/* Passcode Field */}
            <div>
              <label
                htmlFor="passcode"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Passcode
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter your passcode"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-gray-800 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Passcode Link */}
            <div className="flex justify-end">
              <Link
                href="/reset-passcode"
                className="text-sm text-gray-700 hover:text-orange-600"
              >
                I forgot my passcode
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Log In
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New here?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-orange-600 hover:text-orange-700"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-gray-600">Loading...</div>
      </div>
    }>
      <SignInForm />
    </Suspense>
  );
}

