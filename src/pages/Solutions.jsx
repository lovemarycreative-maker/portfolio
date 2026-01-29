import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ShieldAlert, RefreshCcw, UserMinus, MailX, EyeOff, LayoutGrid, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
    {
        icon: ShieldAlert,
        title: "The 'Messy Account' Fixer",
        points: [
            "Full account audit & reorganization",
            "Standard Operating Procedures (SOPs)",
            "Team training & documentation",
            "Clean tag & folder hierarchy"
        ],
        cta: "Clean My Account",
    },
    {
        icon: RefreshCcw,
        title: "Broken Automation Recovery",
        points: [
            "Workflow logic stress-testing",
            "Lead-loss prevention protocols",
            "Smart delay optimization",
            "Automated error notification system"
        ],
        cta: "Fix My Workflows",
    },
    {
        icon: UserMinus,
        title: "Lead Conversion Engine",
        points: [
            "Multi-channel follow-up systems",
            "Speed-to-lead automation",
            "Abandoned checkout recovery",
            "Appointment reminder sequences"
        ],
        cta: "Boost My Conversions",
    },
    {
        icon: MailX,
        title: "Inbox Deliverability Pro",
        points: [
            "Full technical DNS setup",
            "Domain reputation warming",
            "List hygiene & verification",
            "Spam-trigger content audit"
        ],
        cta: "Inbox My Emails",
    },
    {
        icon: EyeOff,
        title: "Data Visibility Dashboard",
        points: [
            "Custom GHL dashboard design",
            "Real-time ROI tracking",
            "Conversion rate monitoring",
            "LTV & CAC reporting"
        ],
        cta: "Show Me The Data",
    },
    {
        icon: LayoutGrid,
        title: "Full DFY Ecosystem",
        points: [
            "End-to-end account management",
            "Ongoing optimization & scaling",
            "New feature implementation",
            "Priority technical support"
        ],
        cta: "Scale My Business",
    },
];

const Solutions = () => {
    return (
        <Layout>
            <div className="pt-40 pb-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24 max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-8 italic">Problem-Focused <span className="gradient-text">Solutions</span></h1>
                        <p className="text-xl text-muted-foreground">
                            We don't sell services, we solve the specific bottlenecks that are keeping you from scaling your GHL agency.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {solutions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card/50 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] flex flex-col hover:border-accent/40 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors">
                                    <item.icon className="w-8 h-8 text-white group-hover:text-accent transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-8 italic">{item.title}</h3>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full py-4 rounded-xl border border-white/10 hover:border-accent hover:text-accent font-bold transition-all flex items-center justify-center gap-2">
                                        {item.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 -mx-4 px-4 py-24 bg-bg-secondary relative overflow-hidden rounded-[4rem]">
                        <div className="absolute inset-0 grid-pattern opacity-10" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex flex-col md:flex-row items-center gap-12"
                        >
                            <div className="md:w-2/3">
                                <h2 className="text-3xl md:text-5xl font-black mb-6">Stop Fighting Your Technology.</h2>
                                <p className="text-xl text-muted-foreground mb-8">
                                    Every minute you spend fixing a broken automation is a minute you aren't spending on growth. Let the experts handle the tech while you take the wheel.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold">100+ GHL Accounts Fixed</div>
                                    <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold">50,000+ Workflows Scaled</div>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-full text-center">
                                <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full bg-accent hover:bg-accent/90 text-white py-6 rounded-2xl text-xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95">
                                        Get a Custom Quote
                                    </button>
                                </a>
                                <p className="text-[10px] text-muted-foreground mt-4 font-bold uppercase tracking-widest italic">
                                    Confirmation email sent upon booking
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Section: Systems Preview */}
                    <section className="py-32 bg-background border-t border-white/5 -mx-4 px-4 overflow-hidden">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Visualizing Your <span className="gradient-text">Success</span></h2>
                                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                        We don't just build systems in the background. We design high-fidelity dashboards and workflows that give you absolute clarity on your business performance.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                            </div>
                                            <p className="font-bold text-lg">Real-time Lead Scoring & Analytics</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                            </div>
                                            <p className="font-bold text-lg">Visual Automation Flow Mappings</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                            </div>
                                            <p className="font-bold text-lg">Transparent ROI Dashboards</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
                                        <img
                                            src="/src/assets/crm-dashboard.png"
                                            alt="CRM Dashboard Preview"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl border-primary/20 animate-bounce">
                                        <p className="text-4xl font-black text-primary">+340%</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Lead Conversion Increase</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Solutions;
