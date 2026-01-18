import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Trees, Users, Globe } from 'lucide-react';

const Counter = ({ value, label, icon: Icon, suffix = "", color = "var(--color-primary)" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const spring = useSpring(0, { stiffness: 100, damping: 30 });
    const displayValue = useTransform(spring, (current) => Math.floor(current).toLocaleString() + suffix);

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <div ref={ref} style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            flex: 1,
            minWidth: '200px'
        }}>
            <div style={{ color, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <Icon size={40} />
            </div>
            <motion.h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color }}>
                {displayValue}
            </motion.h3>
            <p style={{ fontWeight: 600, color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {label}
            </p>
        </div>
    );
};

const ImpactCounter = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Collective Impact</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                        Every action counts. Together, we are making a measurable difference for our planet's future.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <Counter value={5000} label="Trees Planted" icon={Trees} suffix="+" color="#10B981" />
                    <Counter value={500} label="Heroes Joined" icon={Users} suffix="+" color="#3B82F6" />
                    <Counter value={12} label="Countries Active" icon={Globe} color="#F59E0B" />
                </div>
            </div>
        </section>
    );
};

export default ImpactCounter;
