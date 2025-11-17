import "../css/masterStyle.css";

import ProjectCard from "../UIComponents/projectCard";

import vidocDemo1 from "../assets/demoImages/vidocDemo1.png"
import vidocDemo2 from "../assets/demoImages/vidocDemo2.png"
import spaceNewsDemo from "../assets/demoImages/spaceNewsDemo.png"
import awsinterns2025 from "../assets/demoImages/awsinterns2025.jpg"
import ftmdemo2 from "../assets/demoImages/ftmdemo2.png"
import blipdemo1 from "../assets/demoImages/blipdemo1.png"
import blipdemo2 from "../assets/demoImages/blipdemo2.png"

import nolanCrouching from "../assets/nolancrouching.JPG"

export default function CompSci() {
const projects = [
  {
    id: 'aws',
    title: "Summer 2025: Amazon Web Services",
    date: "May 2025 - August 2025",
    desc: "I was a Software Development Engineer intern at AWS this past summer. My project was to build a new CloudWatch diagnostic tool, which was an LLM-powered agent designed to analyze CloudWatch Logs and perform root-cause analysis for human developers. By the end of my time there it was in a deployable state to the Gamma stage.",
    link: "https://www.linkedin.com/posts/nolandelapaznguyen_last-friday-i-concluded-my-12-week-stint-activity-7363735913316679680-1G2i?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZObhUBoxlVgl-FTqPVN1kZw_6ru0QwJI",
    image: awsinterns2025,
    stack: "Stack: Java, LangChain, AWS CloudWatch & AWS Lambda.",
  },
  {
    id: 'blip',
    title: "[WIP] blip: find your next car meet",
    date: "February 2025 - Ongoing",
    desc: "blip targets carspotters who are accustomed to scouring countless social pages, forums, and communities looking for the next enthusiast get-together. use the map to find your next event, or create a profile and start organizing your own!",
    link: "https://github.com/nndpznn/blip",
    image: blipdemo2,
    stack: "Stack: React/TypeScript, Next.js, Supabase, Mapbox and HeroUI. Set to deploy on Vercel.",
  },
  {
    id: 'vidoc',
    title: "viDoc: Video Planning and Brainstorming",
    date: "May 2024 - Hiatus",
    desc: "viDoc is a web app putting amateur videographers first. It's designed to streamline the creative process for content creators, providing space to take notes, compose shotlists, and organize ideas visually on a graphic timeline.",
    link: "https://github.com/nndpznn/viDoc",
    image: vidocDemo1,
    stack: "Stack: React/TypeScript, Next.js, Supabase and MaterialUI. Deployed on Vercel.",
  },
  {
    id: 'spacenews',
    title: "SpaceNews: Your Starside Informant",
    date: "January 2024 - February 2024",
    desc: "SpaceNews aims to provide a smooth, weightless browsing experience with the latest updates on rocket launches, orbital events, and more. Stack: Swift and SwiftUI, Spaceflight News API.",
    link: "https://github.com/nndpznn/SpaceNews",
    image: spaceNewsDemo,
    stack: "Stack: Swift and SwiftUI, Spaceflight News API.",
  },
  {
    id: 'ftm',
    title: "FreeThrowMerchant",
    date: "February 2024 - Hiatus",
    desc: "FreeThrowMerchant is a Discord bot meant to provide easy access to NBA information, by accessing sports databases, interpreting its output, and presenting the information in a digestible format.",
    link: "https://github.com/nndpznn/FreeThrowMerchant",
    image: ftmdemo2,
    stack: "Stack: Discord.js, BALLDONTLIE API, NPM cron library. Deployed on Railway.",
  },
  {
    id: 'andmore',
    title: "And much more...",
    date: "See github.com/nndpznn, click the header!",
    desc: "Find additional projects, ideas, and work on my Github, and see even more of me at any of the links below :) Please give me a shout if you'd like to chat about what I can offer.",
    link: "https://github.com/nndpznn",
    image: nolanCrouching,
    stack: "Stack: My laptop, a comfy chair, a pair of headphones and an iced flat white.",
  },
];

  return (
    <div>
      <h1 className="font-bold">Experience & Projects</h1>

      <p className="text-3xl mb-5">Click the headers to see relevant resources.</p>

      {/* ⬅️ Apply Grid Classes Here ⬅️ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project} // Pass the entire project object as a prop
          />
        ))}

      </div>

    </div>
  );
}
