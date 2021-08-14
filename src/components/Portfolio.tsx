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

export const Portfolio: FunctionComponent<Data> = (props) => {
  const resumeData = props.resumeData;  
  return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <a href={`${item.link}`}>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
              
                      <img src={`${item.imgurl}`} className="item-img" alt=""/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                   
                  </div>
                </div>
                </a>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  
}