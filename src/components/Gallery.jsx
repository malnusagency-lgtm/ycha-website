import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Image imports
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

// New expansion images
import img13 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.08.15 AM.jpeg';
import img14 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.15.01 AM (1).jpeg';
import img15 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.15.01 AM.jpeg';
import img16 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.15.02 AM (1).jpeg';
import img17 from '../assets/gallery/WhatsApp Image 2026-01-14 at 1.15.02 AM.jpeg';
import img18 from '../assets/gallery/WhatsApp Image 2026-01-14 at 12.31.17 AM (1).jpeg';
import img19 from '../assets/gallery/WhatsApp Image 2026-01-14 at 12.31.17 AM.jpeg';
import img20 from '../assets/gallery/WhatsApp Image 2026-01-14 at 12.31.38 AM.jpeg';
import img21 from '../assets/gallery/WhatsApp Image 2026-01-14 at 12.35.48 AM (1).jpeg';
import img22 from '../assets/gallery/WhatsApp Image 2026-01-14 at 12.35.48 AM.jpeg';
import img23 from '../assets/gallery/WhatsApp Image 2026-01-14 at 12.52.12 AM.jpeg';
import img24 from '../assets/gallery/WhatsApp Image 2026-01-14 at 12.52.50 AM (1).jpeg';
import img25 from '../assets/gallery/WhatsApp Image 2026-01-14 at 12.52.50 AM (2).jpeg';

