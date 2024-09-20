import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";

import notfoundPlaceholder from "../assets/anyonehome.jpg";
import pythonlogo from "../assets/pythonlogo.png";
import jslogo from "../assets/JSLogo.png"
import swiftlogo from "../assets/SwiftLogo.png"

import reactlogo from "../assets/reactlogo.png"
import threejslogo from "../assets/threejslogo.png"
import nextjslogo from "../assets/nextjslogo.png"
import discordbotslogo from "../assets/discordbots.svg"

export default function CompSci() {
  return (
    <div>
      <NolnHeader headerTitle="Computer Science Projects"></NolnHeader>
      {/* <img
        src={notfoundPlaceholder}
        className="elementcenter width75 roundedimage"
        alt="not found placeholder"
      />
      <br></br>
      <p className="textcenter">
        Pardon the dust - I'm still figuring out the format I want to use for
        displaying my projects. For now, take a look at my GitHub profile.
      </p>

      <br></br>

      <NolnButton
        className="elementcenter"
        to="https://github.com/nndpznn"
        target="_blank"
        buttonTitle="nndpznn on GitHub"
      ></NolnButton> */}
      <p className="textcenter">Click the project headers below to go to their respective repositories!</p>

      <br></br>
      <NolnButton className="elementcenter" to="https://github.com/nndpznn/viDoc" target="_blank" buttonTitle="viDoc"></NolnButton>

      <p className="blurb"><strong>viDoc</strong> is a *work-in-progress* web app designed to streamline the creative process for video content creators, providing space to take notes, compose shotlists, and organize ideas visually on a graphic timeline. I'm making use of React with TypeScript, Next.js, Supabase and MaterialUI to put this together. Thank you to the LMU Keck Lab manager, <strong><a href="https://github.com/masaok" target="_blank">Masao Kitamura</a></strong> for his guidance in setting up the database and libraries!</p>

      <NolnButton className="elementcenter" to="https://github.com/nndpznn/FreeThrowMerchant" target="_blank" buttonTitle="FreeThrowMerchant"></NolnButton>

      <p className="blurb"><strong>FreeThrowMerchant</strong> is a Discord bot meant to provide easy access to NBA information, by accessing sports databases, interpreting its output, and presenting the information in a digestible format. Users can search for player averages, game scores and status, and will eventually be able to see live game information with player stats. FTM is powered by Discord.js, the BALLDONTLIE API, and the NPM cron library.</p>

      <NolnHeader headerTitle="Languages"></NolnHeader>

      <img className="languagelogo" src={pythonlogo} height="125" width="125" />
      <p className="blurb"><strong>Python</strong> is the language I have known for the longest. Starting from Hour of Code days and programming minigames in school, and through Data Structures and Algorithms, I've made use of it to develop basic search algorithms <strong>(BFS, DFS, A*)</strong>, and to tackle more complicated paradigms including <strong>minimax/alpha-beta pruning, dynamic programming and constraint satisfaction</strong>(using hillclimbing and simulated annealing).</p>

      <ul className="centerhorizontallist">
        <li><img className="languagelogo" src={reactlogo} height="100" width="100" /></li>
        <li><img className="languagelogo" src={nextjslogo} height="100" width="100" /></li>
        <li><img className="languagelogo" src={jslogo} height="125" width="125" /></li>
        <li><img className="languagelogo" src={threejslogo} height="100" width="100" /></li>
        <li><img className="languagelogo" src={discordbotslogo} height="100" width="100" /></li>
      </ul>

      <p className="blurb"><strong>JavaScript</strong> is a new favorite of mine; I'm always impressed by its versatility and the giant ecosystem of open-source libraries that are just a click away. I've gotten to use it in a number of different situations, including creating a custom 3D graphics library with <strong>ThreeJS</strong>, setting up a Discord bot using <strong>Discord.js</strong>, and now developing my own web app using <strong>TypeScript, React & Next.js</strong>.</p>

      <img className="languagelogo" src={swiftlogo} height="125" width="125" />
      <p className="blurb"><strong>Swift</strong> was a language I picked up last semester while taking a mobile development practicum course. I was attracted to its simplicity and approachable learning curve, which helped a lot when learning how to organize my own full-stack mobile applications with <strong>Firebase</strong>. </p>
        

      <hr></hr>
      <br></br>
      <br></br>

    </div>
  );
}
