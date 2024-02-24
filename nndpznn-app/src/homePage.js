import sitepfp2 from "./assets/sitepfp2.JPG";
import "./style.css";

function HomePage() {
  return (
    <div id="top-of-page">
      <h1>
        <b>
          Hello, welcome to Nolan Nguyen's personal site! This is a
          work-in-progress.
        </b>
      </h1>
      <img
        src={sitepfp2}
        class="imagecenter scaled roundedimage"
        alt="Nolan PFP 2"
      />

      <p class="textcenter">
        I'm currently learning HTML and CSS to make it look pretty. Eventually,
        it'll serve as a central hub for all of my Computer Science and creative
        projects.
        <br></br>
        But, for the time being ... here it is.
      </p>
    </div>
  );
}

export default HomePage;
