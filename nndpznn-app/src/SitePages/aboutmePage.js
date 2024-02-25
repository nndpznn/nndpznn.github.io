import nolanhiking from "../assets/nolanhiking.jpeg";
import "../style.css";

function AboutMePage() {
  return (
    <div id="top-of-page">
      <h1>
        <b>About Me</b>
      </h1>

      <img
        src={nolanhiking}
        class="roundedimage text-on-right"
        width="50%"
        id="aboutmepfp"
        alt="nolan hiking in the bay area"
      />

      <br></br>

      <p>
        My name is Nolan Delapaz Nguyen - I am a second-year computer science
        student currently attending Loyola Marymount University.{" "}
        <a href="../assets/NolanNguyenResume_0124.pdf" target="_blank">
          Read my CV here.
        </a>
      </p>
      <p>I was born and raised in Alameda, CA, in the SF Bay Area.</p>

      <h2 id="socials">Socials</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/nolandelapaznguyen/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/nndpznn" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@-nolan"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nolandnguyen/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AboutMePage;
