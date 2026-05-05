const challenges = [
  {
    icon: "🛣️",
    title: "No employer retirement plan",
    body: "Most truckers — especially owner-operators — don't have access to a 401(k) or pension. You're on your own to build something.",
  },
  {
    icon: "💸",
    title: "Unpredictable income",
    body: "Freight rates go up and down. A financial strategy that works for a salaried office worker often doesn't fit a trucker's reality.",
  },
  {
    icon: "🏥",
    title: "Health concerns on the road",
    body: "Years of long hauls take a toll. Planning ahead while you're still healthy gives you options you won't have later.",
  },
  {
    icon: "⏳",
    title: "The miles don't last forever",
    body: "At some point, the road ends — by choice or by necessity. Having a plan means you get to decide what comes next.",
  },
];

export default function WhyPlan() {
  return (
    <section className="bg-white px-5 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1f3d] text-center mb-4">
          Why Truckers Need a Plan Beyond the Road
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Driving is a career, not a retirement plan. Here&apos;s what most
          truckers face — and why it matters to start thinking now.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#0f1f3d] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
