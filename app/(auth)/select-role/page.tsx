import Link from "next/link";
import Image from "next/image";

export default function SelectRolePage() {
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

      {/* Right Column - White background with role selection */}
      <div className="flex w-full flex-col items-center justify-center bg-white px-6 py-12 lg:w-3/5">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">
              What type of user are you?
            </h1>
            <p className="text-sm text-gray-600 sm:text-base">
              Select the option that best describes your role to help us tailor
              your experience to your needs.
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="space-y-4">
            {/* Student Card */}
            <Link
              href="/sign-in?role=student"
              className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
            >
              {/* Icon - Student icon on orange circle */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <Image
                  src="/icons/studentIcon.svg"
                  alt="Student"
                  width={24}
                  height={24}
                  className="text-orange-600"
                />
              </div>

              {/* Text content */}
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Student</h3>
                <p className="text-sm text-gray-600">
                  Access learning resources, track progress, and grow at your own
                  pace.
                </p>
              </div>

              {/* Arrow icon */}
              <div className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            {/* Administrator Card */}
            <Link
              href="/sign-in?role=admin"
              className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-orange-300 hover:shadow-md"
            >
              {/* Icon - Admin icon on orange circle */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <Image
                  src="/icons/adminIcon.svg"
                  alt="Administrator"
                  width={24}
                  height={24}
                  className="text-orange-600"
                />
              </div>

              {/* Text content */}
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Administrator</h3>
                <p className="text-sm text-gray-600">
                  Manage users, content, and system settings with full control.
                </p>
              </div>

              {/* Arrow icon */}
              <div className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

