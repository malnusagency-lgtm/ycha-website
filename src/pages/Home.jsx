import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why We Act</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                        Climate change is the defining crisis of our time. It happens quickly, and its effects are already being felt.
                        But there is hope. We believe in the power of youth to drive change, innovate solutions, and hold leaders accountable.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        textAlign: 'left',
                        marginTop: '3rem'
                    }}>
                        <div className="card">
                            <h3 style={{ color: 'var(--color-secondary)' }}>Awareness</h3>
                            <p>Educating peers and communities about the realities of climate science and sustainable living.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ color: 'var(--color-secondary)' }}>Action</h3>
                            <p>Organizing cleanups, tree plantings, and local initiatives to make a tangible difference.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ color: 'var(--color-secondary)' }}>Advocacy</h3>
                            <p>Speaking up for policy changes and sustainable practices at local and national levels.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Join the Global Movement</h2>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                            You don't need to be an expert to be a hero. All it takes is the will to make a difference.
                            Join us today and be part of the solution.
                        </p>
                        <a href="/join" className="btn" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}>
                            Get Involved
                        </a>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        {/* Placeholder for another image */}
                        <div style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            height: '300px',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            Image Placeholder
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
