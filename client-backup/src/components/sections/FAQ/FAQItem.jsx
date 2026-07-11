import { useState } from "react";
import { Plus } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
    >

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-8 text-left"
      >
        <h3 className="text-xl font-semibold text-white">
          {question}
        </h3>

        <Plus
            className={`h-6 w-6 text-cyan-400 transition-transform duration-300 ${
                open ? "rotate-45" : ""
            }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
            open ? "max-h-96 mt-4 px-8 pb-8" : "max-h-0"
        }`}
        >
        <p className="leading-7 text-slate-400">
          {answer}
        </p>
      </div>

    </div>
  );
};

export default FAQItem;