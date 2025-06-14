import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";

import nolanhiking from "../assets/nolanhiking.jpeg";
import nolanpdf from "../assets/NolanNguyenResume_0125.pdf";

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
        Hey there! My name is Nolan Nguyen. I'm currently a junior Computer Science major and Business Administration minor at Loyola Marymount University in Los Angeles.
        <br></br>
        <br></br>

        I was born and raised in the SF Bay Area; I grew up with a camera in my hands and learned to express myself through photo and video. Both leave much to the artist in terms of style, medium, and intent, and it became an extremely personal process that I could never get sick of; there was simply always more to learn.
        <br></br>
        <br></br>
        To my surprise, I soon discovered that programming was very much the same. Every time I got to work with a new language or framework, I realized more and more how much I didn't know and how few rules there really were. For me, watching all the little components blend together into these impossibly complex systems is the most satisfying thing in the world. And being able to understand and create through these systems, even more so.
        <br></br>
        <br></br>
        From exploring the many disciplines of my major during the past couple years, for the moment I've landed on pursuing full-stack development. I'm very attracted to the versatility of JavaScript, having used both React and Svelte, and becoming a self-sufficient full-stack developer is one of my primary goals. In addition to my app work, I've created a 3D graphics library from scratch with ThreeJS, explored complex algorithmic problem solving with Python, and most recently, I've taken to building a neural network-powered recommender system for non-mainstream films, named CultClassic. Keep an eye on my [Github](https://github.com/nndpznn) for future updates on all the above, plus more!
        <br></br>
        <br></br>
        Feel free to reach out if you have anything opportunities to share, or if you'd like to chat more about my experiences and the things I can offer. I hope to hear from you soon!
      </p>

      <NolnButton
        className="elementcenter"
        to={nolanpdf}
        target="_blank"
        rel="noreferrer"
        buttonTitle="Read my Resume Here"
      ></NolnButton>

      <br></br>

      <hr></hr>
    </div>
  );
}
