import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import PainPoints from '@/components/home/PainPoints';
import ServicesSnapshot from '@/components/home/ServicesSnapshot';
import CaseStudies from '@/components/home/CaseStudies';
import Testimonials from '@/components/home/Testimonials';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const homeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } }
};

const Home = () => {
    return (
        <Layout>
            <motion.div
                variants={homeVariants}
                initial="initial"
                animate="animate"
            >
                <Hero />

                {/* Stunning Alternating Sections */}
                <div className="bg-[#050505] relative overflow-hidden border-y border-white/5">
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                    <PainPoints />
                </div>

                <div className="bg-background relative">
                    <ServicesSnapshot />
                </div>

                <div className="bg-[#080808] relative overflow-hidden border-y border-white/5">
                    <div className="absolute inset-0 grid-pattern opacity-10 rotate-180" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
                    <CaseStudies />
                </div>

                <div className="bg-background relative">
                    <Testimonials />
                </div>

                {/* Lead Magnet Section - High Contrast */}
                <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[160px] rounded-full -z-1 opacity-50" />
                    <div className="container mx-auto px-4">
                        <div className="glass-card rounded-[3.5rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 border-primary/20 bg-primary/5">
                            <div className="lg:w-1/2">
                                <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center mb-8">
                                    <Mail className="w-10 h-10 text-primary" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6">Free GHL Optimization <span className="gradient-text">Snapshot</span></h2>
                                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                    Get our battle-tested workflow snapshot that identifies and fixes the 7 most common automation bottlenecks in any GoHighLevel account.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3 font-bold"><CheckCircle className="w-5 h-5 text-accent" /> Ready-to-import Workflow</li>
                                    <li className="flex items-center gap-3 font-bold"><CheckCircle className="w-5 h-5 text-accent" /> Tagging & Custom Value Protocol</li>
                                    <li className="flex items-center gap-3 font-bold"><CheckCircle className="w-5 h-5 text-accent" /> CRM Hygiene Documentation</li>
                                </ul>
                                <Link to="/lead-magnet">
                                    <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 glow-btn">
                                        Download Free Snapshot
                                    </button>
                                </Link>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                                    <img src="/src/assets/automation-flow.png" alt="Automation Flow Diagram" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -z-1" />
                    <div className="container mx-auto px-4 text-center relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto"
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-8">
                                Ready to Take Your Business to a <span className="gradient-text">New Level</span>?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                Join 100+ businesses who have reclaimed their time and multiplied their revenue with our GoHighLevel conversion systems.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 glow-btn flex items-center gap-3">
                                        Book Your Strategy Call
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </a>
                                <Link to="/quiz" className="text-primary font-bold hover:underline">
                                    Take the qualified quiz first →
                                </Link>
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-4 uppercase tracking-widest font-bold">
                                * A confirmation email will be sent instantly after booking.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </Layout>
    );
};

export default Home;
