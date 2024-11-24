import Link from "next/link";

interface Project {
  name: string;
  date: string;
  description: string[];
  stack: string[];
  repository: string;
  deployment?: string;
}

const projects: Project[] = [
  {
    name: "Fomo",
    date: "May 2024",
    description: [
      "Created a decentralized event management platform using NFTs on the Solana blockchain to ensure ticket immutability and prevent fraud.",
      "The platform also supports secondary ticket sales, providing commissions forresellers and event creators.",
    ],
    stack: ["Next.js", "Solana", "Metaplex", "MongoDB"],
    repository: "https://github.com/kevinpauljacob/fomo",
  },
  {
    name: "OpenKYC",
    date: "March 2024",
    description: [
      "Crafted the UI for an autonomous KYC system for banks, incorporating multi-language support and text-to-speech conversion for disabled users.",
      "Implemented image recognition for Aadhaar and PAN card verification, integrating with an ML model, and won first place at the Standard Chartered Hackathon.",
    ],
    stack: ["Next.js", "Python", "Flask", "MongoDB"],
    repository: "https://github.com/mkswagger/open-kyc",
  },
  {
    name: "Evault",
    date: "Sept 2023",
    description: [
      "Created a decentralized platform for storing legal records with user-specific access ensuring safety and record history transparency.",
      "Implemented IPFS for decentralized file storage, contributing to the Smart India Hackathon project.",
    ],
    stack: ["Next.js", "Express.js", "PostgreSQL", "IPFS"],
    repository: "https://github.com/kunalkeshan/evault-sih-2023",
  },
  {
    name: "Fueler.daily",
    date: "July 2023",
    description: [
      "Built a browser extension using web scraping to aggregate blogs and articles from the Fueler platform, presenting them in an easily accessible homepage format winning second place at the Spark July Hackathon.",
    ],
    stack: ["React.js", "Express.js", "Cheerio.js"],
    repository: "https://github.com/kunalkeshan/fueler.daily",
  },

  {
    name: "Ticker",
    date: "Jan 2023",
    description: [
      "Ticker is a personal task management application with an elegant ui and tons of features to optimize your workflow.",
    ],
    stack: [
      "Next.js",
      "Typescript",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    repository: "https://github.com/kevinpauljacob/ticker-backend",
    deployment: "https://ticker.kevinpaul.xyz",
  },

  {
    name: "Enigma",
    date: "Jan 2023",
    description: [
      "A one-time secret message link generator to share your secrets safely over the internet.",
    ],
    stack: ["React.js", "Vite", "Tailwind CSS", "Firebase", "Crypto.js"],
    repository: "https://github.com/kevinpauljacob/enigma",
    deployment: "https://enigma.kevinpaul.xyz",
  },
];
export default function Projects() {
  return (
    <div
      id="projects"
      className="group transition-all duration-300 ease-in-out"
    >
      <h2 className="text-lg font-medium group-hover:bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg px-3.5 py-2 mb-1">
        Projects
      </h2>
      <div className="flex flex-col gap-2 text-white/50 group-hover:text-white/75 transition-all duration-300 ease-in-out text-sm">
        {projects.map((project: Project, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-white/[0.025] rounded-lg p-3.5"
          >
            <div className="flex justify-between items-end">
              <h3 className="text-lg font-medium text-white/75 group-hover:text-white/90 transition-all duration-300 ease-in-out ">
                {project.name}
              </h3>
              <p className="text-sm">{project.date}</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {project.stack.map((stack, stackIndex) => (
                <span
                  key={stackIndex}
                  className="bg-white/[0.025] group-hover:text-white/75 transition-all duration-300 ease-in-out rounded-[4px] p-2"
                >
                  {stack}
                </span>
              ))}
            </div>
            <ul className="list-disc ml-4 space-y-1">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
            <div className="flex gap-2">
              {project.deployment && (
                <Link
                  href={project.deployment}
                  target="_blank"
                  className="w-1/2 border-2 border-white/5 bg-white/10 hover:bg-white/0 hover:border-white/10 transition-all duration-300 ease-in-out rounded-md text-sm text-center p-2"
                >
                  View Deployment
                </Link>
              )}
              <Link
                href={project.repository}
                target="_blank"
                className="w-1/2 flex-1 border-2 border-white/5 bg-white/10 hover:bg-white/0 hover:border-white/10 transition-all duration-300 ease-in-out rounded-md text-sm text-center p-2"
              >
                View Repository
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
