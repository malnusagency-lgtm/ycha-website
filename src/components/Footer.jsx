import React from 'react';
import { Globe, Users } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '4rem 0 2rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>YHCA</h3>
                        <p style={{ opacity: 0.8 }}>
                            Young Heroes Climate Advocates.<br />
                            Empowering the next generation of environmental leaders.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', opacity: 0.8 }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/">Home</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/about">About Us</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/mission">Our Mission</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/join">Join the Movement</a></li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem', opacity: 0.8, display: 'flex', gap: '0.8rem' }}>
                                <Globe size={18} color="var(--color-accent)" />
                                <span>Main Office: Regional Youth Hub, Nairobi, Kenya</span>
                            </li>
                            <li style={{ marginBottom: '1rem', opacity: 0.8, display: 'flex', gap: '0.8rem' }}>
                                <Users size={18} color="var(--color-accent)" />
                                <span>info@ycha-africa.org</span>
                            </li>
                        </ul>
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                            {/* Social Icons Placeholders */}
                            <span>FB</span>
                            <span>IG</span>
                            <span>TW</span>
                        </div>
                    </div>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Transparency</h4>
                        <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.6 }}>
                            Registered NGO in accordance with regional youth advocacy statutes. <br />
                            Tax Exemption ID: [Placeholder for Reg #]
                        </p>
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    opacity: 0.6,
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} Young Heroes Climate Advocates. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
