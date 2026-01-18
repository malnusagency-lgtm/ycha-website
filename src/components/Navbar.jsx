import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Globe, Users } from 'lucide-react';
import logoImg from '../assets/images/logo.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 1)',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            padding: scrolled ? '0.5rem 0' : '1rem 0',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/" style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <img src={logoImg} alt="YHCA Logo" style={{ height: scrolled ? '40px' : '50px', width: 'auto', transition: 'height 0.3s ease' }} />
                        <span style={{ display: scrolled ? 'inline' : 'none', fontSize: '1.2rem', color: 'var(--color-primary)' }}>YHCA</span>
                    </Link>
                </motion.div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`} style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    <NavLink to="/" onClick={() => setIsOpen(false)} style={({ isActive }) => ({
                        fontWeight: 600,
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text)'
                    })}>Home</NavLink>

                    <NavLink to="/about" onClick={() => setIsOpen(false)} style={({ isActive }) => ({
                        fontWeight: 600,
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text)'
                    })}>About Us</NavLink>

                    <NavLink to="/programs" onClick={() => setIsOpen(false)} style={({ isActive }) => ({
                        fontWeight: 600,
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text)'
                    })}>Programs</NavLink>

                    <NavLink to="/mission" onClick={() => setIsOpen(false)} style={({ isActive }) => ({
                        fontWeight: 600,
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text)'
                    })}>Our Mission</NavLink>

                    <Link to="/donate" onClick={() => setIsOpen(false)} style={{
                        color: 'var(--color-accent)',
                        fontWeight: 700,
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        padding: '0.4rem 1rem',
                        borderRadius: '2rem'
                    }}>Donate</Link>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/join" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Join Now
                        </Link>
                    </motion.div>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 2rem 1rem;
            box-shadow: var(--shadow-md);
            text-align: center;
          }
          .nav-links.active {
            display: flex !important;
            gap: 1.5rem;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
