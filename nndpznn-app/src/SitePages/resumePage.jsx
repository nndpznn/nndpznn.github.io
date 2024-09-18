// Thank you to VyKnight on GitHub for inspiration on how to implement this resume page!

import "../css/masterStyle.css";

import NolnHeader from "../UIComponents/nolnHeader";

import nolanpdf from "../assets/NolanNguyenResume_0924.pdf";

export default function Resume() {
  return (
    <div className="container">
      <NolnHeader headerTitle="Resume"></NolnHeader>
      <br></br>
      <iframe
        className="elementcenter resume"
        title="nolan's resume"
        src={nolanpdf}
      ></iframe>
      <br></br>

      <p className="textcenter"><i>(Thank you to my good friend <strong><a href="https://www.linkedin.com/in/axel-pestoni/" target="_blank">Axel Pestoni</a></strong> whose resume I borrowed for a template)</i></p>
    </div>
  );
}
