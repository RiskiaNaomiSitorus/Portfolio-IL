import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="profile-container">
                {/* Gunakan jalur absolut ke file gambar di public */}
                <img src="/assets/gmbr2.jpg" alt="Profile" className="profile-picture" />
                <div className="text-content">
                    <h2>Profile</h2>
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hi, I'm <strong>Riskia Naomi Sitorus</strong>, a student at Institut Teknologi Del, Program Study S1 Informatics.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;
