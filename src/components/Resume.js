// src/components/Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section className="resume">
            <h2 className="resume-title">Resume</h2>
            <p className="resume-description">
                Saya Mahasiswi IT Del dengan Fakultas Informatika dan Teknik Elektro (FITE) Program Studi S1 Informatika.
            </p>
            <div className="resume-container">
                <div className="resume-column">
                    <h3 className="resume-section-title">Summary</h3>
                    <div className="resume-item">
                        <h4 className="resume-item-title">Riskia Naomi Sitorus</h4>
                        <p>
                            Mahasiswa Informatika dari Institut Teknologi Del. Memiliki ketertarikan mendalam dalam dunia IT. 
                            Terlatih dalam menggunakan beberapa bahasa pemrograman dan aplikasi pendukung dalam menciptakan 
                            proyek seperti membangun aplikasi atau website.
                        </p>
                        <ul className="contact-details">
                            <li>Jl. Parsoburan Desa Sitorus Godang, Kecamatan Silaen, Indonesia</li>
                            <li>(+62) 82369587850</li>
                            <li><a href="mailto:riskianaomi17@gmail.com">riskianaomi17@gmail.com</a></li>
                        </ul>
                    </div>
                    <h3 className="resume-section-title">Education</h3>
                    <div className="resume-item">
                        <h4 className="resume-item-title">Sarjana Teknik Informatika</h4>
                        <p>2021 - 2025 | Institut Teknologi Del</p>
                        <p>Fakultas Informatika dan Teknik Elektro</p>
                    </div>
                </div>
                
                <div className="resume-column">
                    <h3 className="resume-section-title">Professional Experience</h3>
                    <div className="resume-item">
                        <h4 className="resume-item-title">Sekretaris Div. Programming - Del Cyber Security Club (DCSC)</h4>
                        <p>2021 | Institut Teknologi Del</p>
                        <ul>
                            <li>Notulen setiap pertemuan yang diadakan</li>
                            <li>Merancang tata acara dan mengatur jadwal pertemuan</li>
                            <li>Memastikan tim dapat mengikuti kegiatan</li>
                            <li>Membuat laporan kegiatan</li>
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
                        <h4 className="resume-item-title">Kadiv. Divisi Acara - Komisi Pemilihan Umum Himpunan Mahasiswa</h4>
                        <p>2023 | Institut Teknologi Del</p>
                        <ul>
                            <li>Membuat timeline acara dan menyusun tata acara</li>
                            <li>Mengatur acara debat, pencabutan nomor paslon, pelantikan, dan pembubaran kepengurusan</li>
                            <li>MC dalam acara pelantikan dan pembubaran</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Certificates Section */}
            <h3 className="resume-section-title">Certificates</h3>
            <div className="certificates-container">
            <img src={`${process.env.PUBLIC_URL}/assets/sertif1.jpg`} alt="Certificate 1" className="certificate-image" />
            <img src={`${process.env.PUBLIC_URL}/assets/sertif2.jpg`} alt="Certificate 2" className="certificate-image" />
            <img src={`${process.env.PUBLIC_URL}/assets/sertif3.jpg`} alt="Certificate 3" className="certificate-image" />
            <img src={`${process.env.PUBLIC_URL}/assets/sertif1.jpg`} alt="Certificate 1" className="certificate-image" />
            <img src={`${process.env.PUBLIC_URL}/assets/sertif2.jpg`} alt="Certificate 2" className="certificate-image" />
            <img src={`${process.env.PUBLIC_URL}/assets/sertif3.jpg`} alt="Certificate 3" className="certificate-image" />
        </div>

        </section>
    );
};

export default Resume;
