import Image from "next/image";
import { Check } from "lucide-react";

export default function Details() {
  const features = [
    "Master bedroom self-contained",
    "paving block parking",
    "Prime location",
    "geti na uzio kwa security",
    "karibu na huduma zote muhimu",
  ];
  return (
    <section className="py-20 text-[#1e9577]" id="details">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Discover you new home
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="px-6">
          <Image
            src="/patricia-hokororo-property-unsplash.jpg"
            className="rounded-lg shadow-lg object-cover"
            height={300}
            width={400}
            alt="Property"
            priority
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Property Features</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
