import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about-1.jpg';

const About = () => {
    return (
        <motion.div
            className="about-page"
            style={{ paddingTop: 'clamp(80px, 15vh, 120px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container" style={{ padding: 'clamp(2rem, 5vw, 6rem) 1rem' }}>

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

                {/* Hardening: Leadership Section */}
                <div style={{ marginTop: '6rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Leadership & Governance</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: "Executive Director", role: "Climate Strategy & Policy", bio: "Leading regional advocacy for sustainable development since 2021." },
                            { name: "Head of Operations", role: "Field Conservation", bio: "Expert in local reforestation and community engagement strategies." },
                            { name: "Communications Lead", role: "Youth Literacy", bio: "Dedicated to amplifying youth voices across African media platforms." }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                style={{
                                    padding: '2rem',
                                    backgroundColor: 'white',
                                    borderRadius: 'var(--radius-md)',
                                    boxShadow: 'var(--shadow-md)',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{ width: '100px', height: '100px', backgroundColor: '#eee', borderRadius: '50%', margin: '0 auto 1.5rem' }}></div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{member.name}</h3>
                                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>{member.role}</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Hardening: Values / Trust */}
                <div style={{ marginTop: '6rem', backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white' }}>Our Core Values</h2>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                        {[
                            { title: "Transparency", text: "We provide open reports on all financial and project-based activities." },
                            { title: "Youth-Led", text: "Every decision is driven by the energy and innovation of young leaders." },
                            { title: "Science-Driven", text: "Our conservation efforts are guided by rigorous climate science." }
                        ].map((v, i) => (
                            <div key={i} style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.2rem' }}>{v.title}</h4>
                                <p style={{ fontSize: '1rem', opacity: 0.9 }}>{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
