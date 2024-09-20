import "../css/masterStyle.css";

import NolnHeader from "../UIComponents/nolnHeader";

import sitepfp2 from "../assets/sitepfp2.JPG";

export default function Home() {
  return (
    <div id="top-of-page">
      <h1 className="nolnHeader"><b>Nolan Nguyen, junior CompSci major and aspiring full-stack dev.</b></h1>
      <br></br>
      <img
        src={sitepfp2}
        className="elementcenter width75 roundedimage"
        alt="Nolan PFP 2"
      />

      <p className="textcenter blurb">
        {/* While currently a work-in-progress, this site will eventually serve as a central hub for all of my computer science
        and creative projects. But, for the time being ... here it is, in all
        its bare-bones glory. Best viewed in desktop. */}
        <strong>Hey there!</strong> My name is Nolan - I'm currently a third-year Computer Science major and Business Admin minor at Loyola Marymount University in Los Angeles(actually, as of Fall 2024 I'm studying abroad at Sogang University in South Korea!). This site doubles as a pseudo-portfolio and a place to document/keep track of my projects and ideas. If you like, feel free to click around and see where my interests have taken me.
      </p>
      <br></br>
    </div>
  );
}
