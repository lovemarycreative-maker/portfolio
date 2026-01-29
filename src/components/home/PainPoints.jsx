import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Target, Mail, BarChart3, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const painPoints = [
    { icon: Layers, problem: "Messy GHL account & organization", solution: "Clean structure & standard SOPs" },
    { icon: Zap, problem: "Broken or confusing automations", solution: "Proven, stress-tested workflows" },
    { icon: Target, problem: "Leads dropping through the cracks", solution: "Smart, multi-channel follow-up" },
    { icon: Mail, problem: "Emails landing in the spam folder", solution: "Advanced deliverability setup" },
    { icon: BarChart3, problem: "Zero visibility into your ROI", solution: "Real-time custom dashboards" },
    { icon: Users, problem: "Doing everything yourself manually", solution: "Full 'Done-For-You' systems" },
];

const PainPoints = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        We Kill Your <span className="gradient-text">GoHighLevel</span> Nightmares
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Stop struggling with technical debt. We turn your scattered tools into one clean, revenue-driven machine.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {painPoints.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to="/contact"
                                className="glass-card rounded-3xl p-8 hover-lift group relative block h-full border-primary/10 hover:border-primary/40 transition-colors"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-muted-foreground text-sm line-through decoration-destructive/50 italic mb-2">
                                            "{item.problem}"
                                        </p>
                                        <p className="text-xl font-bold flex items-center gap-2">
                                            <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                                            {item.solution}
                                        </p>
                                    </div>
                                    <div className="mt-auto text-xs font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        Fix This Now →
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
