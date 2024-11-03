import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";

import vidocDemo1 from "../assets/demoImages/vidocDemo1.png"
import vidocDemo2 from "../assets/demoImages/vidocDemo2.png"
import spaceNewsDemo from "../assets/demoImages/spaceNewsDemo.png"

export default function CompSci() {
  return (
    <div>
      <NolnHeader headerTitle="Projects"></NolnHeader>

      <p className="textcenter">Click the headers below to go to their respective repositories!</p>

      <div className="vidoc">
        <NolnButton to="https://github.com/nndpznn/viDoc" target="_blank" buttonTitle="viDoc: Video Planning and Brainstorming"></NolnButton>

        <div className="sidebyside">
          <img className="roundedimage width50" src={vidocDemo1}></img>
          <img className="roundedimage width50" src={vidocDemo2}></img>
        </div>
    
        <p className="blurb"><strong>viDoc</strong> is a *work-in-progress* web app putting amateur videographers first. It's designed to streamline the creative process for content creators, providing space to take notes, compose shotlists, and organize ideas visually on a graphic timeline. Thank you to the LMU Keck Lab manager, <strong><a href="https://github.com/masaok" target="_blank">Masao Kitamura</a></strong> for his guidance in setting up the database and libraries! <br></br><br></br> I'm making use of React with TypeScript, Next.js, Supabase and MaterialUI to put this together. </p>
      </div>

      <div className="spacenews">
        <NolnButton to="https://github.com/nndpznn/SpaceNewsClone" target="_blank" buttonTitle="SpaceNews: Your Starside Informant"></NolnButton>

          <img className="roundedimage demoimage" src={spaceNewsDemo}></img>

        <p className="blurb"><strong>SpaceNews</strong> aims to provide a smooth, weightless browsing experience with the latest updates on rocket launches, orbital events, and more, from a plethora of reliable sources, including the International Space Station report feed itself. While you scroll through our curated newsfeed to your hearts' content, enjoy the appropriately-themed UI and fully-animated background — it's like you're really there! <br></br><br></br> This app was assembled using Swift and SwiftUI, and accesses the Spaceflight News API.</p>

      </div>
    
      <div className="ftm">
        <NolnButton to="https://github.com/nndpznn/FreeThrowMerchant" target="_blank" buttonTitle="FreeThrowMerchant"></NolnButton>

        <p className="blurb"><strong>FreeThrowMerchant</strong> is a Discord bot meant to provide easy access to NBA information, by accessing sports databases, interpreting its output, and presenting the information in a digestible format. Users can search for player averages, game scores and status, and will eventually be able to see live game information with player stats. <br></br><br></br> FTM is powered by Discord.js, the BALLDONTLIE API, and the NPM cron library.</p>     
      </div>
    
      
    </div>
  );
}
