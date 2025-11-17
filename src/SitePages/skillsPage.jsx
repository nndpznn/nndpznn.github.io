import "../css/masterStyle.css";

import pythonlogo from "../assets/languageImages/pythonlogo.png";
import jslogo from "../assets/languageImages/JSLogo.png"
import tslogo from "../assets/languageImages/TSLogo.png"
import swiftlogo from "../assets/languageImages/SwiftLogo.png"
import javalogo from "../assets/languageImages/javalogo.png"

export default function Skills() {
    const languagelogoclasses = "rounded-2xl mt-3 p-0"
    return (
        <div>
            <h1 className="font-bold">Languages</h1>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                <div className="">
                    <div className="flex justify-center gap-x-2">
                        <img className={languagelogoclasses} src={pythonlogo} height="100" width="100" />
                    </div>
                    
                    <p className="mt-4 text-2xl"><strong>Python</strong> is the language I have known for the longest, and the one I'm the most comfortable programming in for algorithmic work(LeetCode problems, beware!). I've made use of it to develop a neural-network recommender system in <strong>Pytorch</strong> and tackle complicated paradigms like <strong>dynamic programming and constraint satisfaction</strong>(using hillclimbing and simulated annealing).</p>
                </div>
                
                <div className="">
                    <div className="flex justify-center gap-x-2">
                        <img className={languagelogoclasses} src={jslogo} height="100" width="100" />
                        <img className={languagelogoclasses} src={tslogo} height="100" width="100" />
                    </div>
                    <p className="mt-4 text-2xl"><strong>JS/TS</strong> is my new favorite, and my go-to for web dev work. I'm always impressed by its versatility and the giant ecosystem of open-source libraries that are just a click away. I've spent time in with <strong>React/Next.js</strong> and <strong>Svelte/Sveltekit</strong> frontend stacks. I've also gotten to use it in creating a custom 3D graphics library with <strong>ThreeJS</strong>, and setting up a Discord bot using <strong>Discord.js</strong>.</p>
                </div>

                <div className="">
                    <div className="flex justify-center gap-x-2">
                        <img className={languagelogoclasses} src={javalogo} height="100" width="100" />
                    </div>
                    <p className="mt-4 text-2xl"><strong>Java</strong> is my most recently practiced language. At AWS, I used it heavily to develop an LLM-powered CloudWatch agent designed to dive into diagnostic logs and perform root cause analysis. I worked with <strong>LangChain</strong> and <strong>Lambda</strong> to accomplish this.</p>
                </div>

                <div className="">
                    <div className="flex justify-center gap-x-2">
                        <img className={languagelogoclasses} src={swiftlogo} height="100" width="100" />
                    </div>
                    <p className="mt-4 text-2xl"><strong>Swift</strong> was a language I picked up while taking a mobile development practicum course. I was attracted to the simplicity and approachable learning curve of <strong>SwiftUI</strong>, which helped a lot when learning how to organize my own full-stack mobile applications with <strong>Firebase</strong>. </p>
                </div>

            </div>

        </div>
    )
}