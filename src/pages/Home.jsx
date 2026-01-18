import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ImpactCounter from '../components/ImpactCounter';
import Gallery from '../components/Gallery';
import UpcomingEvents from '../components/UpcomingEvents';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import { Globe, Users, Shield, Award } from 'lucide-react';

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

            {/* Institutional Hardening: SDG Alignment Ribbon */}
            <section style={{ backgroundColor: '#111', color: 'white', padding: '1rem 0', borderTop: '4px solid var(--color-accent)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7 }}>Committed to SDGs:</span>
                    {["Goal 4: Quality Education", "Goal 13: Climate Action", "Goal 15: Life on Land", "Goal 17: Partnerships"].map((sdg, i) => (
                        <span key={i} style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-accent)' }}>{sdg}</span>
                    ))}
                </div>
            </section>

            <motion.section
                className="section"
                style={{ backgroundColor: 'var(--color-white)' }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <motion.h2
                        variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', fontWeight: 900 }}
                    >
                        Why We Act
                    </motion.h2>
                    <motion.p
                        variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.7 }}
                    >
                        Climate change is the defining crisis of our time, disproportionately affecting communities across Africa.
                        We organize the energy of the youth into decentralized, high-impact regional actions that drive tangible change.
                    </motion.p>
                    <motion.div
                        variants={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2rem',
                            textAlign: 'left',
                            marginTop: '3rem'
                        }}
                    >
                        {[
                            { title: "Awareness", text: "Building climate literacy among 5,000+ students to foster a generation of sustainability-first thinkers." },
                            { title: "Action", text: "12,000+ indigenous trees planted and counting. Local action with a global impact footprint." },
                            { title: "Advocacy", text: "Representing regional youth interests at policy summits to ensure high-level decisions reflect our future." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}
                                className="card"
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
                                style={{
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    background: '#f8fafc',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid #f1f5f9'
                                }}
                            >
                                <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontWeight: 800 }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <ImpactCounter />

            <UpcomingEvents />

            {/* Institutional Hardening: Success Stories Section */}
            <section className="section" style={{ backgroundColor: '#f3f4f6' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900 }}>Voices of <span style={{ color: 'var(--color-primary)' }}>Impact</span></h2>
                        <p style={{ color: 'var(--color-text-light)', marginTop: '1rem', fontSize: '1.1rem' }}>Direct testimonials from the youth heroes leading the change.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {[
                            { quote: "YHCA gave me the tools to turn my concern into a community forest. We've planted 500 trees in our village.", author: "Sarah M.", role: "Climate Hero" },
                            { quote: "I never thought my voice mattered until I was part of the YHCA Policy Lab. Now I advocate for change locally.", author: "David O.", role: "Youth Advocate" }
                        ].map((story, i) => (
                            <motion.div
                                key={i}
                                style={{
                                    flex: 1,
                                    minWidth: '300px',
                                    maxWidth: '500px',
                                    backgroundColor: 'white',
                                    padding: '3rem',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    position: 'relative'
                                }}
                                whileHover={{ y: -5 }}
                            >
                                <span style={{ fontSize: '5rem', position: 'absolute', top: '-10px', left: '20px', color: 'var(--color-primary)', opacity: 0.1, fontFamily: 'serif' }}>"</span>
                                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.6 }}>{story.quote}</p>
                                <div>
                                    <h4 style={{ marginBottom: '0.2rem', fontWeight: 800 }}>{story.author}</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>{story.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Gallery />

            <BlogSection />

            <Newsletter />

            <motion.section
                className="section"
                style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4rem' }}>
                    <div style={{ flex: 1.5 }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900 }}>Become a Funder or Partner</h2>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', lineHeight: 1.7, opacity: 0.9 }}>
                            We are looking for institutional partners and visionary donors who believe in scaling youth-led solutions.
                            Join our ecosystem and co-create a sustainable future for Africa.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <motion.a
                                href="/donate"
                                className="btn"
                                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)', border: 'none', padding: '1rem 2.5rem', fontWeight: 800 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Support Our Mission
                            </motion.a>
                            <motion.a
                                href="/join"
                                className="btn"
                                style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white', padding: '1rem 2.5rem', fontWeight: 800 }}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Partner With Us
                            </motion.a>
                        </div>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            {[
                                { icon: Shield, label: "Accountable" },
                                { icon: Globe, label: "Scalable" },
                                { icon: Users, label: "Youth-Led" },
                                { icon: Award, label: "Impact-First" }
                            ].map((item, i) => (
                                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <item.icon color="var(--color-accent)" size={32} style={{ marginBottom: '1rem' }} />
                                    <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};


export default Home;
