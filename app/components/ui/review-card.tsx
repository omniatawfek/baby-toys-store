import Image from "next/image";

export type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
};

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const { name, rating, comment, avatar } = review;
  return (
    <div className="bg-rose-50 px-6 py-4">
      <div className="flex items-center gap-2 mb-3">
        {Array.from({ length: rating }).map((_, index) => (
          <Image key={index} src="/star.png" alt="" width={16} height={16} />
        ))}
      </div>
      <p className="mb-3  text-gray-600">{comment}</p>
      <div className="flex items-center gap-2">
        <Image src={avatar} alt={name} width={40} height={40} />
        <h3 className="font-bold">{name}</h3>
      </div>
    </div>
  );
}
