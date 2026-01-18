import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Image imports (Vite friendly)
import img1 from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.13.24 PM.jpeg';
import img2 from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.16.14 PM.jpeg';
import img3 from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.22.35 PM.jpeg';
import img4 from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.54.24 PM.jpeg';
import img5 from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.54.25 PM.jpeg';
import img6 from '../assets/gallery/WhatsApp Image 2026-01-13 at 8.54.27 PM.jpeg';
import img7 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.02.45 AM (1).jpeg';
import img8 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.02.45 AM.jpeg';
import img9 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.02.46 AM (1).jpeg';
import img10 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.02.46 AM.jpeg';
import img11 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.05.56 AM.jpeg';
import img12 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.07.18 AM.jpeg';

const images = [
    { id: 1, src: img1, title: "Our Community", category: "Action" },
    { id: 2, src: img2, title: "Future Leaders", category: "Education" },
    { id: 3, src: img3, title: "Clean Earth Initiative", category: "Conservation" },
    { id: 4, src: img4, title: "Climate Summit", category: "Advocacy" },
    { id: 5, src: img5, title: "Youth Voices", category: "Action" },
    { id: 6, src: img6, title: "Eco-Education", category: "Education" },
    { id: 7, src: img7, title: "Sustainable Farming", category: "Conservation" },
    { id: 8, src: img8, title: "Tree Planting Day", category: "Action" },
    { id: 9, src: img9, title: "Ocean Cleanup", category: "Action" },
    { id: 10, src: img10, title: "Policy Workshop", category: "Advocacy" },
    { id: 11, src: img11, title: "Urban Garden", category: "Conservation" },
    { id: 12, src: img12, title: "Advocates Rally", category: "Action" },
];

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(images.map(img => img.category))];
    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

    const openLightbox = (img) => setSelectedImg(img);
    const closeLightbox = () => setSelectedImg(null);

    return (
        <section className="gallery-section section" style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}
                    >
                        Visual Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', marginTop: '1rem' }}
                    >
                        Our Heroes in Action
                    </motion.h2>

                    {/* Filters */}
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '2rem',
                                    border: filter === cat ? 'none' : '1px solid #ddd',
                                    backgroundColor: filter === cat ? 'var(--color-primary)' : 'transparent',
                                    color: filter === cat ? 'white' : 'var(--color-text)',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        minHeight: '400px'
                    }}
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((img) => (
                            <motion.div
                                layout
                                key={img.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -10 }}
                                style={{
                                    position: 'relative',
                                    aspectRatio: '1/1',
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-md)'
                                }}
                                onClick={() => openLightbox(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(rgba(0,0,0,0), rgba(15, 76, 58, 0.8))',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: '1.5rem',
                                        color: 'white'
                                    }}
                                >
                                    <div>
                                        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>{img.category}</span>
                                        <h4 style={{ color: 'white', margin: '0.2rem 0' }}>{img.title}</h4>
                                        <Maximize2 size={16} />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.95)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                        onClick={closeLightbox}
                    >
                        <button
                            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', color: 'white' }}
                            onClick={closeLightbox}
                        >
                            <X size={40} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: '90%', maxHeight: '80%', position: 'relative' }}
                        >
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
                            />
                            <div style={{ color: 'white', marginTop: '1rem', textAlign: 'center' }}>
                                <h3>{selectedImg.title}</h3>
                                <p style={{ opacity: 0.7 }}>{selectedImg.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
