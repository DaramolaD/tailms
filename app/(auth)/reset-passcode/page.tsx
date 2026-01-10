"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function ResetPasscodePage() {
  const router = useRouter();
  const [studentId, setStudentId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - navigate to create new passcode page
    router.push("/create-new-passcode");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Column - Orange background with logo */}
      <div className="hidden w-2/5 bg-orange-100 lg:flex lg:items-center lg:justify-center">
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

      {/* Right Column - White background with reset form */}
      <div className="flex w-full flex-col bg-white px-6 py-12 lg:w-3/5">
        <div className="mx-auto w-full max-w-md">
          {/* Back Link */}
          <Link
            href="/sign-in"
            className="mb-8 inline-flex items-center text-sm text-gray-800 hover:text-orange-600"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-800">
              Reset my passcode
            </h1>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Aliquam nunc ipsum senectus
              varius dui eu fusce.
            </p>
          </div>

          {/* Reset Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
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

            {/* Request Reset Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Request passcode reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

