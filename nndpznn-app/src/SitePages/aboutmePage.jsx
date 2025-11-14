import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";

import nolanhiking from "../assets/nolanhiking.jpeg";
import nolanpdf from "../assets/NolanNguyenResume_0925.pdf";

export default function AboutMe() {
  return (
<div id="top-of-page" className="">
  <NolnHeader headerTitle="About Nolan Nguyen"></NolnHeader>

  <div className="flex justify-center mx-auto max-w-7xl px-4"> 
    
    <img
      src={nolanhiking}
      className="rounded-3xl m-4 w-1/3 mt-5 mr-6 mb-3 object-cover" 
      alt="nolan hiking in the bay area"
    />

    <p className="mt-5 text-2xl w-2/3">
      Hey there! My name is Nolan Nguyen. I'm currently a senior Computer Science major and Business Administration minor at Loyola Marymount University in Los Angeles. I hail from a tiny tucked-away town in the Bay Area named Alameda.
      <br></br>
      <br></br>

      I grew up with a camera in my hands and learned to express myself through photo and video. Both are extremely personal creative processes that I could never get sick of. I came across computer science through that same desire to create, and so far have found no limits to speak of :)
      <br></br>
      <br></br>

      I've built frontend with React, Svelte and SwiftUI, neural networks with PyTorch, a baby graphics engine with ThreeJS, even a Discord bot that sends me basketball stats.
      
      Keep an eye on my Github for more!
      <br></br>
      <br></br>
      Please reach out with any opportunities to share, or if you'd like to chat more about my experiences and the things I can offer. I hope to hear from you soon!
    </p>
  </div>

  <br></br>

  <NolnButton
    className="flex m-auto"
    to={nolanpdf}
    target="_blank"
    rel="noreferrer"
    buttonTitle="Read my Resume Here"
  ></NolnButton>

</div>
  );
}
