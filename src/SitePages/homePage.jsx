import "../css/masterStyle.css";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import namsanportrait from "../assets/namsanportrait.jpg";

export default function Home() {
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  function scrollToAbout() {
    setAboutVisible(true);
    const el = aboutRef.current;
    if (!el) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    el.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "center",
      inline: "nearest",
    });
  }

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    return () => {
      window.history.scrollRestoration = prev;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = aboutRef.current;
    if (!el) return;

    const narrow = window.matchMedia("(max-width: 767px)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAboutVisible(true);
      },
      {
        threshold: narrow ? 0.08 : 0.12,
        rootMargin: narrow ? "0px 0px -4% 0px" : "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top-of-page">
      <section
        className="relative flex min-h-[calc(100dvh-5.5rem)] flex-col justify-between pb-8"
        aria-label="Introduction"
      >
        <div className="flex flex-1 flex-col justify-center pt-4">
          <h1 className="text-left font-2xl">Nolan Nguyen<span className="text-[#102bef]">.</span></h1>
          <p className="text-3xl mb-0 max-w-3xl">
            Senior compsci major, aspiring software engineer. And no, that&apos;s
            not all.
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToAbout}
          className="home-scroll-hint mx-auto flex cursor-pointer flex-col items-center gap-1 border-0 bg-transparent p-0 font-inherit text-neutral-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label="Scroll to portrait and bio"
        >
          {/* <span className="text-sm tracking-wide uppercase">More</span> */}
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </section>

      <section
        id="home-about"
        className="scroll-mt-24 flex min-h-[calc(100dvh-5.5rem)] flex-col justify-start py-14 pb-28 md:py-20 md:pb-36"
        aria-label="Portrait and bio"
      >
        <div
          ref={aboutRef}
          className={`mx-auto flex w-full max-w-6xl scroll-mt-24 flex-col gap-10 px-5 transition-[opacity,transform] duration-700 ease-out sm:px-7 md:grid md:grid-cols-2 md:items-center md:gap-x-16 md:gap-y-10 md:px-8 lg:gap-x-20 ${
            aboutVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex w-full shrink-0 justify-center md:min-w-0 md:justify-self-start md:self-center">
            <img
              src={namsanportrait}
              className="max-h-[min(50vh,28rem)] w-auto max-w-[min(85vw,24rem)] rounded-4xl object-cover sm:max-w-[min(80vw,24rem)] md:max-w-[min(100%,24rem)]"
              alt="Nolan Nguyen"
            />
          </div>
          <p className="mx-0 mt-0 w-full min-w-0 text-2xl leading-relaxed">
            Hi, my name is Nolan - I&apos;m currently a senior Computer Science
            major and Business Admin minor at Loyola Marymount University,
            graduating May 2026. 
            <br></br><br></br>
            I love frontend web dev and agentic AI. I also
            love making videos, writing opinions, doing cardistry, and taking
            photos of cars. Here&apos;s my pseudo-portfolio in website form!
          </p>
        </div>
      </section>
    </div>
  );
}
