import React from 'react';
import { Globe, Users, Facebook, Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: 'clamp(3rem, 8vw, 5rem) 0 2rem',
            borderTop: '4px solid var(--color-accent)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <h3 style={{
                            marginBottom: '1.5rem',
                            color: 'var(--color-accent)',
                            fontSize: '1.5rem',
                            fontWeight: '800'
                        }}>
                            Young Heroes <br />
                            <span style={{ color: 'white', opacity: 0.9, fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Climate Advocates
                            </span>
                        </h3>
                        <p style={{ opacity: 0.8, lineHeight: '1.6', fontSize: '0.95rem' }}>
                            A youth-led movement dedicated to environmental conservation, reforestation,
                            and climate advocacy across Kenya and Africa.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'white', fontWeight: '700' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Home', 'About Us', 'Programs', 'Our Mission', 'Join Now'].map((link, i) => (
                                <li key={i} style={{ marginBottom: '0.8rem' }}>
                                    <a href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`} style={{
                                        color: 'white',
                                        opacity: 0.7,
                                        textDecoration: 'none',
                                        transition: 'opacity 0.2s'
                                    }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.7'}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: '700' }}>Connect With Us</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1.2rem', opacity: 0.9, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <MapPin size={20} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                                <span style={{ fontSize: '0.9rem' }}>Regional Youth Hub, <br />Nairobi, Kenya</span>
                            </li>
                            <li style={{ marginBottom: '1.2rem', opacity: 0.9, display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Mail size={20} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                                <span style={{ fontSize: '0.9rem' }}>info@ycha-africa.org</span>
                            </li>
                        </ul>

                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1.2rem' }}>
                            <a href="#" style={{ background: 'white', padding: '0.6rem', borderRadius: '50%', display: 'flex', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <Facebook size={20} color="#1877F2" fill="#1877F2" />
                            </a>
                            <a href="#" style={{ background: 'white', padding: '0.6rem', borderRadius: '50%', display: 'flex', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <Instagram size={20} color="#E4405F" />
                            </a>
                            <a href="#" style={{ background: 'white', padding: '0.6rem', borderRadius: '50%', display: 'flex', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <Twitter size={20} color="#1DA1F2" fill="#1DA1F2" />
                            </a>
                            <a href="#" style={{ background: 'white', padding: '0.6rem', borderRadius: '50%', display: 'flex', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <Linkedin size={20} color="#0077B5" fill="#0077B5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: '700' }}>Transparency</h4>
                        <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            YHCA is a registered NGO committed to the highest standards of fiscal accountability.
                        </p>
                        <div style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)' }}>
                            <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>Reg No: [PENDING/KE/2026]</p>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    opacity: 0.5,
                    fontSize: '0.85rem'
                }}>
                    &copy; {new Date().getFullYear()} Young Heroes Climate Advocates. <br className="mobile-only" />
                    Empowering Youth for a Greener Africa.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

