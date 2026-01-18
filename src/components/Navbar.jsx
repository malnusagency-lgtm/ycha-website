import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/images/logo.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: 'var(--shadow-sm)',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            padding: '0.5rem 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div className="logo">
                    <Link to="/" style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <img src={logoImg} alt="YHCA Logo" style={{ height: '50px', width: 'auto' }} />
                        <span style={{ display: 'none' }}>YHCA</span> {/* Hidden text for SEO */}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer' }}>
                    <span style={{ fontSize: '1.5rem' }}>☰</span>
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`} style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: '2rem'
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
                    <li>
                        <Link to="/join" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Join Now</Link>
                    </li>
                </ul>
            </div>
            <style>{`
        .active-link {
          color: var(--color-primary);
          border-bottom: 2px solid var(--color-accent);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 1rem;
            box-shadow: var(--shadow-md);
            text-align: center;
          }
          .nav-links.active {
            display: flex !important;
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
