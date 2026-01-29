import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Mail, MessageSquare, Building, Calendar } from 'lucide-react';

const Admin = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([]);
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate('/login');
                return;
            }
            fetchData();
        };
        checkUser();
    }, [navigate]);

    const fetchData = async () => {
        setLoading(true);
        // Fetch Contacts
        const { data: contactsData } = await supabase
            .from('contacts')
            .select('*')
            .order('created_at', { ascending: false });
        if (contactsData) setContacts(contactsData);

        // Fetch Subscribers
        const { data: subsData } = await supabase
            .from('subscribers')
            .select('*')
            .order('created_at', { ascending: false });
        if (subsData) setSubscribers(subsData);

        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
                <div className="w-8 h-8 border-2 border-primary border-t-white rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <Layout>
            <div className="pt-32 pb-20 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h1 className="text-3xl font-black italic">Admin Dashboard</h1>
                            <p className="text-muted-foreground">Monitor your leads and growth.</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors font-bold text-sm"
                        >
                            <LogOut className="w-4 h-4" /> Logout
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {/* Stats Cards */}
                        <div className="p-6 rounded-3xl bg-primary/10 border border-primary/20">
                            <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">Total Leads</p>
                            <p className="text-4xl font-black">{contacts.length}</p>
                        </div>
                        <div className="p-6 rounded-3xl bg-accent/10 border border-accent/20">
                            <p className="text-xs font-black uppercase tracking-widest text-accent mb-2">Subscribers</p>
                            <p className="text-4xl font-black">{subscribers.length}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Recent Contacts */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-primary" /> Recent Inquiries
                            </h2>
                            <div className="space-y-4">
                                {contacts.length === 0 && <p className="text-muted-foreground italic">No inquiries yet.</p>}
                                {contacts.map((contact) => (
                                    <div key={contact.id} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                                    {contact.name?.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-sm">{contact.name}</p>
                                                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <Mail className="w-3 h-3" /> {contact.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="text-[10px] text-muted-foreground bg-white/5 px-2 py-1 rounded-lg">
                                                {new Date(contact.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        {contact.company && (
                                            <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                                                <Building className="w-3 h-3" /> {contact.company}
                                            </div>
                                        )}
                                        <p className="text-sm bg-black/30 p-4 rounded-xl text-white/80">{contact.message}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Subscribers */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <User className="w-5 h-5 text-accent" /> Recent Subscribers
                            </h2>
                            <div className="space-y-4">
                                {subscribers.length === 0 && <p className="text-muted-foreground italic">No subscribers yet.</p>}
                                {subscribers.map((sub) => (
                                    <div key={sub.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <p className="font-bold text-sm">{sub.email}</p>
                                        </div>
                                        <span className="text-[10px] text-muted-foreground">
                                            {new Date(sub.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Admin;
