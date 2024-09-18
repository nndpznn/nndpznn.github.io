import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";

import nolanhiking from "../assets/nolanhiking.jpeg";
import nolanpdf from "../assets/NolanNguyenResume_0924.pdf";

export default function AboutMe() {
  return (
    <div id="top-of-page">
      <NolnHeader headerTitle="About Nolan Nguyen"></NolnHeader>

      <img
        src={nolanhiking}
        className="roundedimage text-on-right aboutmepfp"
        alt="nolan hiking in the bay area"
      />

      {/* <br></br> */}

      <p className="aboutmeblurb">
        Hey there! My name is Nolan Nguyen. I'm currently a junior Computer Science major and Business Administration minor at Loyola Marymount University in Los Angeles. <br></br>
        <br></br> I was born and raised in the SF Bay Area; I grew up with a camera in my hands and learned to express myself through photo and video. Both offer endless rabbit holes of styles, mediums and approaches to creating and capturing life, resulting in an extremely personal process to each different person behind the lens. I could never get sick of it; there was simply always more to learn. <br></br>
        <br></br> After starting in computer science just a few years ago, I soon discovered that programming was very much the same. Every time I jumped into some new library or section of it, I realized more and more how much I didn't know, and also, how few rules there really were. For me, watching all the little rules and components blend together into these impossibly complex systems and outcomes is the most satisfying thing in the world. And being able to understand and create through these systems, even more so. <br></br>
        <br></br> This past year, I've made an effort to dip my feet into a few different parts of computer science - you could say I'm in an experimenting phase, but I'm hoping this "phase" is something that never ends. I've created a 3D graphics library from scratch, explored complex algorithmic problem solving with Python, and most recently, I've taken to learning JavaScript and React to try my hand at app development. I'm very attracted to the versatility of JS and becoming a self-sufficient full-stack developer is one of my primary goals. <br></br>
        <br></br> Feel free to reach out if you have anything opportunities to share, or if you'd like to chat more about my experiences and the things I can offer. I hope to hear from you soon!
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
