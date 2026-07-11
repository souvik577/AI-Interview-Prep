import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="group h-[360px] w-full rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
      <CardContent className="flex h-full flex-col p-8">

        <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
          <Icon className="h-8 w-8 text-cyan-400 transition-transform duration-300 group-hover:rotate-6" />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-5 flex-1 text-base leading-7 text-slate-400">
          {description}
        </p>

      </CardContent>
    </Card>
  );
};

export default FeatureCard;