import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
    {
        date: "Jan 28",
        month: "2026",
        title: "Nairobi Reforestation Workshop",
        location: "Karura Forest, Nairobi",
        type: "Field Action",
        color: "var(--color-primary)"
    },
    {
        date: "Feb 12",
        month: "2026",
        title: "Youth Policy Summit",
        location: "Kenyatta ICC",
        type: "Advocacy",
        color: "var(--color-secondary)"
    },
    {
        date: "Mar 05",
        month: "2026",
        title: "Eco-Literacy School Tour",
        location: "Mombasa County",
        type: "Education",
        color: "var(--color-accent)"
    }
];

const UpcomingEvents = () => {
    return (
        <section className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}
                        >
                            Get Involved
                        </motion.span>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '0.5rem', fontWeight: 900 }}>Upcoming <span style={{ color: 'var(--color-primary)' }}>Actions</span></h2>
                    </div>
                    <motion.a
                        href="/join"
                        whileHover={{ x: 5 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 800, textDecoration: 'none' }}
                    >
                        View Calendar <ArrowRight size={20} />
                    </motion.a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            style={{
                                display: 'flex',
                                gap: '2rem',
                                padding: '2rem',
                                backgroundColor: '#fcfdfc',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid #f1f5f9',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Date Badge */}
                            <div style={{ textAlign: 'center', color: event.color, flexShrink: 0 }}>
                                <div style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1 }}>{event.date.split(' ')[1]}</div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>{event.date.split(' ')[0]}</div>
                            </div>

                            {/* Event Info */}
                            <div>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: event.color, background: `${event.color}15`, padding: '0.3rem 0.8rem', borderRadius: '2rem', marginBottom: '1rem', display: 'inline-block' }}>
                                    {event.type}
                                </span>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 800 }}>{event.title}</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={14} /> {event.month}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <MapPin size={14} /> {event.location}
                                    </div>
                                </div>
                            </div>

                            {/* Subtle line decoration */}
                            <div style={{ position: 'absolute', bottom: '0', left: '0', height: '4px', width: '100%', backgroundColor: event.color, opacity: 0.2 }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
