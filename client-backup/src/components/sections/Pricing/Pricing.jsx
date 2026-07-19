import Container from "../../layout/Container";
import PricingCard from "./PricingCard";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for beginners",
    features: [
      "3 AI Mock Interviews",
      "Basic Resume Analysis",
      "Interview Feedback",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹299",
    description: "Best for students",
    features: [
      "Unlimited Mock Interviews",
      "Advanced Resume Analysis",
      "AI Performance Analytics",
      "Interview History",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹599",
    description: "Everything included",
    features: [
      "Unlimited Everything",
      "Priority AI Responses",
      "Company-wise Questions",
      "Premium Dashboard",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-slate-950 py-16 sm:py-20 md:py-32 flex justify-center"
    >
        <div className="w-full max-w-6xl px-6">

            {/* Heading */}

            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.35em]">
                Pricing
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Choose Your Plan
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Start free today and upgrade anytime to unlock more AI-powered interview features.
              </p>
            </div>

            {/* Cards */}

            <div className="mx-auto mt-12 flex flex-col items-center gap-6 md:mt-20 md:flex-row md:justify-center md:gap-8">
              {plans.map((plan) => (
                <div key={plan.name} className="w-full max-w-sm">
                  <PricingCard {...plan} />
                </div>
              ))}
            </div>

        </div>
    </section>
  );
};

export default Pricing;