import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, ArrowRight, CheckCircle, UserPlus, LogIn, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            localStorage.setItem('newlevel_auth', 'true');
            if (onLogin) setTimeout(onLogin, 1000);
        }, 1500);
    };

    return (
        <Layout>
            <div className="pt-40 pb-32 min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 -z-1" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-1" />

                <div className="container mx-auto px-4 max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card rounded-[2.5rem] p-8 md:p-12 relative border-white/10 shadow-2xl"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-accent" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">Welcome to NewLevel</h2>
                                    <p className="text-muted-foreground mb-6">
                                        {isLogin
                                            ? "Redirecting you to your dashboard..."
                                            : "Your account has been created successfully."}
                                    </p>
                                    {!isLogin && (
                                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-8">
                                            <p className="text-xs font-black text-primary uppercase tracking-widest italic">
                                                Check your email: A verification link has been sent to your inbox.
                                            </p>
                                        </div>
                                    )}
                                    <Link to="/">
                                        <button className="text-primary font-bold hover:underline flex items-center gap-2 mx-auto">
                                            Return to Home <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </motion.div>
                            ) : (
                                <motion.div key="form" exit={{ opacity: 0, scale: 0.9 }}>
                                    <div className="text-center mb-10">
                                        <h1 className="text-3xl font-black mb-2 italic">
                                            {isLogin ? "Welcome Back" : "Join the Elite"}
                                        </h1>
                                        <p className="text-muted-foreground text-sm">
                                            {isLogin
                                                ? "Enter your credentials to access your GHL systems."
                                                : "Start your journey to a fully automated business today."}
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {!isLogin && (
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-muted-foreground ml-2">Company Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Acme Scales"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium text-sm"
                                                />
                                            </div>
                                        )}
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-muted-foreground ml-2">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="name@company.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 outline-none focus:border-primary transition-colors font-medium text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-muted-foreground ml-2">Password</label>
                                            <div className="relative">
                                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                <input
                                                    required
                                                    type="password"
                                                    placeholder="••••••••"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 outline-none focus:border-primary transition-colors font-medium text-sm"
                                                />
                                            </div>
                                        </div>

                                        {isLogin && (
                                            <div className="flex justify-end">
                                                <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot password?</button>
                                            </div>
                                        )}

                                        <button
                                            disabled={status === 'loading'}
                                            className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl text-md font-bold transition-all hover:scale-[1.02] active:scale-95 glow-btn disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            {status === 'loading' ? (
                                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                isLogin ? <><LogIn className="w-5 h-5" /> Login</> : <><UserPlus className="w-5 h-5" /> Sign Up</>
                                            )}
                                        </button>
                                    </form>

                                    <div className="mt-8">
                                        <div className="relative mb-8 text-center">
                                            <hr className="border-white/5" />
                                            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#0a0a0a] px-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">Or continue with</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold text-xs">
                                                <Github className="w-4 h-4" /> Github
                                            </button>
                                            <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold text-xs">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.47-2.1.4.1.4.1.4.1s4.57 3.47h4.14c0-2.63-.5-5.27-1.48-7.67h-11.41z" /></svg> Google
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-10 text-center">
                                        <p className="text-sm text-muted-foreground">
                                            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                                            <button
                                                onClick={() => setIsLogin(!isLogin)}
                                                className="text-primary font-bold hover:underline"
                                            >
                                                {isLogin ? "Sign up for free" : "Log in here"}
                                            </button>
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
