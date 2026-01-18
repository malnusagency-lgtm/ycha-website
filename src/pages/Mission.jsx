import React from 'react';
import missionImg from '../assets/images/mission-1.jpg';

const Mission = () => {
    return (
        <div className="mission-page" style={{ paddingTop: '80px' }}>
            <div className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center', padding: '6rem 0' }}>
                <div className="container">
                    <h1 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Our Mission</h1>
                    <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                        "To inspire, educate, and empower young people to become leaders in the fight against climate change."
                    </p>
                </div>
            </div>

            <div className="container section">
                <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Our Approach</h2>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li style={{ marginBottom: '1.5rem', display: 'flex' }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginRight: '1rem' }}>01</span>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem' }}>Education</h3>
                                    <p>Workshops and seminars in schools to raise awareness.</p>
                                </div>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex' }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginRight: '1rem' }}>02</span>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem' }}>Conservation</h3>
                                    <p>Tree planting, beach cleanups, and habitat restoration.</p>
                                </div>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex' }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginRight: '1rem' }}>03</span>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem' }}>Innovation</h3>
                                    <p>Supporting youth-led tech solutions for sustainability.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img src={missionImg} alt="Our Mission" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
