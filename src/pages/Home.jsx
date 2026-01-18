import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ImpactCounter from '../components/ImpactCounter';
import Gallery from '../components/Gallery';

const Home = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="home-page">
            <Hero />

            <motion.section
                className="section"
                style={{ backgroundColor: 'var(--color-white)' }}
                {...fadeInUp}
            >
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why We Act</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                        Climate change is the defining crisis of our time. It happens quickly, and its effects are already being felt.
                        But there is hope. We believe in the power of youth to drive change, innovate solutions, and hold leaders accountable.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '2rem',
                        textAlign: 'left',
                        marginTop: '3rem'
                    }}>
                        {[
                            { title: "Awareness", text: "Educating peers and communities about the realities of climate science and sustainable living." },
                            { title: "Action", text: "Organizing cleanups, tree plantings, and local initiatives to make a tangible difference." },
                            { title: "Advocacy", text: "Speaking up for policy changes and sustainable practices at local and national levels." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="card"
                                whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
                                style={{
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-md)',
                                    background: '#f8fafc',
                                    transition: 'box-shadow 0.3s ease'
                                }}
                            >
                                <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <ImpactCounter />
            <Gallery />

            <motion.section
                className="section"
                style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Join the Global Movement</h2>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                            You don't need to be an expert to be a hero. All it takes is the will to make a difference.
                            Join us today and be part of the solution.
                        </p>
                        <motion.a
                            href="/join"
                            className="btn"
                            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Involved
                        </motion.a>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <motion.div
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                height: '350px',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px dashed rgba(255,255,255,0.2)'
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span style={{ opacity: 0.5 }}>Youth Action Image</span>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
