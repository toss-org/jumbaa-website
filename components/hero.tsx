import CountdownTimer from "./countdown-timer";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Jumbaa Awaits
        </h1>
        <p className="text-xl mb-8 md:text-2xl max-w-2xl mx-auto">
          get ready to experience the future of estate leasing
        </p>
      </div>
      <div className="mt-8">
        <CountdownTimer />
      </div>
      <div className="mt-12">
        <button className="bg-[#1E9577] text-white py-2 px-8 rounded-lg font-semibold hover:bg-teal-700 transition-colors duraion-300">
          Learn More
        </button>
      </div>
    </section>
  );
}
