import "../style.css";

export default function ContactFooter() {
  return (
    <div className="footer">
      <nav className="nav">
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
        Questions? Email me at nolandelapaznguyen@gmail.com
      </p>
    </div>
  );
}
