import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Preheader = () => {
    return (
        <div className="bg-primary/10 border-b border-white/10 py-2 hidden md:block">
            <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium text-muted-foreground">
                <div className="flex items-center gap-6">
                    <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                        <span>+1 (234) 567-890</span>
                    </a>
                    <a href="mailto:hello@newlevel.tech" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                        <span>hello@newlevel.tech</span>
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
                </div>
            </div>
        </div>
    );
};

export default Preheader;
