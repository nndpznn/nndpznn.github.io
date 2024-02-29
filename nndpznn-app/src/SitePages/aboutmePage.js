import "../css/masterStyle.css";
// import { Document, Page } from "react-pdf";
import GenericButton from "../UIComponents/genericButton";
import nolanhiking from "../assets/nolanhiking.jpeg";
import nolanpdf from "../assets/NolanNguyenResume_0224.pdf";

export default function AboutMe() {
  return (
    <div id="top-of-page">
      <h1>
        <b>About Nolan Nguyen </b>
        <GenericButton
          to={nolanpdf}
          target="_blank"
          rel="noreferrer"
          buttonTitle="Read my CV Here"
        ></GenericButton>
      </h1>

      <img
        src={nolanhiking}
        className="roundedimage text-on-right aboutmepfp"
        width="50%"
        alt="nolan hiking in the bay area"
      />

      <br></br>

      <p>
        Hi! My name is Nolan - I'm a sophomore computer science major and
        business minor currently attending Loyola Marymount University.
      </p>

      <p>I was born and raised in Alameda, CA, in the SF Bay Area.</p>

      {/* <Document file={nolanpdf}>
        <Page pageNumber={1} />
      </Document> */}

      <br></br>
    </div>
  );
}
