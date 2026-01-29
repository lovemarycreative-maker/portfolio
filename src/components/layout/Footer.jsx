import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/mary-logo-new.jpg';

const Footer = () => {
    return (
        <footer className="bg-background pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3">
                            <img src={logo} alt="Mary Creative Logo" className="h-10 w-10 object-contain" />
                            <span className="text-xl font-bold">Mary<span className="text-primary">Creative</span></span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            We build, automate, and scale businesses with GoHighLevel. Smarter systems for better results.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Facebook, href: "https://www.facebook.com/adepoju.ifeoluwa.mary.gohighlevel.aiautomation" },
                                { icon: Twitter, href: "https://x.com/MaryCreati1927" },
                                { icon: Instagram, href: "https://www.instagram.com/mary_highlevel_ai_automation/" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/mary-creative-967a53397/" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-muted-foreground text-sm">
                            <li><Link to="/" className="hover:text-primary transition-colors flex items-center gap-2 group">Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors flex items-center gap-2 group">Services <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/solutions" className="hover:text-primary transition-colors flex items-center gap-2 group">Solutions <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors flex items-center gap-2 group">Portfolio <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors flex items-center gap-2 group">Blog <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/courses" className="hover:text-primary transition-colors flex items-center gap-2 group">Courses <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2 group">Contact <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/quiz" className="hover:text-primary transition-colors flex items-center gap-2 group">Qualified Quiz <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link to="/lead-magnet" className="hover:text-primary transition-colors flex items-center gap-2 group">Free Snapshot <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-muted-foreground text-sm">
                            <li><Link to="/services" className="hover:text-primary transition-colors">GHL Setup & Optimization</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Automation & Workflows</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Email & SMS Marketing</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Funnel & Website Design</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">AI Chatbot Integration</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold">Contact Us</h4>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Abuja, Nigeria</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+2349167058983" className="hover:text-primary transition-colors">+234 916 705 8983</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:lovemary.creative@gmail.com" className="hover:text-primary transition-colors">lovemary.creative@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Mary Creative Automation Agency. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
