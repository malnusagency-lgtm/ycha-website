import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Clock, ChevronRight, Filter } from 'lucide-react';
import blog1 from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.16.14 PM.jpeg';
import blog2 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.02.46 AM.jpeg';
import blog3 from '../assets/images/about-1.jpg'; // Placeholder for more content

const allArticles = [
    {
        id: 1,
        image: blog1,
        category: "Conservation",
        title: "The Silent Growth: 10,000 Trees in Kilifi",
        excerpt: "How a community-led nursery transformed a degraded coastline into a thriving mangrove ecosystem.",
        author: "John Kamau",
        date: "Jan 12, 2026",
        readTime: "5 min read"
    },
    {
        id: 2,
        image: blog2,
        category: "Policy",
        title: "Youth Voices at the National Summit",
        excerpt: "Our advocates presented a 10-point plan for climate education to the Ministry of Environment.",
        author: "Sarah Otieno",
        date: "Jan 08, 2026",
        readTime: "8 min read"
    },
    {
        id: 3,
        image: blog3,
        category: "Education",
        title: "Eco-Literacy: Teaching the Next Generation",
        excerpt: "Inside our school-based workshops where students learn to identify indigenous tree species.",
        author: "David Mwangi",
        date: "Jan 05, 2026",
        readTime: "6 min read"
    }
];

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Conservation', 'Policy', 'Education', 'Impact'];

    const filteredArticles = allArticles.filter(art => {
        const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
        const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <motion.div
            className="blog-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ paddingTop: 'clamp(80px, 15vh, 120px)', minHeight: '100vh', backgroundColor: '#fcfdfc' }}
        >
            <div className="container" style={{ padding: '0 1rem 6rem' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem' }}
                    >
                        Impact Stories
                    </motion.span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 900, marginTop: '1rem' }}
                    >
                        Voices from <span style={{ color: 'var(--color-primary)' }}>the Ground</span>
                    </motion.h1>
                </div>

                {/* Filters & Search */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '2rem',
                    marginBottom: '4rem',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto', paddingBottom: '0.5rem', whiteSpace: 'nowrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: '2rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    backgroundColor: activeCategory === cat ? 'var(--color-primary)' : 'white',
                                    color: activeCategory === cat ? 'white' : 'var(--color-text-light)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative', flex: 1, maxWidth: '400px', minWidth: '280px' }}>
                        <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                borderRadius: '2rem',
                                border: '1px solid #e2e8f0',
                                background: 'white',
                                fontSize: '0.9rem',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                            }}
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '3rem'
                }}>
                    <AnimatePresence>
                        {filteredArticles.map((art, i) => (
                            <motion.div
                                key={art.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    border: '1px solid #f1f5f9',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
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
                                        backgroundColor: 'var(--color-primary)',
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
                                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={14} /> {art.author}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {art.readTime}</div>
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>{art.title}</h3>
                                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.7 }}>{art.excerpt}</p>
                                    <button style={{
                                        marginTop: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--color-primary)',
                                        fontWeight: 800,
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer'
                                    }}>
                                        Read More <ChevronRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredArticles.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '6rem 0' }}>
                        <h3 style={{ color: 'var(--color-text-light)' }}>No stories found matching your search.</h3>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Blog;
