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
    className="bg-slate-950 py-32 flex justify-center"
    >
        <div className="w-full max-w-6xl px-6">

            {/* Heading */}
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                TESTIMONIALS
            </p>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight text-white">
                What Our Users Say
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                Thousands of students are improving their interview skills with AI.
            </p>

            </div>

            {/* Cards */}
            <div className="mx-auto mt-20 flex justify-center gap-8">

            {testimonials.map((item) => (
                <div
                key={item.name}
                className="w-[340px] flex-shrink-0"
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