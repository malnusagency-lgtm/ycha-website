import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Globe, Trees, CreditCard, Shield, Smartphone, Landmark, CheckCircle } from 'lucide-react';

const Donate = () => {
    const [method, setMethod] = useState('mpesa');

    const donationTiers = [
        { label: "Supporter", amount: "KES 1,000", impact: "Plants 10 indigenous seedlings and supports a school eco-literacy workshop.", icon: Trees },
        { label: "Advocate", amount: "KES 5,000", impact: "Equips a regional youth chapter with conservation tools and scientific monitoring gear.", icon: Globe },
        { label: "Hero", amount: "KES 25,000", impact: "Full sponsorship for a community-led reforestation site, including nursery setup.", icon: Heart }
    ];

    const paymentMethods = [
        { id: 'mpesa', name: 'M-Pesa Paybill', icon: Smartphone },
        { id: 'bank', name: 'Bank Transfer', icon: Landmark },
        { id: 'card', name: 'Global Card', icon: CreditCard }
    ];

    return (
        <motion.div
            className="donate-page"
            style={{
                paddingTop: 'clamp(80px, 15vw, 120px)',
                minHeight: '100vh',
                backgroundColor: '#fcfdfc'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container" style={{ maxWidth: '1200px', padding: '0 1.5rem 6rem' }}>
                {/* Hero Header */}
                <div className="section-header">
                    <motion.span style={{ color: 'var(--color-primary)', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1rem' }}>
                        Join the Action
                    </motion.span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1.5rem', fontWeight: 900, lineHeight: 1.1 }}
                    >
                        Invest in <br /><span style={{ color: 'var(--color-primary)' }}>African Climate Resilience</span>
                    </motion.h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                        Your contribution directly funds youth-led conservation and policy advocacy across Kenya.
                        We ensure every shilling translates into tangible, measurable climate impact.
                    </p>
                </div>

                {/* Donation Tiers Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: 'clamp(4rem, 10vw, 6rem)'
                }}>
                    {donationTiers.map((tier, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="impact-card"
                            style={{
                                backgroundColor: 'white',
                                padding: 'clamp(2rem, 5vw, 3rem) 2rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                border: '1px solid #f1f5f9',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                                <tier.icon size={32} color="var(--color-primary)" />
                            </div>
                            <div style={{ color: 'var(--color-secondary)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px' }}>{tier.label}</div>
                            <div style={{ fontSize: 'clamp(2.2rem, 5vw, 2.8rem)', fontWeight: 900, color: 'var(--color-text)', marginBottom: '1.5rem' }}>{tier.amount}</div>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.6 }}>{tier.impact}</p>
                            <button className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontWeight: 800 }}>Select Impact</button>
                        </motion.div>
                    ))}
                </div>

                {/* Unified Payment Section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'clamp(2rem, 5vw, 4rem)',
                    marginBottom: 'clamp(4rem, 10vw, 6rem)'
                }}>
                    {/* Method Selector */}
                    <div>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '2rem', fontWeight: 900 }} className="mobile-center">Secure Payment Methods</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {paymentMethods.map((m) => (
                                <button
                                    key={m.id}
                                    onClick={() => setMethod(m.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.2rem',
                                        padding: '1.2rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: method === m.id ? '2px solid var(--color-primary)' : '1px solid #e2e8f0',
                                        backgroundColor: method === m.id ? 'rgba(15, 76, 58, 0.03)' : 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        textAlign: 'left'
                                    }}
                                >
                                    <div style={{
                                        background: method === m.id ? 'var(--color-primary)' : '#f1f5f9',
                                        padding: '0.6rem',
                                        borderRadius: '10px'
                                    }}>
                                        <m.icon size={20} color={method === m.id ? 'white' : '#94a3b8'} />
                                    </div>
                                    <span style={{ fontSize: '1rem', fontWeight: 800, color: method === m.id ? 'var(--color-primary)' : 'var(--color-text)' }}>{m.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Instructions Card */}
                    <div style={{ backgroundColor: 'white', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={method}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                                className="mobile-center-content"
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'inherit' }}>
                                    <Shield color="var(--color-primary)" size={28} />
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 900 }}>Payment Details</h3>
                                </div>

                                {method === 'mpesa' && (
                                    <div style={{ color: 'var(--color-text)', fontSize: '1.05rem' }}>
                                        <div style={{ marginBottom: '1.5rem', background: '#f8fafc', padding: '1.2rem', borderRadius: 'var(--radius-md)', textAlign: 'left' }}>
                                            <p style={{ margin: '0.4rem 0' }}>Go to Lipa na M-Pesa → <strong>Paybill</strong></p>
                                            <p style={{ margin: '0.4rem 0' }}>Business Number: <strong style={{ color: 'var(--color-primary)', fontSize: '1.15rem' }}>247247</strong></p>
                                            <p style={{ margin: '0.4rem 0' }}>Account Number: <strong style={{ color: 'var(--color-primary)', fontSize: '1.15rem' }}>0725514013</strong></p>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.85rem', color: '#64748b', justifyContent: 'center' }}>
                                            <CheckCircle size={16} color="#10B981" /> Official YHCA Agent Account
                                        </div>
                                    </div>
                                )}

                                {method === 'bank' && (
                                    <div style={{ color: 'var(--color-text)', fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'left' }}>
                                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                                            <p><strong>Bank:</strong> Equity Bank Kenya</p>
                                            <p><strong>Acc Name:</strong> Young Heroes Climate</p>
                                            <p><strong>Acc Number:</strong> 0710283084042</p>
                                            <p><strong>Swift:</strong> EQTYKENA</p>
                                        </div>
                                    </div>
                                )}

                                {method === 'card' && (
                                    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                                        <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)', fontSize: '0.95rem' }}>International processing powered by Flutterwave.</p>
                                        <button className="btn btn-primary" style={{ width: '100%' }}>Open Secure Portal</button>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Fiscal Transparency */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    style={{
                        backgroundColor: 'var(--color-primary)',
                        padding: 'clamp(2rem, 8vw, 5rem) 2rem',
                        borderRadius: 'var(--radius-lg)',
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>Fiscal Transparency</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.1rem', opacity: 0.9 }}>
                        We maintain the highest standards of financial accountability.
                        Every contribution is tracked and reported in our annual impact disclosure.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '2rem',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {[
                            { label: "Programs", value: "85%", desc: "Direct Field Action" },
                            { label: "Operations", value: "10%", desc: "Core Logistics" },
                            { label: "Resource Prep", value: "5%", desc: "Advocacy Tools" }
                        ].map((stat, i) => (
                            <div key={i} className="mobile-center">
                                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--color-accent)', marginBottom: '0.5rem', lineHeight: 1 }}>{stat.value}</div>
                                <div style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{stat.label}</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .mobile-center-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center !important;
                    }
                    .impact-card {
                        padding: 2rem 1.5rem !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default Donate;
