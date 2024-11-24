import React from "react";

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

const experience: Experience[] = [
  {
    company: "Merkle Labs",
    position: "Software Developer",
    duration: "Jan 2024 - Present",
    description: [
      "Led the development of a Web3 casino platform, designing UIs for five games, integrating backend APIs, facilitating transactions on the Solana blockchain, and creating a referral system with commission features.",
      "Achieved a successful launch with 200+ users and 20,000+ SOL volume in the first week.",
      "Led the development of a Fantasy Crypto Trading Platform, integrating smart contracts to fetch, display, and enable live contest participation and trades.",
      "Implemented TradingView charts for real-time coin prices, designed authentication flows, developed WebSocket-based live trade notifications, and enhanced the UI for a seamless experience. Earned an Honorable Mention in the Light Protocol track at the Colosseum Radar Hackathon 2024.",
    ],
  },
  {
    company: "Fundinc",
    position: "Full Stack Developer Intern",
    duration: "July 2023 - October 2023",
    description: [
      "Engineered a B2B SaaS platform for VCs to manage deal flow, incorporating Kanbans, Dashboards, and Task Delegation, with seamless Google Meet and Drive integration.",
      "Contributed to securing three clients and the acquisition of Fundinc through Done Deal (Company).",
    ],
  },
  {
    company: "Codelance Devs",
    position: "Full Stack Developer Intern",
    duration: "Feb 2023 - April 2023",
    description: [
      "Developed a supermarket store platform with a responsive frontend using React and Tailwind CSS.",
      "Implemented features for product display, cart management, and checkout processes, ensuring a seamless shopping experience with intuitive UI and efficient functionality.",
    ],
  },
  // {
  //   company: "Blackwins",
  //   position: "Freelance Software Developer",
  //   duration: "Oct 2024",
  //   description:
  //     ["Developed a web application for tracking and managing investments in startups, using React, Node.js, and MongoDB.",]
  // },
];
export default function Experience() {
  return (
    <div
      id="experience"
      className="group transition-all duration-300 ease-in-out"
    >
      <h2 className="text-lg font-medium group-hover:bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg px-3.5 py-2 mb-1">
        Experience
      </h2>
      <div className="flex flex-col gap-2 text-white/50 group-hover:text-white/75 transition-all duration-300 ease-in-out text-sm">
        {experience.map((exp: Experience, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-1 bg-white/[0.025] rounded-lg p-3.5"
          >
            <h3 className="text-lg font-medium text-white/75 group-hover:text-white/90 transition-all duration-300 ease-in-out ">
              {exp.company}
            </h3>
            <div className="flex justify-between gap-2 mb-2">
              <p className="text-sm">{exp.position}</p>
              <p className="text-sm">{exp.duration}</p>
            </div>
            <ul className="list-disc ml-4 space-y-1">
              {exp.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
