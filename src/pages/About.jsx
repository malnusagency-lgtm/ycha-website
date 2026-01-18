import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about-1.jpg';

const About = () => {
    return (
        <motion.div
            className="about-page"
            style={{ paddingTop: '80px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container" style={{ padding: '4rem 0' }}>
                <motion.h1
                    style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem' }}
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                >
                    About Us
                </motion.h1>
                <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <motion.div
                        style={{ flex: 1, minWidth: '300px' }}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={aboutImg} alt="About YHCA" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%' }} />
                    </motion.div>
                    <motion.div
                        style={{ flex: 1, minWidth: '300px' }}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '2rem' }}>Who We Are</h2>
                        <p style={{ marginBottom: '1.2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Young Heroes Climate Advocates (YHCA) is a youth-led organization committed to protecting our planet.
                            Founded in 2023, we have grown from a small group of concerned students to a regional movement.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            We believe that age is no barrier to impact. Through education, direct action, and advocacy,
                            we are building a future where sustainability is not just a goal, but a way of life.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;

