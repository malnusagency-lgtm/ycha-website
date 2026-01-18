import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="section" style={{ backgroundColor: '#f8fafc', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'var(--color-primary)',
                        padding: 'clamp(3rem, 10vw, 6rem) 2rem',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <motion.h2
                            style={{ color: 'white', fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1.5rem', fontWeight: 900 }}
                        >
                            Stay in the <span style={{ color: 'var(--color-accent)' }}>Loop</span>
                        </motion.h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', opacity: 0.9 }}>
                            Join our community of 5,000+ Young Heroes. Get direct updates from the field,
                            policy alerts, and exclusive event invitations.
                        </p>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                            >
                                <CheckCircle2 size={64} color="var(--color-accent)" />
                                <h3 style={{ color: 'white' }}>You're in, Hero!</h3>
                                <p>Check your email for your first field report.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{
                                maxWidth: '500px',
                                margin: '0 auto',
                                display: 'flex',
                                gap: '1rem',
                                flexWrap: 'wrap',
                                justifyContent: 'center'
                            }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        flex: 1,
                                        minWidth: '280px',
                                        padding: '1.2rem 1.5rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }}
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={status === 'loading'}
                                    style={{
                                        backgroundColor: 'var(--color-accent)',
                                        color: 'var(--color-primary)',
                                        padding: '1.2rem 2.5rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: 'none',
                                        fontWeight: 800,
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.8rem',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {status === 'loading' ? 'Joining...' : 'Join Now'}
                                    <Send size={18} />
                                </motion.button>
                            </form>
                        )}
                    </div>

                    {/* Background Decorative Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-100px',
                        left: '-100px',
                        width: '300px',
                        height: '300px',
                        border: '40px solid rgba(255,255,255,0.03)',
                        borderRadius: '50%'
                    }}></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
