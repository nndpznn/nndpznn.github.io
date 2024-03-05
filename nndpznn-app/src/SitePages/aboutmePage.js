import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";

import nolanhiking from "../assets/nolanhiking.jpeg";
import nolanpdf from "../assets/NolanNguyenResume_0224.pdf";

export default function AboutMe() {
  return (
    <div id="top-of-page">
      <NolnHeader headerTitle="About Nolan Nguyen"></NolnHeader>

      <img
        src={nolanhiking}
        className="roundedimage text-on-right aboutmepfp"
        alt="nolan hiking in the bay area"
      />

      <br></br>

      <p>
        Hi! My name is Nolan - I'm a sophomore computer science major and
        business minor currently attending Loyola Marymount University.
        <br></br>
        <br></br>I was born and raised in Alameda, CA, in the SF Bay Area. I
        grew up with a camera in my hands and learned to express myself
        visually, through photo and video. <br></br>
        <br></br> Computer science was a later development, but soon grew to be
        one of my central interests — I'm constantly inspired by the
        possibilities and am always looking to pick up skills. So far, I've
        taken a liking to front-end web development, but I'm leaving the door
        open for more... <br></br>
        <br></br> Let's talk! I'm very active on all my listed platforms. Feel
        free to reach out if you have anything cool to share, or if you just
        want to hang out :)
      </p>

      <NolnButton
        className="elementcenter"
        to={nolanpdf}
        target="_blank"
        rel="noreferrer"
        buttonTitle="Read my Resume Here"
      ></NolnButton>

      <br></br>
    </div>
  );
}
