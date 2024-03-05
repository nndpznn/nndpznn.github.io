import "../css/masterStyle.css";

import NolnHeader from "../UIComponents/nolnHeader";

import sitepfp2 from "../assets/sitepfp2.JPG";

export default function Home() {
  return (
    <div id="top-of-page">
      <NolnHeader
        headerTitle="Hello, welcome to Nolan Nguyen's personal site! This is a
          work-in-progress."
      ></NolnHeader>

      <img
        src={sitepfp2}
        className="elementcenter width75 roundedimage"
        alt="Nolan PFP 2"
      />

      <p className="textcenter">
        I'm currently learning React, HTML and CSS to make it look pretty.
        Eventually, it'll serve as a central hub for all of my computer science
        and creative projects. But, for the time being ... here it is, in all
        its bare-bones glory.
      </p>
    </div>
  );
}
