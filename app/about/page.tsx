import { teamMembers } from "@/lib/utils";
import ProfileCard from "@/components/profile-card";

export default function Page() {
  return (
    <div className="min-h-screen text-gray-800 px-6 md:px-12 py-6">
      <div className="">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Meet the team of creators, designers and engineers behind Jumbaa
        </h1>
        <p className="text-xl mb-8 md:text-2xl max-w-2xl mx-auto">
          To be who we are and to do what we do, it takes a team of dedicated
          individuals who are passionate about their work.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <ProfileCard
            key={member.name}
            profile={member.profile}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
}
