import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full">
      {/* Desktop and large tablet */}
      <div className="relative hidden aspect-[16/8] min-h-[420px] w-full overflow-hidden md:block lg:aspect-[16/7] lg:min-h-[500px]">
        <Image
          src="/hero.png"
          alt="A child enjoying educational toys"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-y-0 right-0 flex w-1/2 items-center justify-center px-6 lg:px-12">
          <div className="flex max-w-xl flex-col items-start gap-5">
            <h1 className="text-4xl font-extrabold leading-tight text-primary lg:text-5xl xl:text-6xl">
              Play, Learn, &amp; Grow!
            </h1>

            <p className="max-w-lg text-sm leading-7 text-gray-700 lg:text-base">
              Crafting smiles with every toy, made for learning, fun, and
              growth.
            </p>

            <Link
              href="/products"
              className="rounded-full bg-secondary px-8 py-3 text-base font-semibold text-gray-900 transition-colors hover:bg-[#F5D800] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/hero.png"
            alt="A child enjoying educational toys"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[25%_center]"
          />
        </div>

        <div className="flex flex-col items-center gap-4 px-5 py-8 text-center sm:px-8">
          <h1 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            Play, Learn, &amp; Grow!
          </h1>

          <p className="max-w-md text-sm leading-6 text-gray-700 sm:text-base">
            Crafting smiles with every toy, made for learning, fun, and growth.
          </p>

          <Link
            href="/products"
            className="rounded-full bg-secondary px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-[#F5D800]"
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
}
