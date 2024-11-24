import Image from "next/image";

interface Stack {
  name: string;
  icon: string;
}

const techStack: Stack[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Solana", icon: "solana" },
  { name: "Anchor", icon: "anchor" },
  { name: "Rust", icon: "rust" },
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Node.js", icon: "nodejs" },
  { name: "PostgreSQl", icon: "postgresql" },
  { name: "Prisma", icon: "prisma" },
  { name: "Python", icon: "python" },
  { name: "C++", icon: "cpp" },
  { name: "Kubernetes", icon: "kubernetes" },
  // { name: "Kafka", icon: "kafka" },
];

export default function Stack() {
  return (
    <div id="stack" className="group transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-medium group-hover:bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg px-3.5 py-2 mb-1">
        Daily Stack
      </h2>
      <div className="flex flex-wrap gap-1 text-white/50 text-sm rounded-lg">
        {techStack.map((stack: Stack, index: number) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-white/[0.025] group-hover:text-white/75 transition-all duration-300 ease-in-out rounded-[4px] p-2"
          >
            <Image
              src={`/assets/${stack.icon}.svg`}
              alt={stack.name}
              width={20}
              height={20}
            />
            <span>{stack.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
