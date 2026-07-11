import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, company, review }) => {
  return (
    <Card className="w-[350px] rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
      <CardContent className="p-8">

        {/* Stars */}
        <div className="mb-6 flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="h-5 w-5 fill-cyan-400 text-cyan-400"
            />
          ))}
        </div>

        {/* Review */}
        <p className="text-base leading-7 text-slate-300">
          "{review}"
        </p>

        {/* User */}
        <div className="mt-8 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-white">
            {name.charAt(0)}
          </div>

          <div>
            <h4 className="font-semibold text-white">
              {name}
            </h4>

            <p className="text-sm text-slate-400">
              {role} • {company}
            </p>
          </div>

        </div>

      </CardContent>
    </Card>
  );
};

export default TestimonialCard;