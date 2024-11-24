"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, AtSign } from "lucide-react";

interface Sections {
  name: string;
  href: string;
}
interface Socials {
  name: string;
  href: string;
  icon: JSX.Element;
}

export const sections: Sections[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Stack",
    href: "#stack",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Endorsements",
    href: "#endorsements",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const socials: Socials[] = [
  {
    name: "GitHub",
    href: "https://github.com/kevinpauljacob",
    icon: <Github />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kevinpauljacob",
    icon: <Linkedin />,
  },
  {
    name: "X",
    href: "https://x.com/kevinpauljacob",
    icon: <Twitter />,
  },
  {
    name: "Email",
    href: "mailto:kevinjacobdev@gmail.com",
    icon: <AtSign />,
  },
];

export default function Hero() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const findVisibleSection = () => {
      const windowHeight = window.innerHeight;
      let maxVisibility = 0;
      let mostVisibleSection = "about";

      sections.forEach((section) => {
        const element = document.querySelector(section.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visibility = Math.max(0, visibleHeight / element.clientHeight);

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = section.href.substring(1);
          }
        }
      });

      return mostVisibleSection;
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      } else {
        const mostVisibleSection = findVisibleSection();
        setActiveSection(mostVisibleSection);
      }
    };

    setActiveSection(findVisibleSection());

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-50px 0px -50px 0px",
      threshold: [0.2, 0.5, 0.8],
    });

    sections.forEach((section) => {
      const element = document.querySelector(section.href);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => {
        const element = document.querySelector(section.href);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      const offset = 70;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });

      setActiveSection(href.substring(1));
    }
  };

  return (
    <>
      <div className="group">
        <h1 className="text-4xl lg:text-5xl text-white font-extrabold">
          Kevin Paul Jacob
        </h1>
        <p className="text-lg font-medium mt-2.5 my-3.5">Software Developer</p>
        <p className="text-sm font-medium text-white/45 group-hover:text-white/75 transition-all duration-300 ease-in-out lg:max-w-[70%]">
          I view software development as craftsmanship, combining precision and
          creativity to build thoughtful and seamless digital experiences.
        </p>
      </div>
      <div className="hidden lg:flex flex-col gap-2 mb-10">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => handleScroll(section.href)}
            className={`text-sm text-start border-l-2 pl-2 py-1 rounded-r-md w-[82.5%] hover:bg-white/[0.025] transition-all duration-300 ease-in-out
              ${
                activeSection === section.href.substring(1)
                  ? "border-white text-white text-base bg-white/[0.025]"
                  : "border-white/50 text-white/50 hover:text-white/75"
              }`}
          >
            {section.name}
          </button>
        ))}
      </div>
      <div className="flex space-x-6">
        {socials.map((social: Socials, index: number) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            className="bg-white/30 text-[#1A1A1A] hover:bg-white/50 transition-all duration-300 ease-in-out rounded-full p-2"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </>
  );
}
