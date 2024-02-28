import nolanhiking from "../assets/nolanhiking.jpeg";
import "../style.css";

export default function AboutMe() {
  return (
    <div id="top-of-page">
      <h1>
        <b>About Me</b>
      </h1>

      <img
        src={nolanhiking}
        className="roundedimage text-on-right"
        width="50%"
        id="aboutmepfp"
        alt="nolan hiking in the bay area"
      />

      <br></br>

      <p>
        My name is Nolan Delapaz Nguyen - I am a second-year computer science
        student currently attending Loyola Marymount University.
        <br></br>
        <a href="../assets/NolanNguyenResume_0124.pdf" target="_blank">
          Read my CV here.
        </a>
      </p>
      <p>I was born and raised in Alameda, CA, in the SF Bay Area.</p>
    </div>
  );
}
