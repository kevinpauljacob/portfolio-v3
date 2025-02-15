import Image from "next/image";

interface Endorsement {
  name: string;
  position: string;
  company: string;
  message: string;
  linkedInURL: string;
  image: string;
}

const endorsements: Endorsement[] = [
  {
    name: "Arushi Gandhi",
    company: "Fundinc",
    position: "CEO & Co-Founder",
    message:
      "Kevin's been a standout full stack developer at Fundinc, mastering next.js, firebase, and seamlessly integrating complex APIs. He's not only timely with his impeccable work but also a great team player. Plus, his sense of humour adds a lively spark to our workspace. If you need a skilled and fun colleague, Kevin it is! 👨‍💻🚀😄",
    linkedInURL: "https://www.linkedin.com/in/kevinpauljacob",
    image: "/assets/arushi.jpeg",
  },
  {
    name: "Kunal Keshan",
    company: "Codelance Devs",
    position: "CEO & Co-Founder",
    message:
      "Kevin is not only a talented web developer, but he is also a pleasure to work with. He has great humour and is always up for a stimulating conversation. He approaches his work with diligence and attention to detail and is never satisfied with anything less than his best effort. Kevin is a valuable asset to any team, and I recommend him without reservation.",
    linkedInURL: "https://www.linkedin.com/in/kevinpauljacob",
    image: "/assets/kunal.jpeg",
  },
];

export default function Endorsements() {
  return (
    <div
      id="endorsements"
      className="group transition-all duration-300 ease-in-out"
    >
      <h2 className="text-lg font-medium group-hover:bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg px-3.5 py-2 mb-1">
        Endorsements
      </h2>
      <div className="flex flex-col gap-2 text-white/50 group-hover:text-white/75 transition-all duration-300 ease-in-out text-sm">
        {endorsements.map((endorsement: Endorsement, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-white/[0.025] rounded-lg p-3.5"
          >
            <div className="flex items-center gap-4">
              <Image
                src={endorsement.image}
                alt={endorsement.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-lg font-medium text-white/75 group-hover:text-white/90 transition-all duration-300 ease-in-out ">
                  {endorsement.name}
                </p>
                <p className="text-sm">
                  {endorsement.position} @ {endorsement.company}
                </p>
              </div>
            </div>
            <p className="text-sm italic">{`"${endorsement.message}"`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
