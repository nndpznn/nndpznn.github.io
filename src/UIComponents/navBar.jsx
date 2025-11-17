import "../css/masterStyle.css";
import "../css/navBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav w-[60vw] bg-gray-900 rounded-3xl fixed top-3 left-1/2 -translate-x-1/2 z-50 shadow-xl">
      <ul className="flex-wrap smflex flex-col md:flex-row md:flex-nowrap md:space-x-6 space-y-2:flex-nowrap">
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
      <Link className="whitespace-nowrap" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
