import React from 'react';
import './Service.css';

const Services = () => {
    return (
        <section id="services" className="services">
            <h2 className="services-title">Services</h2>
            <div className="service-grid">
                <div className="service-item">
                    <div className="service-icon">&#128187;</div>
                    <h3>Web Design</h3>
                    <p>Web design adalah proses merancang dan menciptakan tampilan visual dari suatu halaman web. Tujuannya adalah untuk menciptakan antarmuka yang menarik, fungsional, dan mudah digunakan bagi pengguna.</p>
                </div>
                <div className="service-item">
                    <div className="service-icon">&#128296;</div>
                    <h3>Web Development</h3>
                    <p>Web development adalah proses pembuatan dan pengembangan situs web. Ini melibatkan pembangunan fungsionalitas dan interaktivitas dari suatu situs web, mulai dari struktur dasar hingga fitur kompleks.</p>
                </div>
                <div className="service-item">
                    <div className="service-icon">&#128241;</div>
                    <h3>Applications</h3>
                    <p>Aplikasi dapat diakses melalui perangkat yang terhubung ke internet, dan dapat diunduh atau dipasang melalui toko aplikasi seperti Apple App Store, Google Play Store, dan lainnya.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
