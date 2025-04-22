import Link from "next/link";
import { colors } from "@/lib/theme/colors";
import { PawPrint, HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: colors.neutral.background }}
    >
      <div className="text-center max-w-xl px-4">
        <div className="mb-6 flex justify-center">
          <div
            className="h-24 w-24 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${colors.primary.light}, ${colors.primary.dark})`,
            }}
          >
            <PawPrint className="h-14 w-14 text-white" />
          </div>
        </div>

        <h1
          className="text-9xl font-bold"
          style={{ color: colors.primary.main }}
        >
          404
        </h1>
        <h2
          className="text-3xl font-semibold mt-4 mb-6"
          style={{ color: colors.neutral.text }}
        >
          Page Not Found
        </h2>

        <p className="mb-8" style={{ color: colors.neutral.lightText }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="px-6 py-3 rounded-md text-white flex items-center justify-center w-48 mx-auto"
          style={{ backgroundColor: colors.primary.main }}
        >
          <HomeIcon className="h-5 mr-2" />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
