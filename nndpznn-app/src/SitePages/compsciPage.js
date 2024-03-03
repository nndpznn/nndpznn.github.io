import "../css/masterStyle.css";

import GenericButton from "../UIComponents/genericButton";

// import stupidLaptopPicture from "../assets/laptopimage.jpg";
import notfoundPlaceholder from "../assets/anyonehome.jpg";

export default function CompSci() {
  return (
    <div>
      <h1>Computer Science Projects</h1>

      <img
        src={notfoundPlaceholder}
        className="elementcenter scaled50 roundedimage"
        alt="not found placeholder"
      />

      <p className="textcenter">
        Pardon the dust - I'm still figuring out the format I want to use for
        displaying my projects. For now, take a look at my GitHub profile.
      </p>

      <GenericButton
        className="elementcenter"
        to="https://github.com/nndpznn"
        target="_blank"
        buttonTitle="nndpznn on GitHub"
      ></GenericButton>

      <br></br>
      <hr></hr>
      <h1>My Skills</h1>
    </div>
  );
}
