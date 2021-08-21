import React, { FunctionComponent } from "react";

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
export const Resume: FunctionComponent<Data> = (props) => {
  const resumeData = props.resumeData;
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.GPA}</p>

                    <p>{item.Coursework}</p>
                    <p>{item.Awards}</p>
                    <p>{item.Activities}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p></p>
                    <p>{item.Bullet2}</p>
                    <p>{item.Bullet3}</p>
                    <p>{item.Bullet4}</p>
                    <p>{/* {item.Bullet5} */}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription1}</p>
          <p>{resumeData.skillsDescription2}</p>
        </div>
      </div>
    </section>
  );
};
