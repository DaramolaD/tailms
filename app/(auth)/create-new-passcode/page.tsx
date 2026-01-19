"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CreateNewPasscodePage() {
  const [formData, setFormData] = useState({
    newPasscode: "",
    confirmPasscode: "",
  });
  const [showNewPasscode, setShowNewPasscode] = useState(false);
  const [showConfirmPasscode, setShowConfirmPasscode] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - set success state
    setIsSuccess(true);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Column - Orange background with logo */}
      <div className="hidden h-screen w-2/5 bg-orange-100 lg:flex lg:items-center lg:justify-center lg:fixed">
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

      {/* Right Column - White background with create passcode form */}
      <div className="flex w-full flex-col items-center justify-center bg-white px-6 pb-12 lg:ml-[40%] lg:w-3/5 lg:overflow-y-auto lg:h-screen">
        <div className="w-full max-w-md">
          {!isSuccess ? (
            <>
              {/* Back Link */}
              <Link
                href="/reset-passcode"
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
              <div className="mb-8 pt-16 lg:pt-6">
                <h1 className="mb-2 text-3xl font-bold text-gray-800">
                  Create new passcode
                </h1>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Aliquam nunc ipsum senectus
                  varius dui eu fusce.
                </p>
              </div>

              {/* Create Passcode Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
            {/* New Passcode Field */}
            <div>
              <label
                htmlFor="newPasscode"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                New Passcode
              </label>
              <div className="relative">
                <input
                  type={showNewPasscode ? "text" : "password"}
                  id="newPasscode"
                  name="newPasscode"
                  value={formData.newPasscode}
                  onChange={handleChange}
                  placeholder="Enter your passcode"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-gray-800 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPasscode(!showNewPasscode)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showNewPasscode ? "Hide password" : "Show password"}
                >
                  {showNewPasscode ? (
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
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Passcode Field */}
            <div>
              <label
                htmlFor="confirmPasscode"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Confirm Passcode
              </label>
              <div className="relative">
                <input
                  type={showConfirmPasscode ? "text" : "password"}
                  id="confirmPasscode"
                  name="confirmPasscode"
                  value={formData.confirmPasscode}
                  onChange={handleChange}
                  placeholder="Enter your passcode"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-gray-800 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPasscode(!showConfirmPasscode)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={
                    showConfirmPasscode ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPasscode ? (
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
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

                {/* Reset Passcode Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Reset passcode
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center justify-center text-center pt-16 lg:pt-6">
              {/* Success Icon with Confetti */}
              <div className="relative mb-6">
                {/* Success icon from icons folder */}
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/icons/sucessIcon.svg"
                    alt="Success"
                    width={80}
                    height={80}
                    className="min-h-[191px]! min-w-[205px]!"
                    priority
                  />
                </div>
              </div>

              {/* Success Message */}
              <h1 className="mb-4 text-3xl font-bold text-gray-800">
                Passcode reset successfully!
              </h1>
              <p className="mb-8 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Aliquam nunc ipsum senectus
                varius dui eu fusce.
              </p>

              {/* Back to Sign In Button */}
              <Link
                href="/sign-in"
                className="w-full rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

