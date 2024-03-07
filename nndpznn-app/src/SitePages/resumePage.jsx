// Thank you to VyKnight on GitHub for inspiration on how to implement this resume page!

import "../css/masterStyle.css";

import NolnHeader from "../UIComponents/nolnHeader";

import nolanpdf from "../assets/NolanNguyenResume_0224.pdf";

export default function Resume() {
  return (
    <div className="container">
      <NolnHeader headerTitle="Resume"></NolnHeader>
      <iframe
        className="elementcenter resume"
        title="nolan's resume"
        src={nolanpdf}
        frameborder="0"
      ></iframe>
      <br></br>
    </div>
  );
}
