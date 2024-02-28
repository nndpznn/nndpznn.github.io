import "../style.css";
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
    </div>
  );
}
