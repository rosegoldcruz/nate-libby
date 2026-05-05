import Hero from "@/components/Hero";
import WhyPlan from "@/components/WhyPlan";
import IULExplainer from "@/components/IULExplainer";
import WhyNate from "@/components/WhyNate";
import QuizForm from "@/components/QuizForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <WhyPlan />
      <IULExplainer />
      <WhyNate />
      <QuizForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
