import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative bg-slate-950 py-32 flex justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="w-full max-w-6xl px-6">
        <div className="mx-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-16 text-center backdrop-blur-xl">

          {/* Heading */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            GET STARTED
          </p>

          <h2 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            Ready to Ace Your
            <br />
            Next Interview?
          </h2>

          <div className="mx-auto mt-8 flex justify-center">
            <p className="max-w-xl text-center text-lg leading-8 text-slate-400">
                Join thousands of students preparing with AI-powered mock
                interviews, resume analysis, and personalized feedback.
            </p>
            </div>
          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Button className="h-12 rounded-xl bg-cyan-500 px-8 text-base font-semibold text-slate-950 hover:bg-cyan-400">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="h-12 rounded-xl border-slate-700 bg-transparent px-8 text-base text-white hover:bg-slate-800"
            >
              Watch Demo
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;