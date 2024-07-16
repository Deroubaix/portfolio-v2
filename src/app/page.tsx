import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <section id="landing-section" className=" dark-bg icon-bg">
        <div className="content">
          <p className="emphasised-text">Hi, my name is</p>
          <h1 className="color-slate">Marisha Deroubaix.</h1>
          <h1>
            <span>I&apos;m a full stack web developer.</span>
          </h1>
          <p>
            I specialize in building exceptional websites. Currently, I&apos;m
            focused on building all sorts of accessible, user friendly websites
            that lead to the overall success of your project.
          </p>
          <div className="button-container">
            <button className="button secondary medium">Let&apos;s talk</button>
            <button className="button primary medium">Resume</button>
          </div>
        </div>
      </section>
      <section id="about-me" className="about-section image-left dark-bg">
        {/* 				<div className="image">
					<Image src={about1} alt="Image of a mother lifting her child"></Image>
				</div> */}
        <div className="content">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section id="projects" className="about-section image-right dark-bg">
        {/* 	<div className="image">
					<Image src={about2} alt="Image of a mother hugging her child" className="position-object"></Image>
				</div> */}
        <div className="content">
          <h2>Projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="projects-list">
          </ul>
        </div>
      </section>
      <section id="contact" className="about-section image-left dark-bg">
        <div className="image"></div>
        <div className="content">
          <h2>Contatc</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </div>
  );
}
