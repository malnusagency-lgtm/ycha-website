import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Trees, Users, CreditCard, DollarSign, Shield } from 'lucide-react';

const Donate = () => {
    const [amount, setAmount] = useState('50');
    const [frequency, setFrequency] = useState('monthly');

    const tiers = [
        { value: '10', label: '$10', impact: 'Plants 1 tree and provides eco-literacy for one student.', icon: Trees },
        { value: '25', label: '$25', impact: 'Funds basic tools for a youth-led community cleanup.', icon: Globe },
        { value: '50', label: '$50', impact: 'Supports a week of training for a Climate Advocate.', icon: Users },
        { value: '100', label: '$100', impact: 'Full sponsorship for a regional youth climate summit.', icon: Heart }
    ];

    return (
        <motion.div
            className="donate-page"
            style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#fcfdfc' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container" style={{ maxWidth: '1000px', padding: '4rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
                    >
                        Support the <span style={{ color: 'var(--color-primary)' }}>Movement</span>
                    </motion.h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto' }}>
                        Your contribution directly empowers young leaders to take meaningful action against climate change.
                        Every dollar goes toward education, conservation, and advocacy initiatives.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                    {/* Donation Form */}
                    <motion.div
                        style={{
                            flex: 1.5,
                            minWidth: '350px',
                            backgroundColor: 'white',
                            padding: '3rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid #eee'
                        }}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', background: '#f0f4f2', padding: '0.4rem', borderRadius: '2rem' }}>
                            <button
                                onClick={() => setFrequency('once')}
                                style={{
                                    flex: 1,
                                    padding: '0.8rem',
                                    borderRadius: '2rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    backgroundColor: frequency === 'once' ? 'white' : 'transparent',
                                    fontWeight: 700,
                                    boxShadow: frequency === 'once' ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
                                    transition: 'all 0.3s'
                                }}
                            >
                                One-time
                            </button>
                            <button
                                onClick={() => setFrequency('monthly')}
                                style={{
                                    flex: 1,
                                    padding: '0.8rem',
                                    borderRadius: '2rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    backgroundColor: frequency === 'monthly' ? 'white' : 'transparent',
                                    fontWeight: 700,
                                    boxShadow: frequency === 'monthly' ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
                                    transition: 'all 0.3s'
                                }}
                            >
                                Monthly
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                            {tiers.map((tier) => (
                                <button
                                    key={tier.value}
                                    onClick={() => setAmount(tier.value)}
                                    style={{
                                        padding: '1.5rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: amount === tier.value ? '2px solid var(--color-primary)' : '1px solid #ddd',
                                        backgroundColor: amount === tier.value ? 'rgba(15, 76, 58, 0.05)' : 'white',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: amount === tier.value ? 'var(--color-primary)' : 'var(--color-text)' }}>
                                        {tier.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                            <DollarSign style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} size={20} />
                            <input
                                type="number"
                                placeholder="Custom amount"
                                value={amount === tiers.find(t => t.value === amount)?.value ? '' : amount}
                                onChange={(e) => setAmount(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3rem',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid #ddd',
                                    fontSize: '1.1rem'
                                }}
                            />
                        </div>

                        <button className="btn" style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <CreditCard size={20} />
                            Complete Donation
                        </button>

                        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', opacity: 0.6 }}>
                            Secure encryption enabled. All donations are tax-deductible.
                        </p>
                    </motion.div>

                    {/* Impact Info */}
                    <motion.div
                        style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Your Impact</h3>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '50%' }}>
                                    {React.createElement(tiers.find(t => t.value === amount)?.icon || Heart, { size: 32 })}
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                    {tiers.find(t => t.value === amount)?.impact || "Your general donation funds our most critical immediate needs in climate advocacy."}
                                </p>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: 'var(--radius-lg)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Other ways to help</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-primary)' }}>→</span>
                                    <span><strong>Spread the word</strong>: Share our mission on social media.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-primary)' }}>→</span>
                                    <span><strong>Corporate Giving</strong>: Partner with us for CSR initiatives.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-primary)' }}>→</span>
                                    <span><strong>Volunteer</strong>: Give your time to our local chapters.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Accountability block */}
                        <div style={{ padding: '2rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-lg)' }}>
                            <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Shield size={20} color="var(--color-primary)" />
                                Transparency & Accountability
                            </h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>
                                YHCA is committed to 100% fiscal transparency. We publish annual impact and financial reports.
                                <strong> 85% of all funds </strong> go directly to field programs, with only 15% allocated to administrative support.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Donate;
