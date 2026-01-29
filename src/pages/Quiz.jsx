import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Brain, Zap, Target, Star, ChevronLeft } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "What best describes your business?",
        options: ["E-commerce", "SaaS", "Agency / Coaching", "Local Service Business"],
        icons: [Zap, Brain, Target, Star],
    },
    {
        id: 2,
        question: "How are you currently using GoHighLevel?",
        options: ["I don't have an account yet", "Beginner (Just setup)", "Intermediate (Basics working)", "Advanced (Power user)"],
    },
    {
        id: 3,
        question: "What is your biggest GHL challenge right now?",
        options: ["Messy setup & structure", "Broken automations", "Low email/SMS deliverability", "Don't know how to scale"],
    },
    {
        id: 4,
        question: "What is your monthly lead volume?",
        options: ["< 50 leads", "50 - 200 leads", "200 - 1,000 leads", "1,000+ leads"],
    },
];

const Quiz = () => {
    const [step, setStep] = useState(0); // 0: Start, 1-4: Questions, 5: Result
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);

    const handleAnswer = (questionId, option) => {
        setAnswers({ ...answers, [questionId]: option });
        if (step < questions.length) {
            setStep(step + 1);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(questions.length + 1);
        }, 2000);
    };

    const restart = () => {
        setStep(0);
        setAnswers({});
    };

    return (
        <Layout>
            <div className="pt-40 pb-32 min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 blur-3xl rounded-full" />

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div
                                key="start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                    <Brain className="w-10 h-10 text-primary" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6">What's Holding Your <span className="gradient-text">GHL Setup</span> Back?</h1>
                                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                                    Take this 60-second quiz to identify your biggest automation bottlenecks and get a personalized scaling plan.
                                </p>
                                <button
                                    onClick={() => setStep(1)}
                                    className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 glow-btn inline-flex items-center gap-3"
                                >
                                    Start The Quiz
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </motion.div>
                        )}

                        {step > 0 && step <= questions.length && !loading && (
                            <motion.div
                                key={`q-${step}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="glass-card rounded-[3rem] p-8 md:p-16 border-white/10"
                            >
                                <div className="flex items-center justify-between mb-12">
                                    <div className="text-xs font-black text-primary uppercase tracking-widest">Question {step} of {questions.length}</div>
                                    <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-primary"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(step / questions.length) * 100}%` }}
                                        />
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-10">{questions[step - 1].question}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {questions[step - 1].options.map((option, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleAnswer(step, option)}
                                            className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-between group"
                                        >
                                            <span className="text-lg font-medium group-hover:text-primary transition-colors">{option}</span>
                                            <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-primary flex items-center justify-center transition-colors">
                                                <Check className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="mt-12 text-muted-foreground hover:text-white flex items-center gap-2 text-sm font-bold transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4" /> Back
                                </button>
                            </motion.div>
                        )}

                        {loading && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center"
                            >
                                <div className="relative w-24 h-24 mx-auto mb-8">
                                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                                    <motion.div
                                        className="absolute inset-0 border-4 border-t-primary rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Analyzing your responses...</h2>
                                <p className="text-muted-foreground">Identifying your growth bottlenecks.</p>
                            </motion.div>
                        )}

                        {step > questions.length && !loading && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                    <Target className="w-10 h-10 text-accent" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6">Your Strategy is Ready!</h2>
                                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                                    Based on your answers, your business is a <span className="text-white font-bold">"High-Potential Growth Engine"</span> but lacks the <span className="text-primary font-bold">Automation Infrastructure</span> needed to scale without burnout.
                                </p>
                                <div className="glass-card rounded-3xl p-8 mb-12 text-left border-accent/20">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-accent">
                                        <Check className="w-6 h-6" /> Recommended Next Steps:
                                    </h3>
                                    <ul className="space-y-4 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">1</div>
                                            <span>Implement a <b>Clean CRM Architecture</b> to handle {answers[4]} lead volume.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">2</div>
                                            <span>Set up <b>Multi-Channel Follow-up Workflows</b> to fix your {answers[3]} challenge.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">3</div>
                                            <span>Book a Strategy Call to get the full blueprint.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <a href="https://calendar.app.google/HmriiGBvzGYy1RxW6" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 glow-btn flex items-center gap-3">
                                            Book Free Strategy Call
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </a>
                                    <button
                                        onClick={restart}
                                        className="text-muted-foreground hover:text-white font-bold transition-colors"
                                    >
                                        Retake Quiz
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </Layout>
    );
};

export default Quiz;
