// Thank you to VyKnight on GitHub for inspiration on how to implement this resume page!

import "../css/masterStyle.css";

import NolnHeader from "../UIComponents/nolnHeader";

import nolanpdf from "../assets/NolanNguyenResume_0925.pdf";

export default function Resume() {
  return (
    <div className="container">
      <NolnHeader headerTitle="Resume"></NolnHeader>
      <p className="italic text-3xl">Don't wait, call now!</p>
      <br></br>
      <iframe
        className="m-auto w-[80%] h-[100vh]"
        title="nolan's resume"
        src={nolanpdf}
      ></iframe>
      <br></br>

      <p className="text-center text-2xl"><i>(Thank you to my friend <strong><a href="https://www.linkedin.com/in/axel-pestoni/" target="_blank">Axel Pestoni</a></strong> whose resume I borrowed for a template)</i></p>
      
    </div>
  );
}
