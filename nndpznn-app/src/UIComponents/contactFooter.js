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
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nndpznn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@-nolan"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nolandnguyen/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>

      <p className="textcenter">
        v2.5 powered by React | Questions? Email me at
        nolandelapaznguyen@gmail.com
      </p>
    </div>
  );
}
