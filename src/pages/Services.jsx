import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Zap, Bot, Mail, Globe, MessageSquare, BarChart3, Settings, Users, Headphones, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const servicesList = [
    {
        icon: Settings,
        title: "GHL Setup & Optimization",
        problem: "My GHL account is a mess and I don't know where anything is.",
        solution: "We build a clean, standardized architecture with clear folders, custom values, and organized tags.",
        outcome: "A professional system that your team can actually use without headaches.",
    },
    {
        icon: Zap,
        title: "CRM & Pipeline Architecture",
        problem: "Leads are getting lost because my pipelines don't match my sales process.",
        solution: "We map your exact customer journey into GHL pipelines with automated stage movements.",
        outcome: "Full clarity on every deal and zero leads falling through the cracks.",
    },
    {
        icon: Bot,
        title: "Automation & Workflow Design",
        problem: "My workflows are breaking or sending weird messages to clients.",
        solution: "Battle-tested workflows with error handling, smart delays, and advanced if/else logic.",
        outcome: "A 'set-and-forget' system that handles follow-ups flawlessly 24/7.",
    },
    {
        icon: Mail,
        title: "Email & SMS Marketing Systems",
        problem: "My emails go to spam and my SMS response rates are pathetic.",
        solution: "Advanced deliverability setup (SPF, DKIM, DMARC) and high-converting template library.",
        outcome: "Consistent inbox placement and meaningful conversations that lead to sales.",
    },
    {
        icon: Globe,
        title: "Funnel & Website Design",
        problem: "My website looks like it's from 2010 and doesn't convert.",
        solution: "Modern, fast-loading, conversion-optimized designs built directly inside GHL.",
        outcome: "A premium brand image that turns cold traffic into hot leads.",
    },
    {
        icon: MessageSquare,
        title: "AI Chatbot & Conversation Flows",
        problem: "I'm staying up until 2 AM responding to basic lead questions.",
        solution: "Custom AI agents that qualify leads, answer FAQs, and book calls automatically.",
        outcome: "Reclaim your time while providing instant 24/7 service to your prospects.",
    },
];

const Services = () => {
    return (
        <Layout>
            <div className="pt-40 pb-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-8 italic">Our <span className="gradient-text">Core Services</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We don't just 'use' GoHighLevel. We push it to its absolute limits to create growth machines for our clients.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "group relative border border-white/5 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center hover:border-primary/20 transition-all overflow-hidden",
                                    index % 2 === 0 ? "bg-card" : "bg-bg-secondary"
                                )}
                            >
                                {index % 2 !== 0 && <div className="absolute inset-0 grid-pattern opacity-10" />}
                                <div className="lg:w-1/3 relative z-10">
                                    <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                        <service.icon className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                                    <div className="flex items-center gap-2 text-primary font-bold">
                                        <span>Explore System</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>

                                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">The Problem:</h4>
                                        <p className="text-destructive font-medium italic">"{service.problem}"</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">The Solution:</h4>
                                        <p className="text-foreground leading-relaxed">{service.solution}</p>
                                    </div>
                                    <div className="md:col-span-2 pt-6 border-t border-white/5">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-accent mb-4">The Outcome:</h4>
                                        <p className="text-xl font-bold text-accent">{service.outcome}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 text-center bg-primary p-12 md:p-24 rounded-[4rem] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Need Something Custom?</h2>
                            <p className="text-primary-foreground/80 text-xl mb-12 max-w-2xl mx-auto">
                                Our team of engineers can build anything inside (or outside) of GoHighLevel. If you can dream it, we can automate it.
                            </p>
                            <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer">
                                <button className="bg-white text-primary px-12 py-6 rounded-2xl text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl">
                                    Let's Talk About Your Custom Project
                                </button>
                            </a>
                            <p className="text-[10px] text-white/60 mt-6 font-bold uppercase tracking-widest italic">
                                * Confirmation email sent instantly after booking
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Services;
