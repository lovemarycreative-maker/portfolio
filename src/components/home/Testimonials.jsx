import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "E-commerce Brand Owner",
        content: "NewLevel transformed our chaotic GHL setup into a revenue-generating machine. Our follow-up rate increased by 340% and sales are up 50%. The team is brilliant!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Marcus Chen",
        role: "Agency Founder",
        content: "Finally, a team that actually understands GoHighLevel. They built automations that work flawlessly and our team saves 25+ hours weekly. Highly recommend!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Jessica Rivera",
        role: "Coaching Business",
        content: "From messy funnels to a seamless customer journey. NewLevel handled everything and our conversion rate doubled in 30 days. Life changing.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    },
];

const Testimonials = () => {
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
                        Trusted by World-Class <span className="gradient-text">Operators</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Hear from the business owners who have scaled their operations to new heights with our systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-white/5 p-8 rounded-3xl relative"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-8 italic">
                                "{t.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-lg" />
                                <div>
                                    <h4 className="font-bold">{t.name}</h4>
                                    <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
