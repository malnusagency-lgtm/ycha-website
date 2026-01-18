import React from 'react';
import aboutImg from '../assets/images/about-1.jpg';

const About = () => {
    return (
        <div className="about-page" style={{ paddingTop: '80px' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Us</h1>
                <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img src={aboutImg} alt="About YHCA" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Who We Are</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Young Heroes Climate Advocates (YHCA) is a youth-led organization committed to protecting our planet.
                            Founded in 2023, we have grown from a small group of concerned students to a regional movement.
                        </p>
                        <p>
                            We believe that age is no barrier to impact. Through education, direct action, and advocacy,
                            we are building a future where sustainability is not just a goal, but a way of life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
