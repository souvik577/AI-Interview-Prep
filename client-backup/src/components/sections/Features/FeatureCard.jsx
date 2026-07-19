import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="group h-full min-h-[320px] rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
      <CardContent className="flex h-full flex-col p-6 sm:p-8">
        {/* Icon */}
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20 sm:h-16 sm:w-16">
          <Icon className="h-7 w-7 text-cyan-400 transition-transform duration-300 group-hover:rotate-6 sm:h-8 sm:w-8" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;