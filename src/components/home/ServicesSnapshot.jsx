import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Bot, Mail, Globe, MessageSquare, BarChart3, ChevronRight } from 'lucide-react';

const services = [
    {
        icon: Zap,
        title: "GHL Setup & Optimization",
        description: "Complete CRM architecture designed for scalability and ease of use.",
        tag: "Foundation"
    },
    {
        icon: Bot,
        title: "Smart Automations",
        description: "Complex workflows that handle your leads while you sleep.",
        tag: "Growth"
    },
    {
        icon: Mail,
        title: "Email & SMS Marketing",
        description: "Direct-response campaigns with optimized deliverability.",
        tag: "Revenue"
    },
    {
        icon: Globe,
        title: "High-Converting Funnels",
        description: "Website designs that don't just look good—they convert.",
        tag: "Design"
    },
    {
        icon: MessageSquare,
        title: "AI Chatbot Systems",
        description: "24/7 qualification of leads through intelligent conversational AI.",
        tag: "Scaling"
    },
    {
        icon: BarChart3,
        title: "Reporting & Dashboards",
        description: "Deep-dive analytics so you know exactly what's working.",
        tag: "Data"
    },
];

const ServicesSnapshot = () => {
    return (
        <section className="py-32 section-gradient overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Everything You Need to <span className="gradient-text">Scale</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            We handle the heavy technical lifting so you can focus on what you do best: running your business.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/services">
                            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                                View All Services <ChevronRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-card border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="absolute top-8 right-8 text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                                {service.tag}
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <service.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold group-hover:text-primary transition-colors">
                                Learn More <ChevronRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSnapshot;
