import "../css/masterStyle.css";
import "../css/navBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navwidth nav bg-gray-900 rounded-3xl fixed top-3 left-1/2 -translate-x-1/2 z-50 shadow-xl">
      <ul className="flex flex-nowrap justify-between overflow-x-auto">
        <CustomLink to="/">
          <span className="long-text"><b>.home</b></span>
          <span className="short-text"><b>.hme</b></span>
        </CustomLink>

        <CustomLink to="/projects">
          <span className="long-text"><b>.work</b></span>
          <span className="short-text"><b>.wrk</b></span>
        </CustomLink>
        
        <CustomLink to="/skills">
          <span className="long-text"><b>.skills</b></span>
          <span className="short-text"><b>.skl</b></span>
        </CustomLink>

        <CustomLink to="/aboutme">
          <span className="long-text"><b>.about</b></span>
          <span className="short-text"><b>.abt</b></span>
        </CustomLink>
        <CustomLink to="/resume">
          <span className="long-text"><b>.resume</b></span>
          <span className="short-text"><b>.res</b></span>
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={` ${isActive ? "active" : ""}`} >
      <Link className="md:mx-3" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
