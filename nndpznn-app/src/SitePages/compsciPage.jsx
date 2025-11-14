import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";
import ProjectCard from "../UIComponents/projectCard";

import vidocDemo1 from "../assets/demoImages/vidocDemo1.png"
import vidocDemo2 from "../assets/demoImages/vidocDemo2.png"
import spaceNewsDemo from "../assets/demoImages/spaceNewsDemo.png"

export default function CompSci() {
  const divClasses = "bg-gray-800 p-4 rounded-3xl"

  return (
    <div>
      <NolnHeader headerTitle="Experience & Projects"></NolnHeader>

      <p className="text-3xl mb-5">Click the headers to see relevant resources.</p>

      <div className="divSoup">

        {/* <ProjectCard className="" title="viDoc: Video Planning and Brainstorming" desc=""></ProjectCard> */}
        <div id="aws" className={divClasses}>
          <NolnButton to="https://www.linkedin.com/posts/nolandelapaznguyen_last-friday-i-concluded-my-12-week-stint-activity-7363735913316679680-1G2i?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZObhUBoxlVgl-FTqPVN1kZw_6ruq0QwJI" target="_blank" buttonTitle="Summer 2025: Amazon Web Services" ></NolnButton>

          <div className="">
            {/* <img className="roundedimage width50" src={vidocDemo1}></img>
            <img className="roundedimage width50" src={vidocDemo2}></img> */}
          </div>
      
          <p className="text-2xl mx-5">I was a Software Development Engineer intern at AWS this past summer. My project was to build a new CloudWatch diagnostic tool, which was an LLM-powered agent designed to analyze CloudWatch Logs and perform root-cause analysis for human developers. I began with a proof of concept and throughout the course of the internship I improved its precision and accuracy in determining the root cause as well as its latency. By the end of my time there it was in a deployable state to the Gamma stage.
          <br></br><br></br>
          My time here has been the most I've been challenged as an engineer and employee so far. Having to take ownership of a software component end-to-end and defend my design decisions in front of senior engineers was a new challenge for me and required me to be at the top of my game and become the subject matter expert on my project. <br></br><br></br> Technologies used: Java, LangChain4j, AWS CloudWatch & Lambda.</p>
        </div>

        <hr></hr>

        <div id="vidoc" className={divClasses}>
          <NolnButton to="https://github.com/nndpznn/viDoc" target="_blank" buttonTitle="viDoc: Video Planning and Brainstorming"></NolnButton>

          <div className="flex justify-center my-5">
            <img className="rounded-[20px] w-[45%] mx-[8px]" src={vidocDemo1}></img>
            <img className="rounded-[20px] w-[45%] mx-[8px]" src={vidocDemo2}></img>
          </div>
      
          <p className="text-2xl mx-5"><strong>viDoc</strong> is a web app putting amateur videographers first. It's designed to streamline the creative process for content creators, providing space to take notes, compose shotlists, and organize ideas visually on a graphic timeline. Thank you to the LMU Keck Lab manager, <strong><a href="https://github.com/masaok" target="_blank">Masao Kitamura</a></strong> for his guidance in setting up the database and libraries! <br></br><br></br> Stack: React with TypeScript, Next.js, Supabase and MaterialUI. Deployed on Vercel.</p>
        </div>

        <hr></hr>

        <div id="spacenews" className={divClasses}>
          <NolnButton to="https://github.com/nndpznn/SpaceNews" target="_blank" buttonTitle="SpaceNews: Your Starside Informant"></NolnButton>
          <br></br>

          <div className="flex justify-center my-5">
            <img className="rounded-[20px] w-[85vh]" src={spaceNewsDemo}></img>
          </div>

          <p className="text-2xl mx-5"><strong>SpaceNews</strong> aims to provide a smooth, weightless browsing experience with the latest updates on rocket launches, orbital events, and more, from a plethora of reliable sources, including the International Space Station report feed itself. While you scroll through our curated newsfeed to your hearts' content, enjoy the appropriately-themed UI and fully-animated background — it's like you're really there! <br></br><br></br> Stack: Swift and SwiftUI, Spaceflight News API.</p>

        </div>

        <hr></hr>
      
        <div id="ftm" className={divClasses}>
          <NolnButton to="https://github.com/nndpznn/FreeThrowMerchant" target="_blank" buttonTitle="FreeThrowMerchant"></NolnButton>

          <p className="text-2xl mx-5"><strong>FreeThrowMerchant</strong> is a Discord bot meant to provide easy access to NBA information, by accessing sports databases, interpreting its output, and presenting the information in a digestible format. Users can search for player averages, game scores and status, and will eventually be able to see live game information with player stats. <br></br><br></br> Stack: Discord.js, BALLDONTLIE API, NPM cron library. Deployed on Railway.</p>     
        </div>

      </div>

    </div>
  );
}
