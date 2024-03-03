import "../css/masterStyle.css";
import GenericButton from "../UIComponents/genericButton";
import nolanhiking from "../assets/nolanhiking.jpeg";
import nolanpdf from "../assets/NolanNguyenResume_0224.pdf";

export default function AboutMe() {
  return (
    <div id="top-of-page">
      <h1>
        <b>About Nolan Nguyen </b>
      </h1>

      <img
        src={nolanhiking}
        className="roundedimage text-on-right aboutmepfp"
        alt="nolan hiking in the bay area"
      />

      <br></br>

      <p>
        Hi! My name is Nolan - I'm a sophomore computer science major and
        business minor currently attending Loyola Marymount University.
      </p>

      <p>I was born and raised in Alameda, CA, in the SF Bay Area.</p>

      <GenericButton
        className="elementcenter"
        to={nolanpdf}
        target="_blank"
        rel="noreferrer"
        buttonTitle="Read my Resume Here"
      ></GenericButton>

      <br></br>
    </div>
  );
}
