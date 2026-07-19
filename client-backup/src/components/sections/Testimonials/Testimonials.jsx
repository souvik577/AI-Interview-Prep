import Container from "../../layout/Container";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "TCS",
    review:
      "The AI mock interviews felt surprisingly realistic. They helped me improve my confidence before my placement interviews.",
  },
  {
    name: "Priya Singh",
    role: "Frontend Developer",
    company: "Infosys",
    review:
      "The resume analyzer highlighted ATS issues I never noticed. My resume became much stronger after using it.",
  },
  {
    name: "Aman Verma",
    role: "SDE Intern",
    company: "Accenture",
    review:
      "Performance analytics helped me identify weak areas and improve after every mock interview.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-slate-950 py-16 sm:py-20 md:py-32 flex justify-center"
    >
        <div className="w-full max-w-6xl px-6">

            {/* Heading */}
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                TESTIMONIALS
              </p>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Thousands of students are improving their interview skills with AI.
              </p>
            </div>

            {/* Cards */}
            <div className="mx-auto mt-12 flex flex-col items-center gap-6 md:mt-20 md:flex-row md:justify-center md:gap-8">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="w-full max-w-sm md:w-[340px] md:flex-shrink-0"
                >
                  <TestimonialCard {...item} />
                </div>
              ))}
            </div>

        </div>
    </section>
  );
};

export default Testimonials;