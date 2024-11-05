import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section className="resume-section">
            <div className="resume">
                <h2 className="resume-title">Resume</h2>
                <p className="resume-description">
                    I am a student at IT Del from the Faculty of Informatics and Electrical Engineering, pursuing a Bachelor's degree in Informatics.
                </p>
                <div className="resume-container">
                    <div className="resume-column">
                        <h3 className="resume-section-title">Summary</h3>
                        <div className="resume-item">
                            <h4 className="resume-item-title">Riskia Naomi Sitorus</h4>
                            <p>
                                An Informatics student at Institut Teknologi Del with a deep interest in the IT world. 
                                Trained in using several programming languages and supporting applications to create 
                                projects such as building applications or websites.
                            </p>
                            <ul className="contact-details">
                                <li>Jl. Parsoburan Desa Sitorus Godang, Kecamatan Silaen, Indonesia</li>
                                <li>(+62) 82369587850</li>
                                <li><a href="mailto:riskianaomi17@gmail.com">riskianaomi17@gmail.com</a></li>
                            </ul>
                        </div>
                        <h3 className="resume-section-title">Education</h3>
                        <div className="resume-item">
                            <h4 className="resume-item-title">Bachelor of Informatics Engineering</h4>
                            <p>2021 - 2025 | Institut Teknologi Del</p>
                            <p>Faculty of Informatics and Electrical Engineering</p>
                        </div>
                    </div>
                    
                    <div className="resume-column">
                        <h3 className="resume-section-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4 className="resume-item-title">Secretary of Programming Division - Del Cyber Security Club (DCSC)</h4>
                            <p>2021 | Institut Teknologi Del</p>
                            <ul>
                                <li>Taking minutes at every meeting held</li>
                                <li>Designing the agenda and organizing meeting schedules</li>
                                <li>Ensuring the team can participate in activities</li>
                                <li>Creating activity reports</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4 className="resume-item-title">Online Entrepreneur</h4>
                            <p>2020 | Online</p>
                            <ul>
                                <li>E-Commerce, Dropshipping, Affiliate Marketing</li>
                                <li>Freelancing, Niche Online Communities, Virtual Events</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4 className="resume-item-title">Head of Event Division - Student Election Commission</h4>
                            <p>2023 | Institut Teknologi Del</p>
                            <ul>
                                <li>Creating event timelines and organizing agendas</li>
                                <li>Managing debate events, drawing candidate numbers, inaugurations, and dissolving organizations</li>
                                <li>Serving as MC during the inauguration and dissolution events</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4 className="resume-item-title">Vice Chairman - Kominfo in Informatics Undergraduate Student Association</h4>
                            <p>Sep 2023 - Sep 2024 | Institut Teknologi Del</p>
                            <ul>
                                <li>KOMINFO is one of the divisions tasked with handling the association's communication and information
                                    interests, as a bridge between other division activities, utilizing communication media as the
                                    organization's information center. Manage social media accounts from Himasti IT Del
                                    Manage and disseminate information related to Himasti IT Del activities through social media accounts.
                                    Able to manage my social media such as IG, YT etc. Have creative posts and have broad insight.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Certificates Section */}
                <h3 className="resume-section-title">Certificates</h3>
                <div className="certificates-container">
                <img src={`${process.env.PUBLIC_URL}/assets/dsc_partisipan_RISKIA_NAOMI_SITORUS.png`} alt="DCSC Partisipan Riskia Naomi Sitorus" className="certificate-image" />
                <img src={`${process.env.PUBLIC_URL}/assets/Panitia KPU.jpeg`} alt="Panitia KPU" className="certificate-image" />
                <img src={`${process.env.PUBLIC_URL}/assets/RISKIA NAOMI SITORUS _page-0001.jpg`} alt="Riskia Naomi Sitorus Page 1" className="certificate-image" />
                <img src={`${process.env.PUBLIC_URL}/assets/Riskia Naomi Sitorus.jpg`} alt="Riskia Naomi Sitorus" className="certificate-image" />
                <img src={`${process.env.PUBLIC_URL}/assets/sertif1.jpg`} alt="Certificate 1" className="certificate-image" />
                <img src={`${process.env.PUBLIC_URL}/assets/sertif2.jpg`} alt="Certificate 2" className="certificate-image" />
                <img src={`${process.env.PUBLIC_URL}/assets/sertif3.jpg`} alt="Certificate 3" className="certificate-image" />
                <img src={`${process.env.PUBLIC_URL}/assets/WhatsApp Image 2023-10-04 at 12.21.55.jpeg`} alt="WhatsApp Image 3" className="certificate-image" />
                <img src={`${process.env.PUBLIC_URL}/assets/WhatsApp Image 2023-10-04 at 11.19.47 (1).jpeg`} alt="WhatsApp Image 2" className="certificate-image" />
                <img src={`${process.env.PUBLIC_URL}/assets/WhatsApp Image 2023-10-04 at 11.18.54.jpeg`} alt="WhatsApp Image 1" className="certificate-image" />
        </div>
            </div>
        </section>
    );
};

export default Resume;
