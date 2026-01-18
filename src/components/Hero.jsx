import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
    return (
        <header className="hero" style={{
            backgroundImage: `linear-gradient(rgba(15, 76, 58, 0.65), rgba(15, 76, 58, 0.45)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            marginTop: '0',
            padding: '2rem 1rem'
        }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        style={{
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                            fontWeight: 800,
                            color: 'var(--color-accent)',
                            display: 'block',
                            marginBottom: '1rem'
                        }}
                    >
                        Join the Movement
                    </motion.span>

                    <h1 style={{
                        fontSize: 'clamp(2.2rem, 10vw, 4.5rem)',
                        marginBottom: '1.5rem',
                        color: 'var(--color-bg)',
                        textShadow: '0 4px 15px rgba(0,0,0,0.5)',
                        lineHeight: 1.1,
                        fontWeight: 900
                    }}>
                        Protecting Our <span style={{ color: 'var(--color-accent)' }}>Planet</span> <br className="desktop-only" /> Today for a Greener <span style={{ color: 'var(--color-accent)' }}>Tomorrow</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 4vw, 1.4rem)',
                        marginBottom: '3rem',
                        fontWeight: '500',
                        opacity: 0.95,
                        maxWidth: '750px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.6
                    }}>
                        Young Heroes Climate Advocates is empowering African youth to lead reforestation, policy change, and environmental education.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ flex: '1 1 200px', maxWidth: '300px' }}>
                            <Link to="/join" className="btn btn-primary" style={{
                                backgroundColor: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                                padding: '1rem 0',
                                width: '100%',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                                fontWeight: 800
                            }}>
                                Become a Hero
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ flex: '1 1 200px', maxWidth: '300px' }}>
                            <Link to="/about" className="btn" style={{
                                backgroundColor: 'transparent',
                                border: '2px solid white',
                                color: 'white',
                                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                                padding: '1rem 0',
                                width: '100%',
                                fontWeight: 600
                            }}>
                                Our Impact
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .hero { min-height: 90vh !important; }
        }
      `}</style>
        </header>
    );
};


export default Hero;
