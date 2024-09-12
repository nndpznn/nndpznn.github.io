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

      <p className="aboutmeblurb">
        Hello! My name is Nolan - I'm a sophomore computer science major and
        business minor currently attending Loyola Marymount University.
        <br></br>
        <br></br>I was born and raised in the SF Bay Area; I grew up with a camera in my hands and learned to express myself through photo and video. Both offer endless rabbit holes of styles, mediums and approaches to creating and capturing life, resulting in an extremely personal process to each different person behind the lens. I could never get sick of it; there was simply always more to learn. And every time I jumped into something new, I realized more and more how much I didn't know, and also, how few rules there really were. <br></br>
        <br></br> After starting in computer science just a few years ago, I soon discovered that programming was very much the same. For me, watching all the little rules and components blend together into these impossibly complex systems and outcomes is the most satisfying thing in the world. And being able to understand and create through these systems, even more so. <br></br>
        <br></br> This past year, I've made an effort to dip my feet into a few different parts of computer science. Most recently, I've taken to learning JavaScript and React to set the foundation for my app development journey; I am very attracted to the versatility of JS and becoming a self-sufficient full-stack developer is one of my primary goals for now. You could say I'm in the experimenting phase, but I'm really hoping this "phase" is something that never ends. <br></br>
        <br></br> I'm very active on all my listed platforms. Feel free to reach
        out if you have anything cool to share, or if you just want to chat!
      </p>

      <br></br>

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
