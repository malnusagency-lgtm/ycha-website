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
    { id: 1, src: img1, title: "Youth Environmental Champions", category: "Action", description: "Young volunteers in safety vests ready for a community cleanup and tree planting initiative." },
    { id: 2, src: img2, title: "Community Cleanup Success", category: "Action", description: "Youth volunteers celebrating after a successful waste collection drive with collected bags of refuse." },
    { id: 3, src: img3, title: "Student Registration Workshop", category: "Education", description: "Students actively participating in an outdoor environmental education registration session." },
    { id: 4, src: img4, title: "Tree Planting Initiative", category: "Conservation", description: "Students and volunteers planting indigenous tree seedlings in prepared ground plots." },
    { id: 5, src: img5, title: "Community Tree Planting", category: "Conservation", description: "Youth volunteers planting and watering newly planted tree seedlings in a community space." },
    { id: 6, src: img6, title: "School Tree Care Program", category: "Conservation", description: "Students watering and caring for a newly planted tree with a yellow watering can." },
    { id: 7, src: img7, title: "UN Environment Assembly", category: "Action", description: "YHCA delegates representing youth voices at the United Nations Environment Assembly in formal attire." },
    { id: 8, src: img8, title: "International Youth Delegation", category: "Action", description: "Young climate advocates from diverse backgrounds at a UN Environment Assembly conference." },
    { id: 9, src: img9, title: "Community Tree Planting Event", category: "Conservation", description: "Youth and community members gathering for a tree planting ceremony with indigenous seedlings." },
    { id: 10, src: img10, title: "UN Youth Climate Delegates", category: "Action", description: "YHCA representatives shaking hands and networking at a UN Environment Assembly event." },
    { id: 11, src: img11, title: "Reforestation Team Photo", category: "Conservation", description: "Team of youth environmental advocates posing with freshly planted tree seedlings at a planting site." },
    { id: 12, src: img12, title: "Youth Strategy Workshop", category: "Education", description: "Young leaders engaged in collaborative planning and discussion at an indoor workshop session." },
    // Expanded images
    { id: 13, src: img13, title: "Climate Summit Group Photo", category: "Action", description: "Large gathering of environmental stakeholders and youth leaders at an outdoor climate summit." },
    { id: 14, src: img14, title: "Media Engagement Session", category: "Action", description: "YHCA youth advocates participating in a media interview with NTV Kenya about climate action." },
    { id: 15, src: img15, title: "Media Partnership Event", category: "Action", description: "Youth climate leaders posing with media partners at NTV studios for climate awareness campaign." },
    { id: 16, src: img16, title: "Youth Media Advocates", category: "Action", description: "Three young YHCA members at NTV studios representing youth climate voices in mainstream media." },
    { id: 17, src: img17, title: "Climate Conference Audience", category: "Education", description: "Attendees listening attentively during a climate policy and advocacy conference session." },
    { id: 18, src: img18, title: "Clean Air March Band", category: "Action", description: "Brass band performing at a Clean Air Nairobi climate march to raise environmental awareness." },
    { id: 19, src: img19, title: "Clean Air Nairobi March", category: "Action", description: "Youth activists marching with 'Step by Step, Breath by Breath' banner for clean air advocacy." },
    { id: 20, src: img20, title: "Climate March Celebration", category: "Action", description: "Energetic youth participants celebrating during the Clean Air Nairobi awareness march." },
    { id: 21, src: img21, title: "Mass Climate Action Rally", category: "Action", description: "Large crowd of youth and community members gathered for Clean Air Nairobi campaign event." },
    { id: 22, src: img22, title: "Clean Air Campaign Banner", category: "Action", description: "Close-up of UrbanBetter Nairobi Citizens Clean Air Nairobi campaign signage at rally." },
    { id: 23, src: img23, title: "Youth Leadership Training", category: "Education", description: "Enthusiastic group photo of young climate leaders celebrating after a successful training workshop." },
    { id: 24, src: img24, title: "Professional Workshop Session", category: "Education", description: "Participants attending a formal climate policy and strategy workshop in a conference setting." },
    { id: 25, src: img25, title: "Youth Speaker Presentation", category: "Education", description: "Young YHCA advocate delivering a passionate presentation at a climate leadership workshop." }
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
