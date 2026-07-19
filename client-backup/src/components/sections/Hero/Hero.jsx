import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";
import Container from "../../layout/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl md:h-[450px] md:w-[450px]" />
        <div className="absolute bottom-0 right-0 h-[200px] w-[200px] rounded-full bg-violet-500/10 blur-3xl md:right-10 md:h-[300px] md:w-[300px]" />
      </div>

      <Container>
        <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <HeroContent />
          <HeroPreview />
        </div>
      </Container>
    </section>
  );
};

export default Hero;