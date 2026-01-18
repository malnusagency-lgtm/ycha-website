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
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Link to="/" style={{
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(0.4rem, 2vw, 0.8rem)'
                    }}>
                        <img
                            src={logoImg}
                            alt="Young Heroes Logo"
                            style={{
                                height: scrolled ? '40px' : 'clamp(45px, 12vw, 60px)',
                                width: 'auto',
                                borderRadius: 'var(--radius-sm)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap' }}>
                            <span style={{
                                fontSize: scrolled ? '1rem' : 'clamp(1.1rem, 4vw, 1.35rem)',
                                fontWeight: '800',
                                color: 'var(--color-primary)',
                                lineHeight: 1.1,
                                transition: 'font-size 0.3s ease'
                            }}>
                                Young Heroes
                            </span>
                            <span style={{
                                fontSize: scrolled ? '0.65rem' : 'clamp(0.7rem, 2.5vw, 0.8rem)',
                                fontWeight: '700',
                                color: 'var(--color-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                opacity: 0.8,
                                transition: 'font-size 0.3s ease'
                            }}>
                                Climate Advocates
                            </span>
                        </div>
                    </Link>
                </motion.div>


                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', color: 'var(--color-primary)', display: 'none' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`} style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    {['Home', 'About Us', 'Programs', 'Mission', 'Donate'].map((item) => (
                        <NavLink
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                            onClick={() => setIsOpen(false)}
                            style={({ isActive }) => ({
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                color: isActive ? 'var(--color-accent)' : 'var(--color-primary)',
                                textDecoration: 'none',
                                transition: 'color 0.2s'
                            })}
                        >
                            {item}
                        </NavLink>
                    ))}

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/join" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ padding: '0.65rem 1.5rem', fontWeight: 800 }}>
                            Join Now
                        </Link>
                    </motion.div>
                </div>
            </div>
            <style>{`
        @media (max-width: 992px) {
          .nav-links {
            display: none !important;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background: white;
            padding: 7rem 2rem;
            z-index: 2000;
            text-align: center;
          }
          .nav-links.active {
            display: flex !important;
            gap: 1.5rem;
            animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .mobile-toggle {
            display: block !important;
            z-index: 2001;
          }
          .nav-links a {
            font-size: 1.8rem !important;
            width: 100%;
            padding: 1rem 0;
            border-bottom: 1px solid #f5f5f5;
          }
          .nav-links .btn {
            font-size: 1.4rem !important;
            margin-top: 2rem;
            width: 80%;
          }
        }

      `}</style>
        </nav>
    );
};

export default Navbar;
