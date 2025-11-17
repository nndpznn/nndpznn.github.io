import "../css/masterStyle.css";

export default function ContactFooter() {
  return (
    <div className="">
      <hr></hr>
      <nav className="nav">
        <ul className="flex-wrap">
          <li>
            <a
              href="https://www.linkedin.com/in/nolndn/"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >linkedin/</a>
          </li>
          <li>
            <a
              href="https://github.com/nndpznn"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >github/</a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@nolndn"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >youtube/</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nolandnguyen/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >instagram/</a>
          </li>
        </ul>
      </nav>

      <p className="text-center text-md">
        v4.4 powered by React, Vite, and HeroUI.
      </p>
        <p className="text-center text-md">
        Questions? Comments? Job offers? Email me at
        nolandelapaznguyen@gmail.com
      </p>
      <br></br>
    </div>
  );
}
