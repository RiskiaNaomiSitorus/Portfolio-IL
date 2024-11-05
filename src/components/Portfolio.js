// src/components/Portfolio.js
import React from 'react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'DinoPedia Project',
        organization: 'Institut Teknologi DEL',
        role: '',
        date: 'Mar 2024',
        description: 'This project is part of the practicum for the Mobile Application Development course. In this particular section, I developed "DinoPedia," an application that serves as an encyclopedia for dinosaurs. It includes a comprehensive list of dinosaur families and their respective members. To enhance the user experience and ensure efficient data display, I implemented RecyclerView for organizing the information effectively. This is just one component of the broader practicum tasks completed throughout the course.',
        imageUrl: '/assets/dinopedia.jpg',
    },
    {
        id: 2,
        title: 'Project Admin Mutu Internal (AMI)',
        organization: 'Institut Teknologi DEL',
        role: 'Designer',
        date: 'Jan 2024 - present',
        description: 'This project is one of the large projects we are developing. The goal of this project is that it can be used directly by the entire campus.',
        imageUrl: '/assets/himasti.jpg',
        link: 'https://www.figma.com/design/7WJAGEKUUKoZcfqHzcvxRO/SPM?node-id=0-1&node-type=canvas&t=0aPnHrasAy0uob4o-0'
    },
    {
        id: 3,
        title: 'Employee Overtime Management System',
        organization: 'PT Tolan Tiga Indonesia (SIPEF)',
        role: 'Web Developer',
        date: 'Jun 2024 - Aug 2024',
        description: 'This project was part of my internship at PT Tolan Tiga Indonesia (SIPEF). I developed a web-based application for managing employee overtime (lembur karyawan), aimed at improving the company\'s operational efficiency. The project was completed over a period of 3 months and has been successfully implemented within the company for daily use. As a Web Developer, I was responsible for both the front-end and back-end development of the system.',
        imageUrl: '/assets/tolan.png',
    },
    {
        id: 4,
        title: 'Informatics Undergraduate Student Association Project',
        organization: 'Institut Teknologi DEL',
        role: 'Front-End',
        date: 'Dec 2023',
        description: 'This project is one of the big projects in the Web Based Application Development course. This project aims to create a website for the Informatics Undergraduate Association that can be accessed by all members of the Informatics Undergraduate Association. Here, I played a role in developing the front end of this website.',
        link: 'http://himasti.delcom.org/',
        imageUrl: '/assets/himasti.jpg',
    },
    {
        id: 5,
        title: 'Micro Challenges: Agrarian Project',
        organization: 'Stupen Infinite Learning',
        role: '',
        date: 'Oct 2023',
        description: 'This is a micro challenge assignment from Stupen Infinite Learning on the topic of agriculture. The project includes design concepts focused on agrarian themes and showcases modern UI/UX principles. The goal is to create a user-friendly and visually appealing design that highlights agricultural practices.',
        link: 'https://www.figma.com/design/yvFNz9sUhtIN4DC7VPMvpQ/Untitled?node-id=0-1&node-type=canvas&t=HmSPNrhSFoQ7uiHt-0',
        imageUrl: '/assets/agraris.jpg',
    },
    {
        id: 6,
        title: 'Personal Portfolio Website',
        organization: 'Institut Teknologi DEL',
        role: 'Personal Project',
        date: 'Aug 2023',
        description: 'This is a personal project created for the Web Application Development course. The goal was to design and develop a personal portfolio website to showcase my skills and projects. The site demonstrates my knowledge in front-end web development and UI/UX design principles.',
        link: 'https://portfolioriskia.vercel.app/',
        imageUrl: '/assets/port.jpg',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <p>A showcase of my latest work and projects.</p>
            {/* Test image to verify image loading */}
            <img src="/assets/dinopedia.jpg" alt="Test Image" />
            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-organization">
                            {project.organization} - <em>{project.role}</em>
                        </p>
                        <p className="project-date">{project.date}</p>
                        <p className="project-description">{project.description}</p>
                        {project.link && (
                            <a 
                                href={project.link} 
                                className="project-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
