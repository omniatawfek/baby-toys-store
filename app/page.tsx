import Banner from "./components/home/banner";
import CategorySections from "./components/home/categoriesSection";
import Features from "./components/home/features";
import Hero from "./components/home/hero";
import Photoshoots from "./components/home/photoshoots";
import Reviews from "./components/home/reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySections />
      <Banner />
      <Reviews />
      <Photoshoots />
      <Features />
    </div>
  );
}
