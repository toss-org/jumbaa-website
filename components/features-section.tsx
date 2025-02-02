import Image from "next/image";

export default function Features() {
  return (
    <section className="py-20  text-[#1e9577]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          We are here for you, no matter where you reside
        </h2>
        <p className="text-xl mb-8 md:text-2xl max-w-2xl mx-auto">
          get honest details about the property before making your decision
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/patricia-hokororo-property-unsplash.jpg"
              fill
              className="object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105"
              alt="Feature screenshot 1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/patricia-hokororo-property-unsplash.jpg"
              fill
              className="object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105"
              alt="Feature screenshot 2"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/patricia-hokororo-property-unsplash.jpg"
              fill
              className="object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105"
              alt="Feature screenshot 3"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
