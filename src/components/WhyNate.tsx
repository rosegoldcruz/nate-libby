const reasons = [
  {
    icon: "🤝",
    title: "He's a real person, not a call center",
    body: "When you reach out to Nate, you're talking to Nate. Not a script. Not a queue. A real conversation with someone who will actually listen.",
  },
  {
    icon: "🚛",
    title: "He understands your world",
    body: "Nate works specifically with truckers and owner-operators. He knows the industry isn't 9-to-5, and your financial needs aren't either.",
  },
  {
    icon: "📋",
    title: "He'll be straight with you",
    body: "If IUL doesn't make sense for your situation, Nate will tell you that. No pressure tactics. No hype. Just honest information so you can make your own call.",
  },
  {
    icon: "🔎",
    title: "No obligation to commit",
    body: "A conversation is just that — a conversation. You're not signing anything or buying anything by reaching out. You're just getting information.",
  },
];

export default function WhyNate() {
  return (
    <section className="bg-white px-5 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1f3d] text-center mb-4">
          Why Talk with Nate?
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          There are a lot of financial people out there. Here&apos;s why truckers
          specifically reach out to Nate.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-6"
            >
              <div className="text-3xl shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-base font-bold text-[#0f1f3d] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
