import "../style.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul id="nav-menu">
        <CustomLink href="/">
          <b>HOME</b>
        </CustomLink>
        <CustomLink href="/compsci">
          <b>COMPSCI</b>
        </CustomLink>
        <CustomLink href="/photovideo">
          <b>CREATIVE</b>
        </CustomLink>
        <CustomLink href="/aboutme">
          <b>ABOUT ME</b>
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
