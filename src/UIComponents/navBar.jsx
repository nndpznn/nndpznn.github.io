import "../css/masterStyle.css";
import "../css/navBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav w-fit bg-gray-900 rounded-3xl fixed top-3 left-1/2 -translate-x-1/2 z-50 shadow-xl">
      <ul>
        <CustomLink to="/">
          <b>.home</b>
        </CustomLink>
        <CustomLink to="/projects">
          <b>.work</b>
        </CustomLink>
        <CustomLink to="/skills">
          <b>.skills</b>
        </CustomLink>

        {/* <CustomLink to="/photovideo">
          <b>CREATIVE</b>
        </CustomLink> */}
        {/* Not the focus for now. Disabling... */}

        <CustomLink to="/aboutme">
          <b>.about</b>
        </CustomLink>
        <CustomLink to="/resume">
          <b>.resume</b>
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
