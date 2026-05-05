const points = [
  {
    label: "It grows based on a market index — without direct market risk",
    detail:
      "Your policy's growth is linked to an index like the S&P 500, but your principal isn't directly invested in the market. Most IUL policies include a floor (often 0%) that protects against market losses.",
  },
  {
    label: "There's a death benefit for your family",
    detail:
      "Like any life insurance, an IUL pays out to your beneficiaries if you pass away. That's real protection for the people you care about.",
  },
  {
    label: "The cash value can be accessed",
    detail:
      "Over time, IUL policies can build cash value that you may be able to access through policy loans or withdrawals. How and when that works depends on your specific policy — that's worth discussing carefully.",
  },
  {
    label: "It's not for everyone",
    detail:
      "IULs have costs, caps, and complexity. They work best as part of a broader plan — not as a standalone savings account. Nate will walk you through whether it fits your situation.",
  },
];

export default function IULExplainer() {
  return (
    <section className="bg-[#f0f4ff] px-5 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1f3d] text-center mb-4">
          What Is an IUL? (Plain English)
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          An Indexed Universal Life (IUL) policy is a type of permanent life
          insurance with a cash value component. Here&apos;s what that actually
          means:
        </p>
        <div className="space-y-5">
          {points.map((point, i) => (
            <div
              key={i}
              className="bg-white border-l-4 border-amber-400 rounded-r-xl p-5 shadow-sm"
            >
              <p className="font-bold text-[#0f1f3d] mb-1">{point.label}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500 italic">
          This is a general overview — not personalized financial advice. Policy
          terms vary. Always review the details with a licensed professional.
        </p>
      </div>
    </section>
  );
}
