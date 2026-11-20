import Image from "next/image";

type Category = {
  img: string;
  name: string;
};

const categories: Category[] = [
  { img: "/cat1.png", name: "Playsets" },
  { img: "/cat2.png", name: "Control Toys" },
  { img: "/cat3.png", name: "Educational Toys" },
  { img: "/cat4.png", name: "Eco-Friendly Toys" },
  { img: "/cat5.png", name: "Stuffed Toys" },
];

export default function CategoriesSection() {
  return (
    <section
      aria-labelledby="categories-title"
      className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mb-8 text-center sm:mb-10">
        <h2
          id="categories-title"
          className="text-2xl font-extrabold sm:text-3xl"
        >
          Find the Perfect Toy
        </h2>

        <p className="mt-2 text-gray-600">Our Collections</p>
      </div>

      <ul className="mx-auto flex max-w-6xl flex-wrap items-start justify-center gap-x-6 gap-y-8">
        {categories.map((category) => (
          <li
            key={category.name}
            className="flex w-36 flex-col items-center gap-3 text-center sm:w-44"
          >
            <Image
              src={category.img}
              alt={category.name}
              width={200}
              height={200}
              className="h-36 w-36 object-contain sm:h-44 sm:w-44"
            />

            <h3 className="text-sm font-semibold sm:text-base">
              {category.name}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
