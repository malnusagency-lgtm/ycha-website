import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
    return (
        <header className="hero" style={{
            backgroundImage: `linear-gradient(rgba(15, 76, 58, 0.6), rgba(15, 76, 58, 0.4)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            marginTop: '0' // Full screen now
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
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: 'var(--color-accent)',
                            display: 'block',
                            marginBottom: '1rem'
                        }}
                    >
                        Join the Movement
                    </motion.span>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        marginBottom: '1.5rem',
                        color: 'var(--color-bg)',
                        textShadow: '0 4px 10px rgba(0,0,0,0.4)',
                        lineHeight: 1.1
                    }}>
                        Protecting Our <span style={{ color: 'var(--color-accent)' }}>Planet</span> Today for a Greener <span style={{ color: 'var(--color-accent)' }}>Tomorrow</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                        marginBottom: '2.5rem',
                        fontWeight: '400',
                        opacity: 0.9,
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem'
                    }}>
                        Young Heroes Climate Advocates is dedicated to raising awareness, driving policy change, and protecting our environment.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/join" className="btn btn-primary" style={{
                                backgroundColor: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                fontSize: '1.2rem',
                                padding: '1rem 2.5rem',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                            }}>
                                Become a Hero
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/about" className="btn" style={{
                                backgroundColor: 'transparent',
                                border: '2px solid white',
                                color: 'white',
                                fontSize: '1.2rem',
                                padding: '1rem 2.5rem'
                            }}>
                                Our Impact
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .hero { height: 80vh; }
        }
      `}</style>
        </header>
    );
};

export default Hero;
