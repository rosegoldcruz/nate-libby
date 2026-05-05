"use client";

import { useState } from "react";

type FormData = {
  drivingYears: string;
  driverType: string;
  retirementPlan: string;
  ageRange: string;
  name: string;
  phone: string;
  email: string;
};

const initialData: FormData = {
  drivingYears: "",
  driverType: "",
  retirementPlan: "",
  ageRange: "",
  name: "",
  phone: "",
  email: "",
};

const TOTAL_STEPS = 4;

function ProgressBar({ step }: { step: number }) {
  const pct = Math.round((step / TOTAL_STEPS) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>
          Step {step} of {TOTAL_STEPS}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-amber-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

type ChoiceButtonProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

function ChoiceButton({ label, selected, onClick }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors duration-150 ${
        selected
          ? "bg-[#0f1f3d] border-[#0f1f3d] text-white"
          : "bg-white border-gray-200 text-gray-800 hover:border-[#0f1f3d] hover:bg-blue-50"
      }`}
    >
      {label}
    </button>
  );
}

export default function QuizForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof FormData, value: string) =>
    setData((d) => ({ ...d, [key]: value }));

  const canAdvanceStep1 = data.drivingYears !== "" && data.driverType !== "";
  const canAdvanceStep2 = data.retirementPlan !== "";
  const canAdvanceStep3 = data.ageRange !== "";
  const canSubmit =
    data.name.trim() !== "" &&
    data.phone.trim() !== "" &&
    data.email.trim() !== "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) {
      setError("Please fill in all fields before submitting.");
      return;
    }
    // In production, wire this to an API route or form service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="qualifier" className="bg-[#0f1f3d] px-5 py-16 md:py-20">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-extrabold text-[#0f1f3d] mb-3">
            You&apos;re all set, {data.name.trim().split(" ")[0]}!
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Nate will reach out to you at{" "}
            <span className="font-semibold">{data.phone}</span> or{" "}
            <span className="font-semibold">{data.email}</span> within one
            business day. No pressure — just a straight conversation.
          </p>
          <p className="mt-6 text-xs text-gray-400 italic">
            This is not financial advice. Speak with a licensed professional.
            Results vary.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="qualifier" className="bg-[#0f1f3d] px-5 py-16 md:py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-2">
          See If This Makes Sense For You
        </h2>
        <p className="text-blue-200 text-center text-base mb-8">
          Four quick questions — takes less than a minute.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <ProgressBar step={step} />

          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold text-[#0f1f3d] mb-5">
                Tell us a little about your driving
              </h3>
              <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                How long have you been driving?
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Less than 2 years",
                  "2–5 years",
                  "5–10 years",
                  "10+ years",
                ].map((opt) => (
                  <ChoiceButton
                    key={opt}
                    label={opt}
                    selected={data.drivingYears === opt}
                    onClick={() => set("drivingYears", opt)}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                What best describes you?
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Owner-operator / independent",
                  "Company driver (W-2)",
                  "Lease-purchase driver",
                  "Small fleet owner",
                ].map((opt) => (
                  <ChoiceButton
                    key={opt}
                    label={opt}
                    selected={data.driverType === opt}
                    onClick={() => set("driverType", opt)}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={!canAdvanceStep1}
                onClick={() => setStep(2)}
                className="w-full bg-amber-400 hover:bg-amber-500 disabled:bg-gray-200 disabled:text-gray-400 text-gray-900 font-bold py-3 rounded-lg transition-colors duration-150"
              >
                Next →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-bold text-[#0f1f3d] mb-5">
                Your current financial picture
              </h3>
              <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                Do you have any retirement savings in place right now?
              </p>
              <div className="space-y-2 mb-8">
                {[
                  "Yes, I have a 401(k) or IRA",
                  "I have some savings but nothing formal",
                  "No retirement plan yet",
                  "Not sure where I stand",
                ].map((opt) => (
                  <ChoiceButton
                    key={opt}
                    label={opt}
                    selected={data.retirementPlan === opt}
                    onClick={() => set("retirementPlan", opt)}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium py-3 rounded-lg transition-colors duration-150"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  disabled={!canAdvanceStep2}
                  onClick={() => setStep(3)}
                  className="flex-1 bg-amber-400 hover:bg-amber-500 disabled:bg-gray-200 disabled:text-gray-400 text-gray-900 font-bold py-3 rounded-lg transition-colors duration-150"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-bold text-[#0f1f3d] mb-5">
                One more quick question
              </h3>
              <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                What&apos;s your age range?
              </p>
              <div className="space-y-2 mb-8">
                {[
                  "Under 30",
                  "30–39",
                  "40–49",
                  "50–59",
                  "60 or older",
                ].map((opt) => (
                  <ChoiceButton
                    key={opt}
                    label={opt}
                    selected={data.ageRange === opt}
                    onClick={() => set("ageRange", opt)}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium py-3 rounded-lg transition-colors duration-150"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  disabled={!canAdvanceStep3}
                  onClick={() => setStep(4)}
                  className="flex-1 bg-amber-400 hover:bg-amber-500 disabled:bg-gray-200 disabled:text-gray-400 text-gray-900 font-bold py-3 rounded-lg transition-colors duration-150"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-bold text-[#0f1f3d] mb-2">
                Where should Nate reach you?
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                No spam. Nate or his team will contact you directly — once.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={data.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="John Smith"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={data.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium py-3 rounded-lg transition-colors duration-150"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 rounded-lg transition-colors duration-150"
                >
                  Send My Info to Nate
                </button>
              </div>

              <p className="mt-4 text-xs text-gray-400 text-center italic">
                By submitting, you agree to be contacted by Nate Libby. Your
                information will not be sold or shared. This is not financial
                advice. Results vary.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
