import Link from "next/link";
import { Link2 } from "lucide-react";

const highlightClass =
  "font-medium text-white/75 group-hover:text-white/90 transition-all duration-300 ease-in-out ";
export default function About() {
  return (
    <div id="about" className="group transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-medium group-hover:bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg px-3.5 py-2 mb-1">
        About
      </h2>
      <p className="flex flex-col gap-4 text-white/50 group-hover:text-white/60 text-sm bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg p-3.5">
        <span>
          I am a software developer with 3 years of experience in{" "}
          <i className={highlightClass}>full-stack development</i> and building{" "}
          <i className={highlightClass}>innovative Web3 solutions</i>. At Merkle
          Labs, I design and develop{" "}
          <i className={highlightClass}>robust products</i> on{" "}
          <i className={highlightClass}>Solana</i>, simplifying complex problems
          into <i className={highlightClass}>efficient</i> and{" "}
          <i className={highlightClass}>maintainable solutions</i>.
        </span>
        <span>
          I specialize in creating{" "}
          <i className={highlightClass}>complex, user-friendly UIs</i> and
          ensuring digital experiences are both{" "}
          <i className={highlightClass}>precise</i> and{" "}
          <i className={highlightClass}>scalable</i>. With a strong focus on{" "}
          <i className={highlightClass}>problem-solving</i>, I’ve delivered
          impactful products as a freelancer, always prioritizing client needs.
        </span>
        <span>
          Expanding my expertise into <i className={highlightClass}>AI</i> and{" "}
          <i className={highlightClass}>DevOps</i>, I’m driven by a passion for
          creating <i className={highlightClass}>cutting-edge products</i> and
          solving technical challenges with excellence.
        </span>
        <Link
          href={
            "https://drive.google.com/file/d/15M5DxQli7MeJw9enuzJxGy45toUm1E9I/view?usp=sharing"
          }
          target="_blank"
          className="flex items-center justify-center gap-2 w-full border-2 border-white/5 bg-white/10 hover:bg-white/0 hover:border-white/10 transition-all duration-300 ease-in-out rounded-md text-sm font-semibold text-white/50 group-hover:text-white/75 p-2"
        >
          <span>View Resume</span>
          <Link2 size={20} />
        </Link>
      </p>
    </div>
  );
}
