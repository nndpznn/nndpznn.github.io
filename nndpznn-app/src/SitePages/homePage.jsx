import "../css/masterStyle.css";

import sitepfp2 from "../assets/sitepfp2.JPG";
import namsanportrait from "../assets/namsanportrait.jpg";

export default function Home() {
  return (
    <div id="top-of-page" className="">
      <h1 className="nolnHeader"><b>Nolan Nguyen</b></h1>
      <h2 className>senior compsci major, aspiring software engineer.</h2>

      <div className="flex justify-center">
        <img
          src={namsanportrait}
          className="m-4 w-[50vh] rounded-4xl"
          alt="Nolan PFP 2"
        />
      </div>

      <p className="text-2xl mx-20 mt-4">
        {/* While currently a work-in-progress, this site will eventually serve as a central hub for all of my computer science
        and creative projects. But, for the time being ... here it is, in all
        its bare-bones glory. Best viewed in desktop. */}
        Hi, my name is Nolan - I'm currently a senior Computer Science major and Business Admin minor at Loyola Marymount University, graduating May 2026. Here's my pseudo-portfolio in website form. If you like, feel free to click around!
      </p>

    </div>
  );
}
