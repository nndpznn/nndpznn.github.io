// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./UIComponents/navBar";
import Home from "./SitePages/homePage";
import CompSci from "./SitePages/compsciPage";
import PhotoVideo from "./SitePages/photovideoPage";
import AboutMe from "./SitePages/aboutmePage";
import ContactFooter from "./UIComponents/contactFooter";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/compsci":
      component = <CompSci />;
      break;
    case "/photovideo":
      component = <PhotoVideo />;
      break;
    case "/aboutme":
      component = <AboutMe />;
      break;
    default:
      component = <h1>Nope!</h1>;
  }
  return (
    <>
      <NavBar />
      {component}
      <ContactFooter />
    </>
  );
}

export default App;
