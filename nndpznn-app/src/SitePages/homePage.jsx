import "../css/masterStyle.css";

import NolnHeader from "../UIComponents/nolnHeader";

import sitepfp2 from "../assets/sitepfp2.JPG";

export default function Home() {
  return (
    <div id="top-of-page">
      <h1 className="nolnHeader"><b>Nolan Nguyen, junior CompSci major and videographer.</b></h1>
      <br></br>
      <img
        src={sitepfp2}
        className="elementcenter width75 roundedimage"
        alt="Nolan PFP 2"
      />

      <p className="textcenter blurb">
        While currently a work-in-progress, this site will eventually serve as a central hub for all of my computer science
        and creative projects. But, for the time being ... here it is, in all
        its bare-bones glory. Best viewed in desktop.
      </p>
      <br></br>
    </div>
  );
}
