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
    className="bg-slate-950 py-32 flex justify-center"
    >
        <div className="w-full max-w-6xl px-6">

            {/* Heading */}

            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.35em]">
                Pricing
                </p>

                <h2 className="mt-5 text-5xl font-bold text-white">
                Choose Your Plan
                </h2>

                <p className="mt-6 text-lg text-slate-400">
                Start free today and upgrade anytime to unlock
                more AI-powered interview features.
                </p>
            
            </div>

            {/* Cards */}

            <div className="mx-auto mt-20 flex justify-center gap-8">

            {plans.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
            ))}

            </div>

        </div>
    </section>
  );
};

export default Pricing;