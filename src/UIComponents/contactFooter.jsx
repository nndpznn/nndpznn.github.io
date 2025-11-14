import "../css/masterStyle.css";
import "../css/contactFooter.css";

export default function ContactFooter() {
  return (
    <div>
              <hr></hr>
      <nav className="nav footer">
        
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nolndn/"
              target="_blank"
              rel="noreferrer"
            >
              <b>linkedin/</b>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nndpznn"
              target="_blank"
              rel="noreferrer"
            >
              <b>github/</b>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@nolndn"
              target="_blank"
              rel="noreferrer"
            >
              <b>youtube/</b>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nolandnguyen/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <b>instagram/</b>
            </a>
          </li>
        </ul>
      </nav>

      <p className="text-center text-xl">
        v4.2 powered by React & Vite | Questions? Comments? Job offers? Email me at
        nolandelapaznguyen@gmail.com
      </p>
      <br></br>
    </div>
  );
}
