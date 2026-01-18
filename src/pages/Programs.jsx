import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Leaf, Megaphone, CheckCircle } from 'lucide-react';

// Image imports from existing assets
import eduImg from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.54.24 PM.jpeg'; // Education/Literacy
import consImg from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.16.14 PM.jpeg'; // Conservation/Trees
import polImg from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.02.46 AM.jpeg'; // Policy/Advocacy

const programs = [
    {
        title: "Eco-Literacy Network",
        description: "Equipping the next generation with climate science, environmental ethics, and sustainable skills through school-based clubs and workshops.",
        impact: "Over 5,000 students reached across 50 schools.",
        sdgs: ["Goal 4: Quality Education", "Goal 13: Climate Action"],
        icon: BookOpen,
        color: "#3B82F6",
        image: eduImg
    },
    {
        title: "Green Canopy Africa",
        description: "A large-scale reforestation and sustainable agriculture program focusing on indigenous tree species and community-led conservation.",
        impact: "12,000+ trees planted in degraded landscapes.",
        sdgs: ["Goal 15: Life on Land", "Goal 13: Climate Action"],
        icon: Leaf,
        color: "#10B981",
        image: consImg
    },
    {
        title: "Youth Policy Lab",
        description: "Empowering young advocates to engage with policymakers, draft environmental local laws, and represent youth at international climate summits.",
        impact: "3 regional policy recommendations adopted.",
        sdgs: ["Goal 16: Peace & Justice", "Goal 17: Partnerships"],
        icon: Megaphone,
        color: "#F59E0B",
        image: polImg
    }
];

const Programs = () => {
    return (
        <motion.div
            className="programs-page"
            style={{ paddingTop: 'clamp(80px, 15vh, 120px)', backgroundColor: '#f9fafb', minHeight: '100vh' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) 1rem' }}>

                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}
                    >
                        Our Work
                    </motion.span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: '3.5rem', marginTop: '1rem' }}
                    >
                        Programs & <span style={{ color: 'var(--color-primary)' }}>Impact</span>
                    </motion.h1>
                    <p style={{ maxWidth: '700px', margin: '2rem auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        We translate passion into measurable progress through standardized sustainability frameworks and community-led execution across the continent.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {programs.map((prog, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 'clamp(1rem, 5vw, 3rem)',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                padding: 'clamp(1.5rem, 5vw, 3rem)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)',
                                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'
                            }}
                        >

                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    padding: '1rem',
                                    backgroundColor: `${prog.color}15`,
                                    color: prog.color,
                                    borderRadius: '1rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <prog.icon size={32} />
                                </div>
                                <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>{prog.title}</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                                    {prog.description}
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                    {prog.sdgs.map((sdg, s) => (
                                        <span key={s} style={{
                                            padding: '0.3rem 0.8rem',
                                            backgroundColor: '#f3f4f6',
                                            borderRadius: '0.4rem',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: 'var(--color-secondary)'
                                        }}>
                                            #{sdg}
                                        </span>
                                    ))}
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    padding: '1rem 1.5rem',
                                    backgroundColor: '#f0fdf4',
                                    borderRadius: '0.8rem',
                                    border: '1px solid #dcfce7'
                                }}>
                                    <CheckCircle size={20} color="#10B981" />
                                    <span style={{ fontWeight: 700, color: '#064e3b' }}>{prog.impact}</span>
                                </div>
                            </div>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <img
                                    src={prog.image}
                                    alt={prog.title}
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        objectFit: 'cover',
                                        borderRadius: 'var(--radius-md)',
                                        boxShadow: 'var(--shadow-lg)'
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Programs;
