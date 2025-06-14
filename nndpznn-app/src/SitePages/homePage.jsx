import "../css/masterStyle.css";

import sitepfp2 from "../assets/sitepfp2.JPG";
import namsanportrait from "../assets/namsanportrait.jpg";

export default function Home() {
  return (
    <div id="top-of-page">
      <h1 className="nolnHeader"><b>Nolan Nguyen</b></h1>
      <h2 className>Rising senior CompSci major, aspiring full-stack dev.</h2>
      <img
        src={namsanportrait}
        className="elementcenter width75 roundedimage"
        alt="Nolan PFP 2"
      />

      <p className="blurb">
        {/* While currently a work-in-progress, this site will eventually serve as a central hub for all of my computer science
        and creative projects. But, for the time being ... here it is, in all
        its bare-bones glory. Best viewed in desktop. */}
        <strong>Hey there!</strong> My name is Nolan - I'm currently a third-year Computer Science major and Business Admin minor at Loyola Marymount University in Los Angeles. This site doubles as a pseudo-portfolio and a place to document/keep track of my projects and ideas. If you like, feel free to click around and see where my interests have taken me.
      </p>
      <hr></hr>
      <br></br>
    </div>
  );
}
