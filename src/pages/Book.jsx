import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, Video, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';

const Book = () => {
    return (
        <Layout>
            <div className="pt-40 pb-32">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Info Column */}
                        <div className="lg:w-1/3">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <h1 className="text-4xl md:text-5xl font-black mb-6">Book Your Free <span className="gradient-text">Strategy Call</span></h1>
                                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                                    In this 30-minute call, we'll audit your current GHL setup, identify automation gaps, and build a custom scaling roadmap for your business.
                                </p>

                                <div className="space-y-8 mb-12">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">30 Minutes</h4>
                                            <p className="text-sm text-muted-foreground">Focused strategy session</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <Video className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Video Conference</h4>
                                            <p className="text-sm text-muted-foreground">Zoom or Google Meet link provided after booking</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card border border-white/10 rounded-[2rem] p-8">
                                    <h4 className="font-bold mb-6">What to expect on the call:</h4>
                                    <ul className="space-y-4">
                                        {[
                                            "Current System Audit",
                                            "Automation Gap Analysis",
                                            "Personalized Growth Plan",
                                            "Q&A with GHL Experts"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle className="w-4 h-4 text-accent" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>

                        {/* Booking Column */}
                        <div className="lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-card border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl min-h-[600px] flex flex-col items-center justify-center relative"
                            >
                                {/* Mock Calendar / GHL Widget Placeholder */}
                                <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                                <Calendar className="w-20 h-20 text-primary/20 mb-8" />
                                <h2 className="text-2xl font-bold mb-4">GoHighLevel Calendar Widget</h2>
                                <p className="text-muted-foreground mb-10 text-center max-w-md px-6">
                                    Normally, your GHL Calendar embed would go here. For this demo, we've designed this area to be high-converting and clean.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-8 w-full max-w-2xl">
                                    {["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"].map((time, i) => (
                                        <button key={i} className="py-4 border border-white/10 rounded-xl hover:border-primary hover:bg-primary/5 transition-all font-bold">
                                            {time}
                                        </button>
                                    ))}
                                </div>

                                <p className="mt-12 text-xs text-muted-foreground font-medium flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" /> Secure & Private Booking
                                </p>

                                <div className="mt-12 p-1 px-4 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 mb-10">
                                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">3 spots left today</span>
                                </div>
                            </motion.div>

                            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-10">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(n => (
                                            <div key={n} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${n}`} alt="user" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground">Joined by <b>500+</b> agencies this month</p>
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold">
                                    <a href="#" className="hover:text-primary flex items-center gap-1 transition-colors">Direct Support <ExternalLink className="w-3 h-3" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Book;
