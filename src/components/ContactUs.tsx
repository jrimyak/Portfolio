import React, { FunctionComponent } from 'react';
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
}

} 

export const ContactUs: FunctionComponent<Data> = (props) => {

    let resumeData = props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );

}