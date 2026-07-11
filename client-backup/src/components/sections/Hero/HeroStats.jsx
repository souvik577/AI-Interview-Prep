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
    <div className="mt-12 flex flex-wrap gap-10">

      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="text-3xl font-bold text-cyan-400">
            {item.value}
          </h2>

          <p className="mt-1 text-slate-400">
            {item.label}
          </p>
        </div>
      ))}

    </div>
  );
};

export default HeroStats;