const images = [
    { id: 1, src: img1, title: "Training Future Advocates", category: "Education", description: "Young leaders participating in a regional climate advocacy workshop." },
    { id: 2, src: img2, title: "Reforestation Initiative", category: "Conservation", description: "Volunteers working on restoring local forest cover to combat soil erosion." },
    { id: 3, src: img3, title: "Community Beach Cleanup", category: "Action", description: "A massive youth-led effort to remove plastic waste from our shores." },
    { id: 4, src: img4, title: "Eco-Literacy Seminar", category: "Education", description: "Educating students about the direct impact of climate change on local ecosystems." },
    { id: 5, src: img5, title: "Strategic Planning Session", category: "Action", description: "Core team members outlining our strategy for the upcoming year." },
    { id: 6, src: img6, title: "Sustainable Agriculture", category: "Conservation", description: "Implementing urban gardening practices to promote food security." },
    { id: 7, src: img7, title: "Climate Action Rally", category: "Action", description: "Young heroes demanding stronger environmental policies during a peaceful protest." },
    { id: 8, src: img8, title: "Waste Management Workshop", category: "Education", description: "Teaching the 3Rs (Reduce, Reuse, Recycle) to elementary students." },
    { id: 9, src: img9, title: "Habitat Restoration", category: "Conservation", description: "Working to preserve the natural habitats of endangered local species." },
    { id: 10, src: img10, title: "Advocacy Summit", category: "Action", description: "Bringing together youth leaders to discuss climate policy at a national level." },
    { id: 11, src: img11, title: "Seedling Distribution", category: "Action", description: "Empowering local communities to start their own reforestation projects." },
    { id: 12, src: img12, title: "Environmental Media Training", category: "Education", description: "Empowering youth to use digital storytelling for climate awareness." },
    // Expanded images
    { id: 13, src: img13, title: "Indigenous Seedlings", category: "Conservation", description: "Thousands of indigenous tree species being nurtured for the next planting season." },
    { id: 14, src: img14, title: "Advocacy Planning", category: "Education", description: "Young leaders mapping out regional climate policy objectives." },
    { id: 15, src: img15, title: "Succession Monitoring", category: "Conservation", description: "Checking the survival rates of our newly established forest chapter sites." },
    { id: 16, src: img16, title: "Coastal Ecosystems", category: "Action", description: "Launching a local mangrove restoration chapter along the Kenyan coast." },
    { id: 17, src: img17, title: "Biodiversity Tracking", category: "Conservation", description: "Recording the return of native bird species to restored habitats." },
    { id: 18, src: img18, title: "Climate Puzzles", category: "Education", description: "Interactive eco-learning tools used in our school outreach missions." },
    { id: 19, src: img19, title: "Digital Campaigning", category: "Action", description: "Our tech-advocates launching a nationwide climate awareness social drive." },
    { id: 20, src: img20, title: "Smart Water Solutions", category: "Conservation", description: "Demonstrating rainwater harvesting techniques to rural youth groups." },
    { id: 21, src: img21, title: "Green Innovators", category: "Education", description: "Showcasing student-led innovations using recycled waste." },
    { id: 22, src: img22, title: "Blue Carbon Site", category: "Conservation", description: "Planting mangroves to protect biodiversity and sequester carbon." },
    { id: 23, src: img23, title: "Policy Dialogues", category: "Action", description: "Preparing formal petitions for environmental protection at the county level." },
    { id: 24, src: img24, title: "Bio-Waste Conversion", category: "Conservation", description: "Hands-on training for converting market waste into high-quality compost." },
    { id: 25, src: img25, title: "Eco-Energy Outreach", category: "Action", description: "Providing sustainable lighting solutions to off-grid community schools." }
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
                        Impact in Motion
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '1rem' }}
                    >
                        Project Visibility
                    </motion.h2>

                    {/* Filters */}
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.4rem 1.2rem',
                                    borderRadius: '2rem',
                                    fontSize: '0.9rem',
                                    border: filter === cat ? 'none' : '1px solid #ddd',
                                    backgroundColor: filter === cat ? 'var(--color-primary)' : 'transparent',
                                    color: filter === cat ? 'white' : 'var(--color-text)',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.05
                            }
                        }
                    }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 30vw, 350px), 1fr))',
                        gap: '1.5rem',
                        minHeight: '400px'
                    }}
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((img) => (
                            <motion.div
                                layout
                                key={img.id}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                                    show: { opacity: 1, scale: 1, y: 0 }
                                }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                style={{
                                    position: 'relative',
                                    aspectRatio: '4/3',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                                onClick={() => openLightbox(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    loading="lazy"
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
                                        background: 'linear-gradient(rgba(0,0,0,0.1), rgba(15, 76, 58, 0.95))',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: '1.2rem',
                                        color: 'white'
                                    }}
                                    className="gallery-overlay"
                                >
                                    <div style={{ width: '100%' }}>
                                        <span style={{
                                            fontSize: '0.65rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontWeight: 800,
                                            color: 'var(--color-accent)'
                                        }}>
                                            {img.category}
                                        </span>
                                        <h4 style={{ color: 'white', margin: '0.1rem 0', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', fontWeight: 700 }}>
                                            {img.title}
                                        </h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                                            <span style={{ fontSize: '0.7rem', opacity: 0.8, color: 'white' }}>View Details</span>
                                            <Maximize2 size={14} color="var(--color-accent)" />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .gallery-overlay {
                        opacity: 1 !important;
                        background: linear-gradient(rgba(0,0,0,0), rgba(15, 76, 58, 0.85)) !important;
                    }
                    .gallery-overlay h4 {
                        font-size: 0.9rem !important;
                    }
                }
            `}</style>


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
                            background: 'rgba(0,0,0,0.98)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}
                        onClick={closeLightbox}
                    >
                        <button
                            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10 }}
                            onClick={closeLightbox}
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: '1000px', width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-sm)', maxHeight: '75vh', objectFit: 'contain' }}
                            />
                            <div style={{ color: 'white', marginTop: '1.5rem', textAlign: 'center', maxWidth: '700px' }}>
                                <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.8rem' }}>{selectedImg.category}</span>
                                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', marginTop: '0.5rem', color: 'white' }}>{selectedImg.title}</h3>
                                <p style={{ opacity: 0.8, marginTop: '1rem', lineHeight: 1.6, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>{selectedImg.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
