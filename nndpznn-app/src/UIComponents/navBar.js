import "../css/masterStyle.css";
import "../css/navBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">
          <b>HOME</b>
        </CustomLink>
        <CustomLink to="/compsci">
          <b>COMPSCI</b>
        </CustomLink>
        <CustomLink to="/photovideo">
          <b>CREATIVE</b>
        </CustomLink>
        <CustomLink to="/aboutme">
          <b>ABOUT ME</b>
        </CustomLink>
        <CustomLink to="/resume">
          <b>RESUME</b>
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
