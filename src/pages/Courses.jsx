import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Clock, BarChart, BookOpen, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
    {
        title: "GHL Account Infrastructure",
        description: "The SOP for setting up agency accounts that don't break. Folders, tags, and standard naming protocols.",
        modules: 15,
        duration: "5 Hours",
        level: "Beginner",
        price: "Free",
        icon: BookOpen,
    },
    {
        title: "The Workflow Architect",
        description: "Advanced automation logic using math operators, custom fields, and webhook integrations.",
        modules: 24,
        duration: "12 Hours",
        level: "Expert",
        price: "$497",
        icon: BarChart,
    },
    {
        title: "Cold Email Inboxing Hub",
        description: "The technical setup for dedicated sending domains and deliverability optimization in GHL.",
        modules: 10,
        duration: "4 Hours",
        level: "Advanced",
        price: "$197",
        icon: CheckCircle,
    },
];

const Courses = () => {
    return (
        <Layout>
            <div className="pt-40 pb-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6">NewLevel <span className="gradient-text">Academy</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Learn the exact systems we use to scale businesses. From foundations to advanced automation protocols.
                        </p>
                    </motion.div>

                    {/* Featured Course */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-primary/20 via-accent/5 to-card border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center"
                        >
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="px-3 py-1 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-tighter">New Release</div>
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-tighter flex items-center gap-1">
                                        <Crown className="w-3 h-3 text-yellow-500" /> Premium
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">GHL Masterclass: <span className="gradient-text">The 7-Figure Systems</span></h2>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                    The ultimate guide to building a high-ticket agency or coaching business using GoHighLevel. We reveal every automation, every funnel, and every prompt Mary uses.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-5 h-5 text-accent" />
                                        <span>50+ Detailed Modules</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-5 h-5 text-accent" />
                                        <span>Weekly Q&A Calls</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-5 h-5 text-accent" />
                                        <span>GHL Snapshot Included</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-5 h-5 text-accent" />
                                        <span>LIFETIME Access</span>
                                    </div>
                                </div>
                                <Link to="/contact">
                                    <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 glow-btn">
                                        Enroll Now - $997
                                    </button>
                                </Link>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="Course Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform cursor-pointer">
                                            <Play className="w-8 h-8 fill-current translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Other Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card border border-white/5 rounded-[2rem] p-8 hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <course.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                                    {course.description}
                                </p>
                                <div className="flex items-center justify-between text-xs text-muted-foreground font-bold mb-8 uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {course.modules} Modules</span>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-black">{course.price}</span>
                                    <Link to="/contact">
                                        <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                            View Details <Play className="w-3 h-3" />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Courses;
