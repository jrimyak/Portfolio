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
export const Footer: FunctionComponent<Data> = (props) => {
  const resumeData = props.resumeData;
  return(
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              (resumeData.socialLinks) && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
}