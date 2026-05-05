export default function Hero() {
  return (
    <section className="bg-[#0f1f3d] text-white px-5 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
          A Conversation Worth Having
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Truck Drivers: Build a Long-Term Plan Beyond the Road
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
          Nate Libby helps truckers understand how Indexed Universal Life
          insurance may fit into a smarter long-term financial strategy.
        </p>
        <a
          href="#qualifier"
          className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-base px-8 py-4 rounded-lg transition-colors duration-200"
        >
          See If This Makes Sense For You
        </a>
        <p className="mt-6 text-blue-200 text-sm">
          No pressure. No jargon. Just a straight conversation.
        </p>
      </div>
    </section>
  );
}
