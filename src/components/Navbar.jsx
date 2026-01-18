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
                        <span style={{ display: 'none' }}>YHCA</span>
                    </Link>
                </motion.div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`} style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} style={{ fontWeight: 600 }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''} style={{ fontWeight: 600 }}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mission" className={({ isActive }) => isActive ? 'active-link' : ''} style={{ fontWeight: 600 }}>Our Mission</NavLink>
                    </li>
                    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/join" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Join Now
                        </Link>
                    </motion.li>
                </ul>
            </div>
            <style>{`
        .active-link {
          color: var(--color-primary);
          position: relative;
        }
        .active-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-accent);
        }
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
