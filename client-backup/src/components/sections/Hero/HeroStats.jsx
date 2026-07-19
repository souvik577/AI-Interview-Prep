const stats = [
  {
    value: "10K+",
    label: "Students",
  },
  {
    value: "95%",
    label: "Success Rate",
  },
  {
    value: "50K+",
    label: "Mock Interviews",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900"
        >
          <h2 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
            {item.value}
          </h2>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;