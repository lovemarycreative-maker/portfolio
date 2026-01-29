import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import logo from '@/assets/mary-logo-new.jpg';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 md:top-10 left-0 right-0 z-50 transition-all duration-300 px-4',
                scrolled ? 'md:top-2' : ''
            )}
        >
            <div className={cn(
                'container mx-auto max-w-7xl rounded-full border transition-all duration-300',
                scrolled
                    ? 'bg-background/80 backdrop-blur-lg border-white/10 py-2 shadow-lg'
                    : 'bg-transparent border-transparent py-4'
            )}>
                <div className="flex items-center justify-between px-6">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src={logo} alt="Mary Creative Logo" className="h-10 w-10 object-contain" />
                        <span className="text-xl font-bold">
                            Mary<span className="text-primary">Creative</span>
                        </span>
                    </Link>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary relative py-1',
                                    location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                                )}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer">
                            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 glow-btn flex items-center gap-2">
                                Book Call
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-foreground p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-4 right-4 mt-2 bg-card border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        'text-lg font-medium py-2',
                                        location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-white/5 my-2" />
                            <Link to="/book" onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-primary text-white py-3 rounded-xl font-bold">
                                    Book Free Call
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
