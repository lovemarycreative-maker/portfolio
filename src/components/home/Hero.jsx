import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import maryProfile from '@/assets/mary-photo.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
            <div className="absolute inset-0 grid-pattern opacity-10" />

            {/* Floating Blobs */}
            <motion.div
                animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"
            />
            <motion.div
                animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                #1 GHL Automation Strategist
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1]"
                        >
                            Funnels and automation{' '}
                            <span className="gradient-text italic">don't have to feel hard.</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
                        >
                            I help busy founders grow their business without the stress. Simple funnels. Smart automation. Real results.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
                        >
                            <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer">
                                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl text-base font-bold transition-all hover:scale-105 active:scale-95 glow-btn flex items-center gap-3 shadow-xl">
                                    Book a Quick Call
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </a>
                            <Link to="/portfolio">
                                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl text-base font-bold transition-all hover:border-primary/50">
                                    View My Work
                                </button>
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
                        >
                            {[
                                "50+ Funnels Helped",
                                "5-Star Rated",
                                "GHL Certified"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                    <span className="font-semibold">{text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Decorative Frame */}
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 blur-3xl rounded-full scale-110" />

                            {/* Main Image Container */}
                            <div className="relative w-full max-w-md lg:max-w-lg">
                                <div className="relative">
                                    <img
                                        src={maryProfile}
                                        alt="Mary Creative - GHL Automation Expert"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, type: "spring" }}
                                    className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/30 rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-sm"
                                >
                                    <div className="text-xs font-black uppercase tracking-widest text-primary mb-1">
                                        Sales & Automation Expert
                                    </div>
                                    <div className="text-sm font-bold text-muted-foreground">
                                        50+ founders helped
                                    </div>
                                </motion.div>

                                {/* Decorative Corner Elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-primary/30 rounded-tr-3xl" />
                                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-accent/30 rounded-bl-3xl" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
