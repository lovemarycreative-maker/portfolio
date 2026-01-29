import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: "How to Build a $10k/mo Agency with GHL Automations",
        excerpt: "Discover the exact system we use to automate client acquisition and fulfillment using GoHighLevel's advanced workflow engine.",
        author: "Mary Creative",
        date: "Jan 25, 2026",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "5 GHL Workflow Mistakes That Are Killing Your Conversions",
        excerpt: "Are your automations actually driving customers away? Learn how to fix the most common GHL setup errors today.",
        author: "Mary Creative",
        date: "Jan 20, 2026",
        category: "Tutorials",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "The Future of AI in GoHighLevel: What You Need to Know",
        excerpt: "AI is changing the game. We dive deep into the new conversational AI features and how to leverage them for your clients.",
        author: "Mary Creative",
        date: "Jan 15, 2026",
        category: "AI Automation",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Case Study: Scaling a Solar Company by 300% in 90 Days",
        excerpt: "See the behind-the-scenes breakdown of our Solar Sales Accelerator and the impact of pure automation.",
        author: "Mary Creative",
        date: "Jan 10, 2026",
        category: "Case Studies",
        image: "/src/assets/solar-sales.png"
    }
];

const Blog = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'newsletter', email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                throw new Error('Failed');
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <Layout>
            <div className="pt-40 pb-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20 max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-8 italic">Automation <span className="gradient-text">Insights</span></h1>
                        <p className="text-xl text-muted-foreground">
                            Deep dives into GoHighLevel, AI automation, and the strategies we use to scale businesses at light speed.
                        </p>
                    </motion.div>

                    {/* Search & Categories placeholder */}
                    <div className="flex flex-col md:flex-row gap-6 mb-16 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:border-primary outline-none transition-colors"
                            />
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
                            {['All', 'Strategy', 'Tutorials', 'AI Automation', 'Case Studies'].map((cat, i) => (
                                <button
                                    key={i}
                                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold whitespace-nowrap hover:bg-white/10 hover:border-primary transition-all"
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {posts.map((post, index) => (
                            <Link to="/contact" key={post.id}>
                                <motion.article
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/5 mb-8">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 px-2">
                                        <div className="flex items-center gap-6 text-xs text-muted-foreground font-bold uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-primary" />
                                                {post.author}
                                            </div>
                                        </div>
                                        <h2 className="text-3xl font-black group-hover:text-primary transition-colors leading-tight italic">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="pt-4">
                                            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs group/btn">
                                                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            </Link>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-[#050505] border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 grid-pattern opacity-5" />
                        <div className="relative z-10 max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 italic">Stay <span className="gradient-text">Automated</span></h2>
                            <p className="text-muted-foreground mb-10 text-lg">
                                Join 5,000+ agency owners getting weekly GHL tips, snapshots, and AI automation news.
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary outline-none transition-colors font-bold"
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black transition-all glow-btn whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Newsletter'}
                                </button>
                            </form>
                            {status === 'success' && (
                                <p className="text-green-500 font-bold mt-4 animate-in fade-in slide-in-from-bottom-2">
                                    Thanks for subscribing! Check your inbox soon.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
