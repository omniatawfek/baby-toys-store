import Image from "next/image";
const photos = [
  { id: 1, src: "/photo1.png", alt: "Baby toys photoshoot 1" },
  { id: 2, src: "/photo2.png", alt: "Baby toys photoshoot 2" },
  { id: 3, src: "/photo3.png", alt: "Baby toys photoshoot 3" },
  { id: 4, src: "/photo4.png", alt: "Baby toys photoshoot 4" },
];
export default function Photoshoots() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="font-extrabold text-2xl">Recent Photoshoots</h2>
        <p className="text-gray-600">check gallery</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            width={360}
            height={360}
            className="w-full h-auto"
          />
        ))}
      </div>
    </section>
  );
}
