import React, { FunctionComponent } from "react";
import "./Header.css";
interface Data {
  resumeData: {
    imagebaseurl: string;
    name: string;
    role: string;
    linkedinId: string;
    skypeid: string;
    roleDescription: string;
    socialLinks: {
      name: string;
      url: string;
      className: string;
    }[];
    aboutme: string;
    address: string;
    website: string;
    education: {
      UniversityName: string;
      specialization: string;
      MonthOfPassing: string;
      YearOfPassing: string;
      GPA: string;
      Coursework: string;
      Awards: string;
      Activities: string;
    }[];
    work: {
      CompanyName: string;
      specialization: string;
      MonthOfLeaving: string;
      YearOfLeaving: string;
      Bullet1: string;
      Bullet2: string;
      Bullet3: string;
      Bullet4: string;
    }[];
    skillsDescription1: string;
    skillsDescription2: string;

    skills: {
      skillname: string;
    }[];
    portfolio: {
      name: string;
      description: string;
      imgurl: string;
      link: string;
    }[];
    testimonials: {
      description: string;
      name: string;
    }[];
  };
}

export const Header: FunctionComponent<Data> = (props) => {
  const resumeData = props.resumeData;
  return (
    <React.Fragment>
      <header id="home" style={{ backgroundColor: "white" }}>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a
                className="smoothscroll"
                style={{ color: "black" }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="smoothscroll"
                style={{ color: "black" }}
                href="#resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="smoothscroll"
                style={{ color: "black" }}
                href="#portfolio"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="smoothscroll"
                style={{ color: "black" }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline" style={{ color: "#000" }}>
              I am {resumeData.name}.
            </h1>
            <h3 style={{ color: "#000", fontFamily: "sans-serif " }}>
              I am a {resumeData.role}.{resumeData.roleDescription}
            </h3>
            <hr style={{ color: "black" }} />
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className} aria-hidden={true}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};
