import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 md:py-32 flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="w-full max-w-6xl px-6">
        <div className="mx-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10 md:p-16 text-center backdrop-blur-xl">

          {/* Heading */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            GET STARTED
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Ace Your
            <br className="hidden sm:block" />
            <span className="block sm:inline">Next Interview?</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mt-6 flex justify-center">
            <p className="max-w-xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Join thousands of students preparing with AI-powered mock
              interviews, resume analysis, and personalized feedback.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-6">

            <Button className="h-12 w-full sm:w-auto rounded-xl bg-cyan-500 px-8 text-base font-semibold text-slate-950 hover:bg-cyan-400">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="h-12 w-full sm:w-auto rounded-xl border-slate-700 bg-transparent px-8 text-base text-white hover:bg-slate-800"
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