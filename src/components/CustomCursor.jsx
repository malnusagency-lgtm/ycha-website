import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, .card, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                animate={{
                    x: mousePos.x - 6,
                    y: mousePos.y - 6,
                    scale: isHovering ? 2.5 : 1,
                    opacity: 1
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 250, restDelta: 0.001, mass: 0.1 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '12px',
                    height: '12px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: isHovering ? 'difference' : 'normal',
                }}
            />
            <motion.div
                animate={{
                    x: mousePos.x - 24,
                    y: mousePos.y - 24,
                    scale: isHovering ? 1.5 : 1,
                    opacity: 0.3
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 150, restDelta: 0.001, mass: 0.5 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '48px',
                    height: '48px',
                    border: '1px solid var(--color-primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                }}
            />
            <style>{`
        * { cursor: none !important; }
        @media (max-width: 1024px) {
          * { cursor: auto !important; }
          div[style*="zIndex: 9999"], div[style*="zIndex: 9998"] { display: none !important; }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
