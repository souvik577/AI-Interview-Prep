import Container from "../../layout/Container";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Is AIPrep free to use?",
    answer:
      "Yes. You can start with the free plan and upgrade anytime for more advanced AI features.",
  },
  {
    question: "Can I upload my own resume?",
    answer:
      "Absolutely. Our AI analyzes your resume, calculates an ATS score, and suggests improvements.",
  },
  {
    question: "Does AIPrep support technical interviews?",
    answer:
      "Yes. Practice DSA, Web Development, HR, and other technical interviews with AI-generated questions.",
  },
  {
    question: "Will I receive feedback after every interview?",
    answer:
      "Yes. Every mock interview includes detailed AI feedback, strengths, weaknesses, and improvement suggestions.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-slate-950 py-32 flex justify-center"
    >
      <div className="w-full max-w-6xl px-6">

        {/* Heading */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            FAQ
          </p>

          <h2 className="max-w-3xl text-5xl font-bold leading-tight text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Everything you need to know before getting started.
          </p>

        </div>

        {/* FAQ Items */}
        <div className="mx-auto mt-20 flex w-full justify-center">
            <div className="w-full max-w-4xl space-y-10">
                {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    {...faq}
                />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;