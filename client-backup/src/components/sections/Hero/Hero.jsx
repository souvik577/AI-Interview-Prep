import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";
import Container from "../../layout/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-8 pb-10">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid min-h-screen grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <HeroContent />
          <HeroPreview />
        </div>
      </Container>

    </section>
  );
};

export default Hero;