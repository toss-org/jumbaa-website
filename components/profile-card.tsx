import Image from "next/image";

interface Profile {
  profile: string;
  name: string;
  position: string;
}
export default function ProfileCard({ profile, name, position }: Profile) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div>
        <Image
          src={profile}
          alt={`profile picture of ${name}`}
          width={300}
          height={300}
          className="w-full h-48 sm:h-64 object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-teal-700 font-bold text-xl md:text-2xl">{name}</p>
        <p className="font-medium mb-3">{position}</p>
      </div>
    </div>
  );
}
