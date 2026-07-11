import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingCard = ({
  name,
  price,
  description,
  features,
  popular,
}) => {
  return (
    <Card
      className={`relative w-[350px] rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
        popular
          ? "border-cyan-500 bg-slate-900 shadow-[0_0_40px_rgba(6,182,212,.15)]"
          : "border-slate-800 bg-slate-900/60"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white">
          Most Popular
        </div>
      )}

      <CardContent className="flex h-full flex-col p-8">

        <h3 className="text-3xl font-bold text-white">
          {name}
        </h3>

        <p className="mt-2 text-slate-400">
          {description}
        </p>

        <div className="mt-8">
          <span className="text-5xl font-bold text-white">
            {price}
          </span>

          {price !== "₹0" && (
            <span className="text-slate-400">
              /month
            </span>
          )}
        </div>

        <div className="mt-10 space-y-4 flex-1">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <Check className="h-5 w-5 text-cyan-400" />

              <span className="text-slate-300">
                {feature}
              </span>

            </div>
          ))}

        </div>

        <Button className="mt-10 h-12 w-full rounded-xl bg-cyan-500 hover:bg-cyan-400">
          Get Started
        </Button>

      </CardContent>
    </Card>
  );
};

export default PricingCard;