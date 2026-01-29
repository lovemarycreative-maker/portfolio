import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Layers, MousePointer2, Mail, ExternalLink, Zap, X, CheckCircle2, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: "Eco-Friendly Brand Funnel",
        type: "Funnel Design",
        description: "A multi-step funnel for a sustainable product brand resulting in a 24% increase in AOV.",
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=800",
        icon: MousePointer2,
        details: {
            problem: "The brand had high traffic but low checkout completions because of a cluttered 1-step checkout process.",
            solution: "We implemented a high-speed 2-step order form with automated order bumps and one-click upsells.",
            results: ["24% Increase in AOV", "Reduced Cart Abandonment by 35%", "Implemented Post-Purchase SMS Flows"],
            workflow: "Lead In -> 2-Step Order -> Upsell 1 -> Upsell 2 -> Confirmation -> Post-Purchase SMS Automation."
        }
    },
    {
        id: 2,
        title: "Real Estate Lead Engine",
        type: "Automation Flow",
        description: "Automated lead distribution and follow-up system for a 50+ agent brokerage.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
        icon: Zap,
        details: {
            problem: "Agents were manually claiming leads from a spreadsheet, leading to 4-hour delay times.",
            solution: "Custom lead-round-robin API integration within GHL to call agents instantly when a lead arrives.",
            results: ["Avg. Response Time: 45 Seconds", "100% Agent Accountability", "$2M+ in Closed Volume in 90 Days"],
            workflow: "Facebook Form -> Lead Distributor -> Agent Phone Call -> Automated Follow-up SMS if No Answer."
        }
    },
    {
        id: 3,
        title: "SaaS Onboarding System",
        type: "CRM Architecture",
        description: "Complete GHL setup for a B2B SaaS company managing 10k+ monthly users.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
        icon: Layers,
        details: {
            problem: "Users were dropping off during the 7-day trial because of a lack of guidance.",
            solution: "Behavior-based email and in-app triggers that sent specific tutorials based on what the user hadn't done yet.",
            results: ["18% Reduction in Churn", "40% Increase in Trial-to-Paid Conversion", "Automated Support Ticket Creation"],
            workflow: "Signup -> 15-Minute 'First Event' Check -> Dynamic Email sequence -> Sales Notification on High Activity."
        }
    },
    {
        id: 4,
        title: "Med-Spa Retention Machine",
        type: "Email Marketing",
        description: "Re-activation campaigns that brought back 15% of inactive clients within 30 days.",
        image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800",
        icon: Mail,
        details: {
            problem: "Database of 5,000 past clients was sitting idle without any outreach.",
            solution: "Seasonal re-activation blast combined with a personalized 9-word email technique.",
            results: ["$45k in Direct Bookings", "15% Reactivation Rate", "300+ New 5-Star Reviews via Automated Ask"],
            workflow: "Idle Filter -> 9-Word Email -> SMS Follow-up -> Booking Calendar -> Review Request Flow."
        }
    },
    {
        id: 5,
        title: "Law Firm Pipeline Logic",
        type: "CRM Setup",
        description: "HIPAA-ready pipeline management with automated document generation triggers.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
        icon: LayoutGrid,
        details: {
            problem: "Attorneys were spending 10+ hours a week manually drafting initial retainer agreements.",
            solution: "Integration between GHL Pipelines and PandaDoc for 1-click document issuance.",
            results: ["Saved 40+ Attorney Hours Monthly", "Reduced Intake Errors to 0%", "Secure HIPAA-Compliant Data Storage"],
            workflow: "Qualified Lead -> Pipeline Drag-and-Drop -> Document Auto-Gen -> e-Signature -> Onboarding Flow."
        }
    },
    {
        id: 6,
        title: "Crypto Education Funnel",
        type: "E-learning Setup",
        description: "Full course platform setup inside GHL with automated certificate issuance.",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
        icon: ExternalLink,
        details: {
            problem: "Manual grading and student management was limiting scaling beyond 100 students.",
            solution: "Fully automated LMS within GoHighLevel with gated content and quiz-locked progression.",
            results: ["Scalability for 10k+ Students", "98% Pass Rate via Automated Remediation", "Integrated Community Discord Bot"],
            workflow: "Purchase -> Membership Grant -> Auto-Unlock Lesson 1 -> Quiz Pass -> Next Lesson -> Certificate Gen."
        }
    },
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Layout>
            <div className="pt-40 pb-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24 max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-8 italic">Proof Of <span className="gradient-text">Results</span></h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We don't just build systems; we build assets that generate measurable ROI. Explore our portfolio of high-performing GoHighLevel implementations.
                        </p>
                    </motion.div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-card border border-white/5 mb-8 hover:border-primary/40 transition-all duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-100 transition-opacity" />

                                    <div className="absolute top-8 left-8 text-[10px] font-black uppercase tracking-[0.2em] text-white px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                                        {project.type}
                                    </div>

                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <project.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4 italic leading-tight">{project.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                            View Case Study <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedProject && (
                            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute inset-0 bg-background/95 backdrop-blur-xl"
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="relative bg-card border border-white/10 rounded-[3rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-3xl"
                                >
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-20"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        <div className="h-64 lg:h-full relative">
                                            <img
                                                src={selectedProject.image}
                                                alt={selectedProject.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent hidden lg:block" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:hidden" />
                                        </div>

                                        <div className="p-10 lg:p-16">
                                            <div className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
                                                {selectedProject.type}
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-black mb-10 italic">
                                                {selectedProject.title}
                                            </h2>

                                            <div className="space-y-10">
                                                <div>
                                                    <h4 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">The Challenge:</h4>
                                                    <p className="text-lg text-foreground italic leading-relaxed">
                                                        "{selectedProject.details.problem}"
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Our Solution:</h4>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {selectedProject.details.solution}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-6">Key Outcomes:</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {selectedProject.details.results.map((res, i) => (
                                                            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                                                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                                                <span className="text-sm font-bold">{res}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-6">
                                                    <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer" className="flex-1">
                                                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl text-lg font-black transition-all glow-btn flex items-center justify-center gap-3">
                                                            Book Strategy Call
                                                            <PlayCircle className="w-5 h-5" />
                                                        </button>
                                                    </a>
                                                    <button
                                                        onClick={() => setSelectedProject(null)}
                                                        className="px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-sm font-bold"
                                                    >
                                                        Close Detail
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>

                    <div className="mt-32 -mx-4 px-4 py-24 bg-bg-secondary relative overflow-hidden rounded-[4rem]">
                        <div className="absolute inset-0 grid-pattern opacity-10" />
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10 text-center"
                        >
                            <h2 className="text-3xl md:text-5xl font-black mb-8 italic">Ready To Be Our Next Success Story?</h2>
                            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                                We're looking for serious partners who want to dominate their niche with superior automation and systems.
                            </p>
                            <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer">
                                <button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-2xl text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl">
                                    Start Your Project
                                </button>
                            </a>
                            <p className="text-[10px] text-muted-foreground mt-6 font-bold uppercase tracking-widest italic">
                                * A confirmation email will be sent instantly after booking.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Portfolio;
