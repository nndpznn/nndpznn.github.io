import loyolanBanner from "../assets/loyolanbanner.jpeg";

import "../style.css";

export default function PhotoVideo() {
  return (
    <div>
      <h1>Photo and Video</h1>
      <p>
        Since middle school, videography has been my primary creative outlet,
        enabling me to store and present my most precious memories to others, as
        well as land me opportunities to work and develop my skills at my
        current position as <strong>Video Coordinator</strong> at the Los
        Angeles Loyolan.
      </p>

      <br></br>

      <h2 className="textcenter">My Time at the Loyolan</h2>

      <a
        href="https://www.laloyolan.com/users/profile/nolan%20nguyen/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={loyolanBanner}
          className="imagecenter roundedimage"
          alt="loyolan logo"
        />
      </a>

      <p className="textcenter">
        <em>
          The Los Angeles Loyolan is a student-run digital publication serving
          communities in the LMU and Westchester area.
        </em>
      </p>

      <br></br>

      <p>
        Throughout my time at the Loyolan, I have been met with nothing but
        kindness and encouragement to improve as not only a videographer, but
        also as a team member and leader. The projects I've been involved in
        since being hired have allowed me to explore the college experience and
        get familiar with all kinds of people, as well as create actual change
        through the impact the Loyolan has on the LMU community.{" "}
        <a
          href="https://www.laloyolan.com/users/profile/nolan%20nguyen/"
          target="_blank"
          rel="noreferrer"
        >
          (My staff page)
        </a>
      </p>
      <h2>
        <a
          href="https://www.youtube.com/@-nolan"
          target="_blank"
          rel="noreferrer"
        >
          My personal channel
        </a>
      </h2>
      {/* <!-- <img src="assets/loyolanbanner.jpeg" /> --> */}
      <p>
        The kinds of videos I post on my personal channel are the reason I
        started making videos in the first place. While I do have a lot of fun
        making them, I still strive to improve some part of my technique or
        writing every time.
      </p>
    </div>
  );
}
