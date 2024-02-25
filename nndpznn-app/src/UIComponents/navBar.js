import "../style.css";

function NavBar() {
  return (
    <nav>
      <ul id="nav-menu">
        <li>
          <a href="../SitePages/homePage.js">
            <b>HOME</b>
          </a>
        </li>
        <li>
          <a href="../SitePages/compsciPage.js">
            <b>COMPSCI</b>
          </a>
        </li>
        <li>
          <a href="../SitePages/photovideoPage.js">
            <b>CREATIVE</b>
          </a>
        </li>
        <li>
          <a href="../SitePages/aboutmePage.js">
            <b>ABOUT ME</b>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
