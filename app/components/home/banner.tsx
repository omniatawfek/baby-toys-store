import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="flex flex-col gap-4 px-4 py-12 sm:px-6 sm:py-14 md:flex-row md:gap-6 lg:px-8">
      <div className="relative h-[280px] w-full overflow-hidden sm:h-[340px] lg:h-[400px] md:flex-1">
        <Image
          src="/banner1.png"
          alt="Child enjoying playtime with toys"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h2 className="text-center text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            Discover the joy of play
          </h2>
        </div>
      </div>

      <div className="relative h-[280px] w-full overflow-hidden sm:h-[340px] lg:h-[400px] md:flex-1">
        <Image
          src="/banner2.png"
          alt="Eco-friendly toys"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-y-0 right-0 flex w-1/2 items-center px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-xl font-extrabold leading-tight text-primary sm:text-2xl lg:text-3xl">
              Eco-Friendly Toys
            </h2>

            <p className="text-xs leading-6 text-gray-700 sm:text-sm lg:text-base">
              Flash sale 30%, Extra discount for loyal customers
            </p>

            <Link
              href="/products"
              className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-[#F5D800] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-8 sm:py-3 sm:text-base"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
