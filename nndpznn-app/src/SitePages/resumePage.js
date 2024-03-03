// Thank you to VyKnight on GitHub for inspiration on how to implement this resume page!

import "../css/masterStyle.css";
import nolanpdf from "../assets/NolanNguyenResume_0224.pdf";

export default function Resume() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <iframe
        className="elementcenter"
        title="nolan's resume"
        src={nolanpdf}
        frameborder="0"
        width="70%"
        height="1400"
      ></iframe>
      <br></br>
    </div>
  );
}
