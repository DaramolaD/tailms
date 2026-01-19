import Image from "next/image";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "We're working hard to bring you something amazing. Check back soon!",
}: ComingSoonProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-12 text-center">
      <div className="mb-6">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">
          <svg
            className="h-12 w-12 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <h1 className="mb-2 text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mb-8 max-w-md text-gray-600">{description}</p>
    </div>
  );
}
