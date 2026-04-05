import { useState } from "react";
import "../css/masterStyle.css";

import pythonlogo from "../assets/languageImages/pythonlogo.png";
import jslogo from "../assets/languageImages/JSLogo.png";
import tslogo from "../assets/languageImages/TSLogo.png";
import swiftlogo from "../assets/languageImages/SwiftLogo.png";
import javalogo from "../assets/languageImages/javalogo.png";

const BLURBS = {
    python: (
        <p className="text-2xl">
            <strong>Python</strong> is the language I have known for the longest, and the one I&apos;m the most comfortable programming in for algorithmic work(LeetCode problems, beware!). I&apos;ve made use of it to develop a neural-network recommender system in <strong>Pytorch</strong> and tackle complicated paradigms like <strong>dynamic programming and constraint satisfaction</strong>(using hillclimbing and simulated annealing).
        </p>
    ),
    jsts: (
        <p className="text-2xl">
            <strong>JS/TS</strong> is my new favorite, and my go-to for web dev work. I&apos;m always impressed by its versatility and the giant ecosystem of open-source libraries that are just a click away. I&apos;ve spent time in with <strong>React/Next.js</strong> and <strong>Svelte/Sveltekit</strong> frontend stacks. I&apos;ve also gotten to use it in creating a custom 3D graphics library with <strong>ThreeJS</strong>, and setting up a Discord bot using <strong>Discord.js</strong>.
        </p>
    ),
    java: (
        <p className="text-2xl">
            <strong>Java</strong> is my most recently practiced language. At AWS, I used it heavily to develop an LLM-powered CloudWatch agent designed to dive into diagnostic logs and perform root cause analysis. I worked with <strong>LangChain</strong> and <strong>Lambda</strong> to accomplish this.
        </p>
    ),
    swift: (
        <p className="text-2xl">
            <strong>Swift</strong> was a language I picked up while taking a mobile development practicum course. I was attracted to the simplicity and approachable learning curve of <strong>SwiftUI</strong>, which helped a lot when learning how to organize my own full-stack mobile applications with <strong>Firebase</strong>.
        </p>
    ),
};

const logoClass =
    "h-10 w-10 shrink-0 rounded-md object-contain p-0 sm:h-16 sm:w-16 sm:rounded-lg md:h-24 md:w-24 md:rounded-xl lg:h-[100px] lg:w-[100px] lg:rounded-2xl";

export default function Skills() {
    const [selected, setSelected] = useState(null);

    function logoButtonClass(key) {
        const on = selected === key;
        return `group relative flex px-1 pb-4 pt-4 outline-none transition-transform duration-200 ease-out motion-reduce:transform-none motion-reduce:duration-0 sm:px-2 sm:pb-6 sm:pt-6 ${
            on ? "z-10 -translate-y-2 motion-reduce:translate-y-0" : "translate-y-0"
        }`;
    }

    return (
        <div className="flex min-h-[calc(100dvh-5.5rem)] flex-col pb-28 md:pb-36">
            <h1 className="shrink-0 font-bold">Languages</h1>

            <div className="flex flex-1 flex-col p-3 py-10 sm:p-4">
                <div className="flex w-full max-w-full shrink-0 flex-nowrap items-end justify-center gap-1 sm:gap-4 md:gap-8">
                    <button
                        type="button"
                        aria-pressed={selected === "python"}
                        className={`${logoButtonClass("python")} flex-col items-center`}
                        onMouseEnter={() => setSelected("python")}
                        onFocus={() => setSelected("python")}
                        onClick={() => setSelected((s) => (s === "python" ? null : "python"))}
                    >
                        <img className={logoClass} src={pythonlogo} alt="Python" width="100" height="100" />
                    </button>

                    <button
                        type="button"
                        aria-pressed={selected === "jsts"}
                        className={`${logoButtonClass("jsts")} items-end justify-center gap-0.5 sm:gap-2`}
                        onMouseEnter={() => setSelected("jsts")}
                        onFocus={() => setSelected("jsts")}
                        onClick={() => setSelected((s) => (s === "jsts" ? null : "jsts"))}
                    >
                        <img className={logoClass} src={jslogo} alt="JavaScript" width="100" height="100" />
                        <img className={logoClass} src={tslogo} alt="TypeScript" width="100" height="100" />
                    </button>

                    <button
                        type="button"
                        aria-pressed={selected === "java"}
                        className={`${logoButtonClass("java")} flex-col items-center`}
                        onMouseEnter={() => setSelected("java")}
                        onFocus={() => setSelected("java")}
                        onClick={() => setSelected((s) => (s === "java" ? null : "java"))}
                    >
                        <img className={logoClass} src={javalogo} alt="Java" width="100" height="100" />
                    </button>

                    <button
                        type="button"
                        aria-pressed={selected === "swift"}
                        className={`${logoButtonClass("swift")} flex-col items-center`}
                        onMouseEnter={() => setSelected("swift")}
                        onFocus={() => setSelected("swift")}
                        onClick={() => setSelected((s) => (s === "swift" ? null : "swift"))}
                    >
                        <img className={logoClass} src={swiftlogo} alt="Swift" width="100" height="100" />
                    </button>
                </div>

                <div
                    className="min-h-48 pt-10 px-4 text-neutral-200 transition-opacity duration-150 md:min-h-40"
                    aria-live="polite"
                >
                    {selected ? (
                        BLURBS[selected]
                    ) : (
                        <p className="text-2xl text-neutral-500"></p>
                    )}
                </div>
            </div>
        </div>
    );
}
