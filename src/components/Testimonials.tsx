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
export const Testimonials: FunctionComponent<Data> = (props) => {
  const resumeData = props.resumeData;
  return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.testimonials && resumeData.testimonials.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p>
                            {item.description}
                            </p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
}