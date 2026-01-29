import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Send, CheckCircle, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email Us",
            value: "lovemary.creative@gmail.com",
            href: "mailto:lovemary.creative@gmail.com"
        },
        {
            icon: MessageSquare,
            label: "Location",
            value: "Abuja, Nigeria",
            href: "#"
        },
        {
            icon: Phone,
            label: "Call Us",
            value: "+234 916 705 8983",
            href: "tel:+2349167058983"
        }
    ];

    return (
        <Layout>
            <div className="pt-40 pb-32 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-10 z-0" />
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full z-0" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full z-0" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                            {/* Left Side: Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-5xl md:text-7xl font-black mb-8 italic">Let's Build the <br /><span className="gradient-text">Future</span> Together</h1>
                                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                    Ready to stop fighting your tech and start scaling your revenue? Book a consultation or send us a message below.
                                </p>

                                <div className="space-y-8 mb-12">
                                    {contactInfo.map((info, i) => (
                                        <a
                                            key={i}
                                            href={info.href}
                                            className="flex items-center gap-6 group"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                                                <info.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{info.label}</p>
                                                <p className="text-xl font-bold">{info.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                <div className="pt-12 border-t border-white/10">
                                    <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-6">Social Channels</p>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: Instagram, href: "https://www.instagram.com/mary_highlevel_ai_automation/" },
                                            { icon: Linkedin, href: "https://www.linkedin.com/in/mary-creative-967a53397/" },
                                            { icon: Twitter, href: "https://x.com/MaryCreati1927" }
                                        ].map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                            >
                                                <social.icon className="w-5 h-5 text-white" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Side: Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="glass-card p-8 md:p-12 rounded-[3rem] border-white/10 shadow-3xl relative"
                            >
                                {status === 'success' ? (
                                    <div className="py-20 text-center">
                                        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle className="w-10 h-10 text-accent" />
                                        </div>
                                        <h2 className="text-3xl font-black mb-4">Message Received!</h2>
                                        <p className="text-muted-foreground mb-4">Our deployment team will reach out within 2 hours.</p>
                                        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-10 max-w-sm mx-auto">
                                            <p className="text-xs font-bold text-primary italic uppercase tracking-widest">
                                                Check your inbox — we just sent a confirmation receipt.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="text-primary font-bold hover:underline flex items-center gap-2 mx-auto"
                                        >
                                            Send another message <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest ml-4">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest ml-4">Work Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest ml-4">Company Name</label>
                                            <input
                                                type="text"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                                                placeholder="Agency Solutions"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest ml-4">How can we help?</label>
                                            <textarea
                                                rows="4"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                                                placeholder="Tell us about your GHL bottlenecks..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-2xl text-xl font-black transition-all hover:scale-[1.02] active:scale-[0.98] glow-btn flex items-center justify-center gap-3 disabled:opacity-50"
                                        >
                                            {status === 'loading' ? 'Deploying...' : 'Deploy Message'}
                                            <Send className="w-5 h-5" />
                                        </button>

                                        <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-black">
                                            We respond to all inquiries within 2 business hours.
                                        </p>
                                    </form>
                                )}
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
