import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
    useEffect(() => {
        // Apply animation class to profile container on mount
        const profileContainer = document.querySelector('.profile-container');
        profileContainer.classList.add('animate-profile');
    }, []);

    return (
        <section id="home" className="home">
            <div className="profile-container">
                <img src={`${process.env.PUBLIC_URL}/assets/gmbr2.jpg`} alt="Profile" className="profile-picture" />
                <div className="text-content">
                    <h2>Profile</h2>
                    <h1>Welcome to My Portfolio</h1>
                    <p>
                        Hi, I’m <strong>Riskia Naomi Sitorus</strong>, an enthusiastic Informatics undergraduate at 
                        Institut Teknologi Del. Driven by curiosity and creativity, I’m dedicated to exploring innovative 
                        solutions through technology. From coding challenges to impactful projects, I’m constantly 
                        pushing boundaries to turn complex ideas into practical solutions. Welcome to my portfolio—here, 
                        you’ll find a blend of ambition, skill, and a passion for shaping the future of technology.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Home;
