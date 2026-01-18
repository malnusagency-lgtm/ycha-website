import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock, ChevronRight, Info, AlertCircle } from 'lucide-react';

const allEvents = [
    {
        id: 1,
        date: "28",
        month: "JAN",
        year: "2026",
        title: "Nairobi Reforestation Workshop",
        location: "Karura Forest, Nairobi",
        time: "09:00 AM - 01:00 PM",
        type: "Field Action",
        desc: "Join us for a hands-on workshop on indigenous tree planting and nursery management.",
        color: "var(--color-primary)"
    },
    {
        id: 2,
        date: "12",
        month: "FEB",
        year: "2026",
        title: "Youth Policy Summit",
        location: "Kenyatta ICC",
        time: "10:00 AM - 04:00 PM",
        type: "Advocacy",
        desc: "A strategic gathering to discuss the Youth Climate Bill before the regional assembly.",
        color: "var(--color-secondary)"
    },
    {
        id: 3,
        date: "05",
        month: "MAR",
        year: "2026",
        title: "Eco-Literacy School Tour",
        location: "Mombasa County",
        time: "08:30 AM - 02:00 PM",
        type: "Education",
        desc: "Visiting regional schools to launch the 2026 Climate Champions program.",
        color: "var(--color-accent)"
    },
    {
        id: 4,
        date: "20",
        month: "MAR",
        year: "2026",
        title: "Coastal Resilience Workshop",
        location: "Malindi Waterfront",
        time: "09:00 AM - 12:00 PM",
        type: "Field Action",
        desc: "Community seagrass monitoring and coastline protection training session.",
        color: "var(--color-primary)"
    }
];

const Events = () => {
    const [filter, setFilter] = useState('All');

    const filteredEvents = allEvents.filter(ev => filter === 'All' || ev.type === filter);

    return (
        <motion.div
            className="events-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ paddingTop: 'clamp(80px, 15vh, 120px)', minHeight: '100vh', backgroundColor: '#fcfdfc' }}
        >
            <div className="container" style={{ padding: '0 1rem 6rem' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem' }}
                    >
                        Save the Date
                    </motion.span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 900, marginTop: '1rem' }}
                    >
                        Our Action <span style={{ color: 'var(--color-primary)' }}>Calendar</span>
                    </motion.h1>
                </div>

                {/* Filter Toggles */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '5rem', flexWrap: 'wrap' }}>
                    {['All', 'Field Action', 'Advocacy', 'Education'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            style={{
                                padding: '0.8rem 2rem',
                                borderRadius: 'var(--radius-md)',
                                border: filter === f ? '2px solid var(--color-primary)' : '1px solid #e2e8f0',
                                background: filter === f ? 'rgba(15, 76, 58, 0.05)' : 'white',
                                color: filter === f ? 'var(--color-primary)' : 'var(--color-text-light)',
                                cursor: 'pointer',
                                fontWeight: 800,
                                transition: 'all 0.3s'
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Events Listing */}
                <div style={{ display: 'grid', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((ev, i) => (
                            <motion.div
                                key={ev.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: 'clamp(1.5rem, 5vw, 3rem)',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                    borderLeft: `6px solid ${ev.color}`,
                                    display: 'flex',
                                    gap: 'clamp(1.5rem, 5vw, 4rem)',
                                    alignItems: 'center',
                                    flexWrap: 'wrap'
                                }}
                            >
                                {/* Date Box */}
                                <div style={{ textAlign: 'center', minWidth: '80px' }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#94a3b8' }}>{ev.month}</div>
                                    <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1, color: 'var(--color-text)' }}>{ev.date}</div>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '0.5rem', opacity: 0.6 }}>{ev.year}</div>
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1, minWidth: '280px' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                        <span style={{
                                            background: `${ev.color}15`,
                                            color: ev.color,
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '2rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase'
                                        }}>
                                            {ev.type}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.2rem' }}>{ev.title}</h3>
                                    <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.6 }}>{ev.desc}</p>

                                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                            <MapPin size={16} color="var(--color-primary)" /> {ev.location}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                            <Clock size={16} color="var(--color-primary)" /> {ev.time}
                                        </div>
                                    </div>
                                </div>

                                {/* Action */}
                                <div style={{ textAlign: 'right' }}>
                                    <button className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Details <ChevronRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredEvents.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '4rem', background: '#f8fafc', borderRadius: 'var(--radius-lg)' }}>
                            <AlertCircle size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
                            <h3>No events found in this category.</h3>
                            <button onClick={() => setFilter('All')} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 800, cursor: 'pointer', marginTop: '1rem' }}>Show All Events</button>
                        </div>
                    )}
                </div>

                {/* Sticky CTA */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '6rem',
                        background: 'var(--color-primary)',
                        padding: '3rem',
                        borderRadius: 'var(--radius-lg)',
                        color: 'white',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Info style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1 }} size={160} />
                    <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>Organize in Your Local Area</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem', opacity: 0.9 }}>
                        Don't see an event near you? Learn how to start a regional youth chapter or propose a local action.
                    </p>
                    <button className="btn btn-secondary" style={{ padding: '1rem 3rem' }}>Partner Toolkit</button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Events;
