import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, ChevronRight } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Hi 👋 I’m the NewLevel Assistant. How can I help you scale today?' },
    ]);
    const [input, setInput] = useState('');

    const [lastAction, setLastAction] = useState(null);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', content: input };
        setMessages([...messages, userMsg]);
        const userQuery = input.toLowerCase();
        setInput('');

        // Mock bot logic based on keywords and context
        setTimeout(() => {
            let botContent = "That's a great question! I'd love to discuss how NewLevel can help you with that. Would you like to schedule a free strategy call to dive deeper?";
            let currentAction = null;

            // Context-based responses
            if (lastAction === 'propose_call' && (userQuery.includes('yes') || userQuery.includes('sure') || userQuery.includes('please') || userQuery.includes('take me'))) {
                botContent = "Awesome! 🚀 Redirecting you to our live calendar... (Or you can click the 'Book Call' button in the navbar anytime). A confirmation email will be sent automatically once you pick a slot. Anything else I can help with?";
                currentAction = 'redirecting';
                window.open('https://calendar.app.google/HmriiGBvzGYy1RxW6', '_blank');
            } else if (userQuery.includes('setup') || userQuery.includes('account')) {
                botContent = "GHL Setup is our bread and butter! We handle everything from account structure to custom values. Are you looking for a fresh setup or an optimization?";
                currentAction = 'discussing_setup';
            } else if (userQuery.includes('automation') || userQuery.includes('workflow')) {
                botContent = "We build advanced, multi-channel automations that save businesses 20+ hours a week. Would you like to see a demo or book a call to discuss your specific flow?";
                currentAction = 'propose_call';
            } else if (userQuery.includes('book') || userQuery.includes('call') || userQuery.includes('appointment')) {
                botContent = "I can definitely help with that! You can book an appointment directly through our Google Calendar. Shall I open the booking page for you now?";
                currentAction = 'propose_call';
            } else if (userQuery.includes('hello') || userQuery.includes('hi')) {
                botContent = "Hello! 👋 I'm the NewLevel Assistant. I'm here to help you automate your GHL agency. What can I do for you today?";
                currentAction = 'greeting';
            } else if (userQuery.includes('price') || userQuery.includes('cost')) {
                botContent = "Our systems start with a one-time 'Foundation' build, then a monthly optimization fee. Would you like a custom quote based on your lead volume?";
                currentAction = 'discussing_price';
            }

            setLastAction(currentAction);
            setMessages(prev => [...prev, { role: 'bot', content: botContent }]);
        }, 1000);
    };

    const options = [
        "GoHighLevel Setup",
        "Automations",
        "Email Marketing",
        "Book a Call"
    ];

    return (
        <>
            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl z-50 glow-btn"
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-28 right-8 w-full max-w-[400px] h-[600px] bg-card border border-white/10 rounded-[2.5rem] shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="bg-primary p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                <Bot className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">NewLevel Assistant</h4>
                                <p className="text-white/70 text-xs">AI Powered Growth Expert</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow p-6 overflow-y-auto space-y-6">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: msg.role === 'bot' ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'bot'
                                        ? 'bg-white/5 text-muted-foreground rounded-tl-none'
                                        : 'bg-primary text-white rounded-tr-none'
                                        }`}>
                                        <p className="text-sm leading-relaxed">{msg.content}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {messages.length === 1 && (
                                <div className="space-y-2 mt-4">
                                    {options.map((opt, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setInput(opt)}
                                            className="block w-full text-left p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-bold hover:bg-primary/10 hover:border-primary transition-all flex items-center justify-between"
                                        >
                                            {opt}
                                            <ChevronRight className="w-4 h-4 text-primary" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-6 border-t border-white/5">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="bg-transparent border-none outline-none flex-grow text-sm py-2"
                                />
                                <button
                                    type="submit"
                                    className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform shrink-0"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
