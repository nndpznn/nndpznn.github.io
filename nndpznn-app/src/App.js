import "./App.css";

import Home from "./SitePages/homePage";
import CompSci from "./SitePages/compsciPage";
import PhotoVideo from "./SitePages/photovideoPage";
import AboutMe from "./SitePages/aboutmePage";
import Resume from "./SitePages/resumePage";

import NavBar from "./UIComponents/navBar";
import ContactFooter from "./UIComponents/contactFooter";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compsci" element={<CompSci />} />
        <Route path="/photovideo" element={<PhotoVideo />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <ContactFooter />
    </div>
  );
}
