import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between gap-2 bg-primary px-3 py-2 text-[#F7F7F6] sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
        <Image
          src="/vector.png"
          alt="shipping icon"
          width={30}
          height={30}
          className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
        />

        <p className="text-[10px] font-extrabold sm:text-xs lg:text-base">
          Free shipping with over $150
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <Link
          href="/login"
          className="text-[10px] font-semibold transition-colors hover:text-white sm:text-xs lg:text-base"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="text-[10px] font-semibold transition-colors hover:text-white sm:text-xs lg:text-base"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
