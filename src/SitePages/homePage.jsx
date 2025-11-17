import "../css/masterStyle.css";

import sitepfp2 from "../assets/sitepfp2.JPG";
import namsanportrait from "../assets/namsanportrait.jpg";

export default function Home() {
  return (
    <div id="top-of-page" className="">
      <h1 className="text-left font-2xl"><b>Nolan Nguyen</b></h1>
      <p className="text-3xl mb-5">senior compsci major, aspiring software engineer.</p>

      <div className="flex justify-center">
        <img
          src={namsanportrait}
          className="m-4 w-[50vh] rounded-4xl"
          alt="Nolan PFP 2"
        />
      </div>

      <p className="text-2xl mx-0 mt-4">
        Hi, my name is Nolan - I'm currently a senior Computer Science major and Business Admin minor at Loyola Marymount University, graduating May 2026. I love frontend web dev and agentic AI. I also love making videos, writing opinions, doing cardistry, and taking photos of cars. Here's my pseudo-portfolio in website form!
      </p>

    </div>
  );
}
