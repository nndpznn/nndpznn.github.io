import "../css/masterStyle.css";
import "../css/contactFooter.css";

export default function ContactFooter() {
  return (
    <div>
      <nav className="nav footer">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nolandelapaznguyen/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>LinkedIn</strong>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nndpznn"
              target="_blank"
              rel="noreferrer"
            >
              <strong>GitHub</strong>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@-nolan"
              target="_blank"
              rel="noreferrer"
            >
              <strong>YouTube</strong>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nolandnguyen/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Instagram</strong>
            </a>
          </li>
        </ul>
      </nav>

      <p className="textcenter">
        v3.1 powered by React & Vite | Questions? Comments? Job offers? Email me at
        nolandelapaznguyen@gmail.com
      </p>
      <br></br>
    </div>
  );
}
