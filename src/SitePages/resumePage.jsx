// Thank you to VyKnight on GitHub for inspiration on how to implement this resume page!

import "../css/masterStyle.css";

import NolnHeader from "../UIComponents/nolnHeader";

import nolanresumejpeg from "../assets/NolanNguyenResume_1025.jpg"
import { Image} from "@heroui/react";

export default function Resume() {

  return (
    <div className="">
      <NolnHeader headerTitle="Resume"></NolnHeader>
      <p className="italic text-3xl">Don't wait, call now!</p>
      <br></br>

      <div  
        className="flex justify-center"
      >
        <Image 
          src={nolanresumejpeg}
          alt="nolan nguyen resume utd. october 2025"
          className="w-[50vw] shadow-xl"
        />
      </div>

      <br></br>

      <p className="text-center text-2xl"><i>(Thank you to my friend <strong><a href="https://www.linkedin.com/in/axel-pestoni/" target="_blank">Axel Pestoni</a></strong> whose resume I borrowed for a template)</i></p>
      
    </div>
  );
}
