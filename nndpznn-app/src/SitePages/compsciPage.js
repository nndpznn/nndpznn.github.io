import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";

import notfoundPlaceholder from "../assets/anyonehome.jpg";

export default function CompSci() {
  return (
    <div>
      <NolnHeader headerTitle="Computer Science Projects"></NolnHeader>

      <img
        src={notfoundPlaceholder}
        className="elementcenter width75 roundedimage"
        alt="not found placeholder"
      />

      <p className="textcenter">
        Pardon the dust - I'm still figuring out the format I want to use for
        displaying my projects. For now, take a look at my GitHub profile.
      </p>

      <NolnButton
        className="elementcenter"
        to="https://github.com/nndpznn"
        target="_blank"
        buttonTitle="nndpznn on GitHub"
      ></NolnButton>

      <br></br>
      {/* <hr></hr>
      <h1>My Skills</h1> */}
    </div>
  );
}
