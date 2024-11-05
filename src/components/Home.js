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
                        Institut Teknologi Del. 
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Home;
