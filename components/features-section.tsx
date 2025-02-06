import Image from "next/image";

type FeatureImageProps = {
  src: string;
  alt: string;
};
const FeatureImage = ({ src, alt }: FeatureImageProps) => (
  <div className="">
    <div className="my-4 relative w-full h-1/2 min-h-[50vh] rounded-lg overflow-hidden">
      <Image
        src={src}
        fill
        className="object-contain rounded-lg shadow-lg transition duration-300 hover:scale-105"
        alt={alt}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />
    </div>
  </div>
);

export default function Features() {
  const features = [
    { src: "/home-prototype.png", alt: "Feature screenshot 1" },
    { src: "/house-prototype.png", alt: "Feature screenshot 2" },
    { src: "/map-listing.png", alt: "Feature screenshot 3" },
  ];

  return (
    <section className="py-20 text-[#1e9577]" id="features">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          We are here for you, no matter where you reside
        </h2>
        <p className="text-xl mb-8 md:text-2xl max-w-2xl mx-auto">
          get honest details about the property before making your decision
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 container mx-auto">
        {features.map((feature, index) => (
          <FeatureImage key={index} src={feature.src} alt={feature.alt} />
        ))}
      </div>
    </section>
  );
}
