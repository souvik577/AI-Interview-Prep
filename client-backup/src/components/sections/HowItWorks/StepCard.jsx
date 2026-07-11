import { Card, CardContent } from "@/components/ui/card";

const StepCard = ({ icon: Icon, step, title, description }) => {
  return (
    <Card className="group h-[350px] rounded-3xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]">
      <CardContent className="flex h-full flex-col p-8">

        {/* Icon */}
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 transition-all duration-300 group-hover:bg-cyan-500/20">
          <Icon className="h-8 w-8 text-cyan-400" />
        </div>

        {/* Step */}
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
          Step {step}
        </p>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-bold leading-tight text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-5 text-base leading-8 text-slate-400">
          {description}
        </p>

      </CardContent>
    </Card>
  );
};

export default StepCard;