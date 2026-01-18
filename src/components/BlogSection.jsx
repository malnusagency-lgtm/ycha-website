import React from 'react';
import { motion } from 'framer-motion';
import { User, Clock, ChevronRight } from 'lucide-react';
import blog1 from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.16.14 PM.jpeg';
import blog2 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.02.46 AM.jpeg';

const articles = [
    {
        image: blog1,
        category: "Conservation",
        title: "The Silent Growth: 10,000 Trees in Kilifi",
        excerpt: "How a community-led nursery transformed a degraded coastline into a thriving mangrove ecosystem.",
        author: "John Kamau",
        readTime: "5 min read"
    },
    {
        image: blog2,
        category: "Policy",
        title: "Youth Voices at the National Summit",
        excerpt: "Our advocates presented a 10-point plan for climate education to the Ministry of Environment.",
        author: "Sarah Otieno",
        readTime: "8 min read"
    }
];

const BlogSection = () => {
    return (
        <section className="section" style={{ backgroundColor: '#fdfdfd' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}
                    >
                        From the Field
                    </motion.span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginTop: '0.8rem', fontWeight: 900 }}>Latest <span style={{ color: 'var(--color-primary)' }}>Stories</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                    {articles.map((art, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                background: 'white',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                border: '1px solid #f1f5f9',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                                <motion.img
                                    src={art.image}
                                    alt={art.title}
                                    whileHover={{ scale: 1.05 }}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '2rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 800
                                }}>
                                    {art.category}
                                </div>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={14} /> {art.author}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {art.readTime}</div>
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 800, lineHeight: 1.3 }}>{art.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.6 }}>{art.excerpt}</p>
                                <motion.a
                                    href="/blog"
                                    whileHover={{ gap: '0.8rem' }}
                                    style={{
                                        marginTop: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        color: 'var(--color-primary)',
                                        fontWeight: 800,
                                        textDecoration: 'none'
                                    }}
                                >
                                    Read Article <ChevronRight size={18} />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <motion.a
                        href="/blog"
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ padding: '1rem 3rem' }}
                    >
                        View All News
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
