import React from 'react'; 
import './About.css';

const About = () => {
    const skills = [
        "JavaScript",
        "React",
        "Node.js",
        "CSS",
        "HTML",
        "Python",
        "Java",
        "SQL",
        "Mobile Development",
        "System Analysis"
    ];

    return (
        <section className="about">
            <div className="about-container">
                <h2>About Me</h2>
                <p>
                    I am currently at Del Institute of Technology as a Bachelor of Informatics student. 
                    I am able to work individually and in a team, able to manage resources in completing 
                    projects in accordance with the parameters expected and agreed upon by the company, 
                    and able to communicate well and identify effective solutions to overcome the problems 
                    faced. My field of interest is Mobile Development (Android) and System Analysis, 
                    but I am also open to trying different things. I am always eager to learn new things, 
                    improve my skills, and have a high curiosity about how something works.
                </p>
                <p>
                    In my portfolio, you will find a collection of projects that showcase my skills and 
                    abilities in developing mobile applications and analyzing systems. Each project reflects 
                    my commitment to quality and innovation, combining technical expertise with a user-centered 
                    approach. I believe that the best solutions come from understanding the needs of the users 
                    and leveraging technology to meet those needs effectively.
                </p>
                <div className="contact-info">
                    <div className="contact-column">
                        <ul>
                            <li><strong>Birthday:</strong> 3 April 2003</li>
                            <li><strong>Phone:</strong> +62 82369587850</li>
                        </ul>
                    </div>
                    <div className="contact-column">
                        <ul>
                            <li><strong>City:</strong> Jl. Parsoburan Desa Sitorus Godang, Kecamatan Silaen, Indonesia</li>
                            <li><strong>Email:</strong> <a href="mailto:riskianaomi17@gmail.com">riskianaomi17@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <h3>Skills</h3>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
