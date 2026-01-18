import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
    return (
        <header className="hero" style={{
            backgroundImage: `linear-gradient(rgba(15, 76, 58, 0.7), rgba(15, 76, 58, 0.5)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            marginTop: '60px' // for navbar
        }}>
            <div className="container" style={{ maxWidth: '800px', animation: 'fadeIn 1s ease-out' }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    marginBottom: '1rem',
                    color: 'var(--color-bg)',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                    Empowering Youth for a Sustainable Future
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    marginBottom: '2rem',
                    fontWeight: '400',
                    opacity: 0.9
                }}>
                    Young Heroes Climate Advocates is dedicated to raising awareness, driving action, and protecting our planet for generations to come.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/join" className="btn" style={{
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-primary)',
                        fontSize: '1.1rem'
                    }}>
                        Become a Hero
                    </Link>
                    <Link to="/about" className="btn" style={{
                        backgroundColor: 'transparent',
                        border: '2px solid white',
                        color: 'white',
                        fontSize: '1.1rem'
                    }}>
                        Learn More
                    </Link>
                </div>
            </div>
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero h1 { fontSize: 2.5rem !important; }
        }
      `}</style>
        </header>
    );
};

export default Hero;
