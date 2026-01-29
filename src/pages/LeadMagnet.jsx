import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle, Download, ShieldCheck, Zap } from 'lucide-react';

const LeadMagnet = () => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
        }, 2000);
    };

    return (
        <Layout>
            <div className="pt-40 pb-32 min-h-screen relative overflow-hidden flex items-center">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 origin-top-right -z-1" />

                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="max-w-xl"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                                    <Zap className="w-3 h-3" /> Free Resource
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                    Get Our <span className="gradient-text">GHL Workflow</span> Snapshot for Free
                                </h1>
                                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                    We're giving away the exact automation workflow that helped a client scale from zero to $100k/mo in 90 days. No fluff, just high-converting logic.
                                </p>
                                <div className="space-y-6 mb-12">
                                    {[
                                        "Proven Multi-Channel Follow-up logic",
                                        "Smart Delay & Time-of-Day filtering",
                                        "Automated Lead Qualification tags",
                                        "CRM Cleanliness Protocols"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-lg font-medium">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-4 h-4 text-accent" />
                                            </div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                                    <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-sm">GDPR Compliant</h4>
                                        <p className="text-xs text-muted-foreground">Your data is safe. Unsubscribe at any time.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 w-full max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="glass-card rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
                            >
                                <AnimatePresence mode="wait">
                                    {status !== 'success' ? (
                                        <motion.div
                                            key="form"
                                            exit={{ opacity: 0, scale: 0.9 }}
                                        >
                                            <h3 className="text-3xl font-bold mb-8">Download The Snapshot</h3>
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-muted-foreground ml-2">Full Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="John Doe"
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-muted-foreground ml-2">Email Address</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="john@example.com"
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium"
                                                    />
                                                </div>
                                                <button
                                                    disabled={status === 'submitting'}
                                                    className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl text-lg font-bold transition-all hover:scale-[1.02] active:scale-95 glow-btn disabled:opacity-50 disabled:cursor-not-wait"
                                                >
                                                    {status === 'submitting' ? 'Sending Link...' : 'Send Me The Snapshot'}
                                                </button>
                                            </form>
                                            <p className="mt-8 text-center text-xs text-muted-foreground leading-relaxed px-6">
                                                By clicking the button, you agree to receive emails from NewLevel. We'll send you a confirmation link to verify your email.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-10"
                                        >
                                            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                                <Mail className="w-10 h-10 text-accent" />
                                            </div>
                                            <h3 className="text-3xl font-bold mb-4">Almost There!</h3>
                                            <p className="text-muted-foreground mb-8 text-lg">
                                                We've sent a confirmation email to <span className="text-white font-bold">{email}</span>.
                                                Please click the link in the email to download your snapshot.
                                            </p>
                                            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-bold inline-block mb-10">
                                                Check your spam folder if you don't see it!
                                            </div>
                                            <button
                                                onClick={() => setStatus('idle')}
                                                className="block text-muted-foreground hover:text-white font-bold transition-colors"
                                            >
                                                Didn't get the email? Try again.
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LeadMagnet;
