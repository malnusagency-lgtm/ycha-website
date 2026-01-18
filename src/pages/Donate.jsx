import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Globe, Trees, Users, CreditCard, DollarSign, Shield, Smartphone, Landmark, Check } from 'lucide-react';

const Donate = () => {
    const [amount, setAmount] = useState('5000');
    const [frequency, setFrequency] = useState('once');
    const [method, setMethod] = useState('mpesa');

    const tiers = [
        { value: '1000', label: 'KES 1,000', impact: 'Plants 10 seedlings and supports eco-literacy for one school.', icon: Trees },
        { value: '5000', label: 'KES 5,000', impact: 'Equips a youth chapter with conservation tools and gear.', icon: Globe },
        { value: '10000', label: 'KES 10k', impact: 'Supports a week-long regional advocacy training summit.', icon: Users },
        { value: '25000', label: 'KES 25k', impact: 'Full sponsorship for a community-led reforestation site.', icon: Heart }
    ];

    const paymentMethods = [
        { id: 'mpesa', name: 'M-Pesa (Mobile)', icon: Smartphone },
        { id: 'bank', name: 'Bank Transfer', icon: Landmark },
        { id: 'card', name: 'Card / Global', icon: CreditCard }
    ];

    return (
        <motion.div
            className="donate-page"
            style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#fcfdfc' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container" style={{ maxWidth: '1200px', padding: '4rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}
                    >
                        Invest in <span style={{ color: 'var(--color-primary)' }}>African Youth</span>
                    </motion.h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '750px', margin: '0 auto' }}>
                        Your support directly funds youth-led climate solutions across Kenya and East Africa.
                        Join us in building a sustainable future.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>

                    {/* Donation Flow */}
                    <motion.div
                        style={{
                            backgroundColor: 'white',
                            padding: 'clamp(1.5rem, 4vw, 3rem)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid #eee'
                        }}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Frequency Toggle */}
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', background: '#f0f4f2', padding: '0.4rem', borderRadius: '2rem' }}>
                            {['once', 'monthly'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFrequency(f)}
                                    style={{
                                        flex: 1,
                                        padding: '0.8rem',
                                        borderRadius: '2rem',
                                        border: 'none',
                                        cursor: 'pointer',
                                        backgroundColor: frequency === f ? 'white' : 'transparent',
                                        fontWeight: 700,
                                        color: frequency === f ? 'var(--color-primary)' : 'var(--color-text-light)',
                                        boxShadow: frequency === f ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
                                        transition: 'all 0.3s',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {f === 'once' ? 'One-time' : 'Monthly'}
                                </button>
                            ))}
                        </div>

                        {/* Amount Selection */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                            {tiers.map((tier) => (
                                <button
                                    key={tier.value}
                                    onClick={() => setAmount(tier.value)}
                                    style={{
                                        padding: '1.2rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: amount === tier.value ? '2px solid var(--color-primary)' : '1px solid #ddd',
                                        backgroundColor: amount === tier.value ? 'rgba(15, 76, 58, 0.05)' : 'white',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: amount === tier.value ? 'var(--color-primary)' : 'var(--color-text)' }}>
                                        {tier.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.6, fontWeight: 700 }}>KES</span>
                            <input
                                type="number"
                                placeholder="Other amount"
                                value={amount === tiers.find(t => t.value === amount)?.value ? '' : amount}
                                onChange={(e) => setAmount(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3.5rem',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid #ddd',
                                    fontSize: '1.1rem',
                                    fontWeight: 600
                                }}
                            />
                        </div>

                        {/* Payment Methods */}
                        <h4 style={{ marginBottom: '1rem' }}>Select Payment Method</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem', marginBottom: '2.5rem' }}>
                            {paymentMethods.map((m) => (
                                <button
                                    key={m.id}
                                    onClick={() => setMethod(m.id)}
                                    style={{
                                        padding: '1rem 0.5rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: method === m.id ? '2px solid var(--color-primary)' : '1px solid #eee',
                                        backgroundColor: method === m.id ? 'rgba(15, 76, 58, 0.05)' : 'white',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        cursor: 'pointer'
                                    }}
                                >
                                    <m.icon size={20} color={method === m.id ? 'var(--color-primary)' : '#888'} />
                                    <span>{m.name}</span>
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {method === 'mpesa' && (
                                <motion.div
                                    key="mpesa"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    style={{ backgroundColor: '#f1f8f5', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2.5rem' }}
                                >
                                    <h5 style={{ color: '#1e3a34', marginBottom: '0.5rem' }}>How to pay with M-Pesa:</h5>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        1. Go to M-Pesa Menu <br />
                                        2. Lipa na M-Pesa \u003e Paybill <br />
                                        3. Business No: <strong>4000000</strong> <br />
                                        4. Account: <strong>YHCA</strong> <br />
                                        5. Enter your donation amount
                                    </p>
                                    <button className="btn btn-primary" style={{ width: '100%' }}>Send Instructions to Phone</button>
                                </motion.div>
                            )}

                            {method === 'bank' && (
                                <motion.div
                                    key="bank"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    style={{ backgroundColor: '#f1f8f5', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2.5rem' }}
                                >
                                    <h5 style={{ color: '#1e3a34', marginBottom: '0.5rem' }}>Bank Transfer Details:</h5>
                                    <p style={{ fontSize: '0.9rem' }}>
                                        <strong>Bank:</strong> Kenya Commercial Bank (KCB)<br />
                                        <strong>A/C Name:</strong> Young Heroes Climate Advocates<br />
                                        <strong>A/C No:</strong> 1234567890<br />
                                        <strong>Swift:</strong> KCBLKENA
                                    </p>
                                </motion.div>
                            )}

                            {method === 'card' && (
                                <motion.div key="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <button className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                        <CreditCard size={20} />
                                        Pay with Card / PayPal
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <p style={{ textAlign: 'center', fontSize: '0.8rem', opacity: 0.6 }}>
                            A receipt will be sent to your email after verification.
                            Registration No: [REDACTED/KENYA]
                        </p>
                    </motion.div>

                    {/* Impact & Transparency */}
                    <motion.div
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Your Impact</h3>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '50%', flexShrink: 0 }}>
                                    {React.createElement(tiers.find(t => t.value === amount)?.icon || Heart, { size: 32 })}
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    {tiers.find(t => t.value === amount)?.impact || "Your general donation powers our strategic outreach and youth empowerment chapters in rural Kenya."}
                                </p>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-lg)' }}>
                            <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Shield size={20} color="var(--color-primary)" />
                                Donor Confidence
                            </h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                We prioritize fiscal discipline. <strong>85%</strong> of donations go directly to the ground for field work, with only 15% used for administrative scaling.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700 }}>
                                    <Check size={14} color="#10B981" /> Audited Reports
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700 }}>
                                    <Check size={14} color="#10B981" /> 100% Secure
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: 'var(--radius-lg)' }}>
                            <h4 style={{ marginBottom: '1.5rem' }}>International Donors</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                                For wire transfers larger than $1,000, please contact our partnership team directly to avoid processing fees.
                            </p>
                            <a href="mailto:partners@ycha-africa.org" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>partners@ycha-africa.org</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Donate;
