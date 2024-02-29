import "../css/masterStyle.css";

// import GenericButton from "../UIComponents/genericButton";

import stupidLaptopPicture from "../assets/laptopimage.jpg";

export default function CompSci() {
  return (
    <div>
      <h1>Computer Science Projects</h1>

      <img
        src={stupidLaptopPicture}
        className="imagecenter scaled roundedimage"
        alt="laptop stock"
      />

      <p className="textcenter">
        Pardon the dust - I'm still figuring out the format I want to use for
        displaying my projects. For now, take a look at my GitHub profile.
      </p>

      {/* <GenericButton
        to="https://github.com/nndpznn"
        target="_blank"
        buttonTitle="nndpznn on GitHub"
      ></GenericButton> */}
    </div>
  );
}
