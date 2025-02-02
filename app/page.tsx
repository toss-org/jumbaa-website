import Details from "@/components/details-section";
import Features from "@/components/features-section";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen text-white px-6">
      <Hero />
      <Details />
      <Features />
    </div>
  );
}
