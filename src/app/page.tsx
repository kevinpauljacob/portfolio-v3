import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Endorsements from "@/components/Endorsements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col lg:flex-row gap-8 lg:gap-0 lg:w-[1024px] min-h-screen mx-auto px-5 py-10 lg:px-0 lg:py-0">
      <section className="lg:sticky lg:top-0 flex flex-col justify-between gap-8 lg:gap-0 lg:w-1/2 lg:h-screen lg:py-20">
        <Hero />
      </section>
      <section className="lg:w-1/2 min-h-screen space-y-8 lg:py-20 lg:mb-[60vh]">
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Endorsements />
        <Contact />
      </section>
    </main>
  );
}
