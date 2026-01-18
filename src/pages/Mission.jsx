import React from 'react';
import { motion } from 'framer-motion';
import missionImg from '../assets/images/mission-1.jpg';

const Mission = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className="mission-page" style={{ paddingTop: '80px' }}>
            <motion.div
                className="section"
                style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center', padding: '6rem 0' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container">
                    <h1 style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontSize: '3rem' }}>Our Mission</h1>
                    <p style={{ fontSize: '1.4rem', maxWidth: '850px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
                        "To inspire, educate, and empower young people to become leaders in the fight against climate change and environmental degradation."
                    </p>
                </div>
            </motion.div>

            <div className="container section">
                <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
                    <motion.div
                        style={{ flex: 1, minWidth: '300px' }}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h2 style={{ marginBottom: '2rem', fontSize: '2.2rem' }}>Our Strategic Approach</h2>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            {[
                                { id: '01', title: 'Education', text: 'Workshops, training sessions, and interactive seminars in schools to raise awareness and build climate literacy.' },
                                { id: '02', title: 'Conservation', text: 'Direct field work including tree planting, sustainable agriculture initiatives, and local ecosystem restoration.' },
                                { id: '03', title: 'Innovation', text: 'Encouraging and supporting youth-led sustainable startups and green technology projects.' }
                            ].map((approach, i) => (
                                <motion.li key={i} variants={item} style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-start' }}>
                                    <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem', fontWeight: 800, marginRight: '1.5rem', background: 'var(--color-primary)', padding: '0.2rem 0.8rem', borderRadius: '4px' }}>
                                        {approach.id}
                                    </span>
                                    <div>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{approach.title}</h3>
                                        <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>{approach.text}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        style={{ flex: 1, minWidth: '300px' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={missionImg} alt="Our Mission" style={{ borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', width: '100%' }} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
