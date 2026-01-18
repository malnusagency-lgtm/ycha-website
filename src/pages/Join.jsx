import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Heart, Sparkles, CheckCircle2, ChevronRight, ChevronLeft, Send, Users, Shield, Globe } from 'lucide-react';
import joinImg from '../assets/images/join-1.jpg';

const Join = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: 'Volunteering',
        motivation: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 2000);
    };

    const containerVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <div className="join-page" style={{ paddingTop: 'clamp(80px, 15vh, 120px)', minHeight: '100vh', backgroundColor: '#fcfdfc' }}>
            <div className="container" style={{ maxWidth: '1100px', padding: '0 1rem 6rem' }}>

                {/* Hero Header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 10vw, 5rem)' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ color: 'var(--color-primary)', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}
                    >
                        Be a Hero
                    </motion.span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Start Your <span style={{ color: 'var(--color-primary)' }}>Impact Journey</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                        Join a network of 5,000+ Young Heroes leading climate action across Africa.
                        Choose your path and let's build the future together.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: '0 40px 100px -20px rgba(0,0,0,0.08)',
                    border: '1px solid #f1f5f9'
                }}>

                    {/* Visual/Info Side */}
                    <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
                        <img src={joinImg} alt="YHCA Advocacy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 76, 58, 0.8) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3rem', color: 'white' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.8rem', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                                    <Sparkles size={24} color="var(--color-accent)" />
                                </div>
                                <p style={{ fontSize: '0.95rem', fontWeight: 600, opacity: 0.9 }}>"Joining YHCA was the turning point in my advocacy journey. The mentorship changed everything."</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>47+</h4>
                                    <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7 }}>Counties Active</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>12k</h4>
                                    <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7 }}>Trees Planted</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div style={{ padding: 'clamp(2rem, 5vw, 4rem)', display: 'flex', flexDirection: 'column' }}>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ textAlign: 'center', margin: 'auto' }}
                            >
                                <div style={{ background: '#f0fdf4', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                                    <CheckCircle2 size={48} color="#10B981" />
                                </div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Application Received!</h2>
                                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6, marginBottom: '2rem' }}>
                                    Thank you, {formData.name.split(' ')[0]}! Our region coordinator will review your
                                    {formData.interest.toLowerCase()} application and reach out within 48 hours.
                                </p>
                                <button onClick={() => setStatus('idle')} className="btn btn-secondary">Submit Another</button>
                            </motion.div>
                        ) : (
                            <>
                                {/* Step Indicator */}
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem' }}>
                                    {[1, 2, 3].map((s) => (
                                        <div key={s} style={{
                                            flex: 1,
                                            height: '4px',
                                            backgroundColor: step >= s ? 'var(--color-primary)' : '#f1f5f9',
                                            borderRadius: '2px',
                                            transition: 'all 0.3s'
                                        }}></div>
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div key="step1" {...containerVariants}>
                                            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.5rem' }}>Basic Details</h3>
                                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                                <div>
                                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem', fontWeight: 700, fontSize: '0.9rem' }}>
                                                        <User size={16} color="var(--color-primary)" /> Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        placeholder="Enter your name"
                                                        style={{ width: '100%', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', background: '#f8fafc' }}
                                                    />
                                                </div>
                                                <div>
                                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem', fontWeight: 700, fontSize: '0.9rem' }}>
                                                        <Mail size={16} color="var(--color-primary)" /> Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        placeholder="you@email.com"
                                                        style={{ width: '100%', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', background: '#f8fafc' }}
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                onClick={nextStep}
                                                disabled={!formData.name || !formData.email}
                                                className="btn btn-primary"
                                                style={{ width: '100%', marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '1.2rem' }}
                                            >
                                                Next Step <ChevronRight size={18} />
                                            </button>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div key="step2" {...containerVariants}>
                                            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.5rem' }}>Your Interest</h3>
                                            <div style={{ display: 'grid', gap: '1rem' }}>
                                                {[
                                                    { id: 'Volunteering', icon: Heart, desc: 'Lead field action work' },
                                                    { id: 'Membership', icon: Users, desc: 'Join the policy lab' },
                                                    { id: 'Partnership', icon: Globe, desc: 'Institutional collaboration' }
                                                ].map((path) => (
                                                    <div
                                                        key={path.id}
                                                        onClick={() => setFormData({ ...formData, interest: path.id })}
                                                        style={{
                                                            padding: '1.5rem',
                                                            borderRadius: 'var(--radius-md)',
                                                            border: formData.interest === path.id ? '2px solid var(--color-primary)' : '1px solid #e2e8f0',
                                                            backgroundColor: formData.interest === path.id ? 'rgba(15, 76, 58, 0.03)' : 'white',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '1.5rem',
                                                            transition: 'all 0.2s'
                                                        }}
                                                    >
                                                        <div style={{ background: formData.interest === path.id ? 'var(--color-primary)' : '#f1f5f9', padding: '0.8rem', borderRadius: '12px' }}>
                                                            <path.icon size={20} color={formData.interest === path.id ? 'white' : '#64748b'} />
                                                        </div>
                                                        <div>
                                                            <div style={{ fontWeight: 800, color: 'var(--color-text)' }}>{path.id}</div>
                                                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>{path.desc}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                                                <button onClick={prevStep} className="btn" style={{ flex: 1, backgroundColor: '#f1f5f9', color: 'var(--color-text)' }}>
                                                    Back
                                                </button>
                                                <button onClick={nextStep} className="btn btn-primary" style={{ flex: 2 }}>
                                                    Continue
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div key="step3" {...containerVariants}>
                                            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.5rem' }}>Final Details</h3>
                                            <div>
                                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem', fontWeight: 700, fontSize: '0.9rem' }}>
                                                    <Shield size={16} color="var(--color-primary)" /> What motivates you to join YHCA?
                                                </label>
                                                <textarea
                                                    rows="4"
                                                    value={formData.motivation}
                                                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                                                    placeholder="Tell us a bit about your passion for the environment..."
                                                    style={{ width: '100%', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', background: '#f8fafc', resize: 'none' }}
                                                />
                                            </div>
                                            <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                                                <button onClick={prevStep} className="btn" style={{ flex: 1, backgroundColor: '#f1f5f9', color: 'var(--color-text)' }}>
                                                    Back
                                                </button>
                                                <form onSubmit={handleSubmit} style={{ flex: 2 }}>
                                                    <button
                                                        disabled={status === 'submitting' || !formData.motivation}
                                                        className="btn btn-primary"
                                                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '1.2rem' }}
                                                    >
                                                        {status === 'submitting' ? 'Submitting...' : 'Submit Hero Path'}
                                                        <Send size={18} />
                                                    </button>
                                                </form>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
