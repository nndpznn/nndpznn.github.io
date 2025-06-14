import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";

import pythonlogo from "../assets/languageImages/pythonlogo.png";
import jslogo from "../assets/languageImages/JSLogo.png"
import swiftlogo from "../assets/languageImages/SwiftLogo.png"

import reactlogo from "../assets/languageImages/reactlogo.png"
import threejslogo from "../assets/languageImages/threejslogo.png"
import nextjslogo from "../assets/languageImages/nextjslogo.png"
import discordbotslogo from "../assets/languageImages/discordbots.svg"

export default function Skills() {
    return (
        <div>

            <div className="languages-container">
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
            </div>

        <hr></hr>

        </div>
    )
}