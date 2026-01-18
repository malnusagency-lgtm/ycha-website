import React from 'react';

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
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Contact Us</h4>
                        <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>info@youngheroes.org</p>
                        <p style={{ opacity: 0.8 }}>+1 (555) 123-4567</p>
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                            {/* Social Icons Placeholders */}
                            <span>FB</span>
                            <span>IG</span>
                            <span>TW</span>
                        </div>
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
