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

export const About: FunctionComponent<Data> = (props) => {
 
    const resumeData = props.resumeData;
    return (
      <section id="about" style={{backgroundColor: 'white'}}>
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt=""  />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
}