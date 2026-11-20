import ReviewCard, { type Review } from "../ui/review-card";

const reviews: Review[] = [
  {
    id: 1,
    name: "Jessica",
    rating: 5,
    comment:
      "Sociitis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    avatar: "/avatar.png",
  },
  {
    id: 2,
    name: "John Smith",
    rating: 5,
    comment:
      "Sociitis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    avatar: "/avatar.png",
  },
  {
    id: 3,
    name: "Andrea",
    rating: 5,
    comment:
      "Sociitis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    avatar: "/avatar.png",
  },
];

export default function Reviews() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="font-extrabold text-2xl">
          Hear From Other Happy Parents
        </h2>
        <p className="text-gray-600">Customer testimonials</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
