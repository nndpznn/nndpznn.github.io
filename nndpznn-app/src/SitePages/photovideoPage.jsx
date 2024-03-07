import "../css/masterStyle.css";

import NolnButton from "../UIComponents/nolnButton";
import NolnHeader from "../UIComponents/nolnHeader";

import nolancamera from "../assets/nolanwcameraWIDE.JPG";
import loyolanBanner from "../assets/loyolanbanner.jpeg";
import nolanchannelbanner from "../assets/nolanchannelbanner.jpg";

export default function PhotoVideo() {
  return (
    <div>
      <NolnHeader headerTitle="Photo and Video"></NolnHeader>

      <img
        src={nolancamera}
        className="elementcenter width85 roundedimage"
        alt="nolan camera portrait"
      />

      <p>
        Since middle school, photo and video have been my primary creative
        outlets, enabling me to save and present my most precious memories to
        others, and landing me opportunities to work and develop my skills such
        as in my current position as <strong>Video Coordinator</strong> at the
        Los Angeles Loyolan.
      </p>

      <hr></hr>
      <br></br>

      <NolnButton
        to="https://www.laloyolan.com/users/profile/nolan%20nguyen/"
        target="_blank"
        buttonTitle="My Loyolan Work"
      ></NolnButton>

      <br></br>
      <br></br>

      <a
        href="https://www.laloyolan.com/users/profile/nolan%20nguyen/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={loyolanBanner}
          className="elementcenter banner roundedimage"
          alt="loyolan logo"
        />
      </a>

      <p className="textcenter">
        <em>
          The Los Angeles Loyolan is a student-run digital publication serving
          communities in the LMU and Westchester area.
        </em>
      </p>

      <p>
        Throughout my time at the Loyolan, I have been met with nothing but
        motivation and encouragement to improve as not only a videographer, but
        also as a team member and leader. The projects I've been involved in
        since being hired have allowed me to explore the college experience and
        get familiar with all kinds of stories, as well as create actual change
        through the impact the Loyolan has on the LMU community.
      </p>

      {/* <NolnHeader headerTitle="Feature: Albert the Crossing Guard"></NolnHeader> */}

      <hr></hr>
      <br></br>

      <NolnButton
        to="https://www.youtube.com/@-nolan"
        target="_blank"
        buttonTitle="My Personal Channel"
      ></NolnButton>

      <br></br>
      <br></br>

      <a
        href="https://www.youtube.com/@-nolan"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={nolanchannelbanner}
          className="elementcenter banner roundedimage"
          alt="nolan's youtube channel preview"
        />
      </a>

      <p>
        The kinds of videos I post on my personal channel are the reason I
        started making videos in the first place. While I do have a lot of fun
        making them, I still strive to improve some part of my technique or
        writing every time.
      </p>
    </div>
  );
}
