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

                <div className="section-header">
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
                        style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', marginTop: '1rem', fontWeight: 900 }}
                    >
                        Programs & <span style={{ color: 'var(--color-primary)' }}>Impact</span>
                    </motion.h1>
                    <p style={{ maxWidth: '700px', margin: '2rem auto', fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                        We translate passion into measurable progress through standardized sustainability frameworks and community-led execution across the continent.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 10vw, 6rem)' }}>
                    {programs.map((prog, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="program-card"
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 'clamp(2rem, 5vw, 4rem)',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                padding: 'clamp(1.5rem, 5vw, 4rem)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                                flexDirection: 'row' // Desktop default, handled by CSS for alternation
                            }}
                        >

                            <div className="mobile-center" style={{ flex: 1.2, minWidth: '280px', width: '100%' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    padding: '1rem',
                                    backgroundColor: `${prog.color}10`,
                                    color: prog.color,
                                    borderRadius: '1.2rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <prog.icon size={32} />
                                </div>
                                <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1.2rem', fontWeight: 900, lineHeight: 1.1 }}>{prog.title}</h2>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                                    {prog.description}
                                </p>

                                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'inherit' }}>
                                    {prog.sdgs.map((sdg, s) => (
                                        <span key={s} style={{
                                            padding: '0.4rem 0.8rem',
                                            backgroundColor: '#f8fafc',
                                            borderRadius: '2rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: 'var(--color-secondary)',
                                            border: '1px solid #e2e8f0'
                                        }}>
                                            {sdg}
                                        </span>
                                    ))}
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1.2rem 1.5rem',
                                    backgroundColor: 'var(--color-primary)',
                                    borderRadius: '1.2rem',
                                    color: 'white',
                                    boxShadow: '0 10px 20px rgba(15, 76, 58, 0.2)',
                                    justifyContent: 'center'
                                }}>
                                    <CheckCircle size={20} color="var(--color-accent)" />
                                    <span style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.5px' }}>{prog.impact}</span>
                                </div>
                            </div>
                            <div style={{ flex: 1, minWidth: '280px', width: '100%' }}>
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <img
                                        src={prog.image}
                                        alt={prog.title}
                                        style={{
                                            width: '100%',
                                            height: 'clamp(250px, 40vh, 450px)',
                                            objectFit: 'cover',
                                            borderRadius: 'var(--radius-lg)',
                                            boxShadow: 'var(--shadow-lg)',
                                            position: 'relative',
                                            zIndex: 1
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <style>{`
                    @media (min-width: 992px) {
                        .program-card:nth-child(even) {
                            flex-direction: row-reverse !important;
                        }
                    }
                    @media (max-width: 768px) {
                        .program-card {
                            flex-direction: column !important;
                            text-align: center;
                        }
                    }
                `}</style>

            </div>
        </motion.div>
    );
};

export default Programs;
