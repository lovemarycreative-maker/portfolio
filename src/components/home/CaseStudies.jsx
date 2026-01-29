import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, PlayCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
    {
        title: "E-comm Empire Automation",
        category: "Automation & CRM",
        results: ["340% increase in lead response rate", "$50k saved in manual labor annually"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        link: "/portfolio",
        cta: "Explore System"
    },
    {
        title: "The Coaching Funnel Masterclass",
        category: "Funnel & Email Design",
        results: ["42% Conversion Rate on Cold Traffic", "Generated $1.2M in 6 Months (Fully Automated)"],
        image: "/src/assets/coaching-funnel.png",
        link: "/portfolio",
        cta: "See Funnel"
    },
    {
        title: "SaaS Scaling Infrastructure",
        category: "GHL Architecture",
        results: ["Seamless 50+ user onboarding system", "Reduced churn by 18% with native GHL logic"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
        link: "/portfolio",
        cta: "View Logic"
    },
    {
        title: "Dental Clinic Patient Engine",
        category: "Lead Generation",
        results: ["85 New Patients in 1st Month", "100% Automated Appointment Reminders"],
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
        link: "/portfolio",
        cta: "View Case"
    },
    {
        title: "Real Estate Power Pipeline",
        category: "CRM Management",
        results: ["Zero Leads Lost in 90 Days", "Automated Contract Gen via API"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
        link: "/portfolio",
        cta: "See Pipeline"
    },
    {
        title: "Solar Sales Accelerator",
        category: "Sales Automation",
        results: ["25% Increase in Close Rate", "Manual Data Entry Reduced by 90%"],
        image: "/src/assets/solar-sales.png",
        link: "/portfolio",
        cta: "Case Highlights"
    },
];

const CaseStudies = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6 italic">
                        Real Results for <span className="gradient-text">Real Agencies</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        We don't just talk about growth. We build the high-performance engines that prove it every single day.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {cases.map((cs, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col bg-card/30 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all overflow-hidden"
                        >
                            {/* Improved Image Section */}
                            <div className="overflow-hidden relative aspect-video">
                                <img
                                    src={cs.image}
                                    alt={cs.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-100" />
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                        <ExternalLink className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                                    {cs.category}
                                </div>
                                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors italic">
                                    {cs.title}
                                </h3>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {cs.results.map((res, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                                            <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-accent" />
                                            </div>
                                            {res}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <Link to={cs.link} className="flex-1">
                                        <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all font-bold flex items-center justify-center gap-2 group/btn">
                                            {cs.cta}
                                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </button>
                                    </Link>
                                    <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer">
                                        <button className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                            <PlayCircle className="w-6 h-6" />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
