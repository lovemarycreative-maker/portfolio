import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                navigate('/admin');
            }
        });
        return () => subscription.unsubscribe();
    }, [navigate]);

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
                        <div className="mb-8 text-center">
                            <h1 className="text-3xl font-black mb-2 italic">Welcome Back</h1>
                            <p className="text-muted-foreground text-sm">Sign in to access your dashboard</p>
                        </div>

                        <Auth
                            supabaseClient={supabase}
                            appearance={{
                                theme: ThemeSupa,
                                variables: {
                                    default: {
                                        colors: {
                                            brand: '#0066FF',
                                            brandAccent: '#0052cc',
                                            inputBackground: 'rgba(255,255,255,0.05)',
                                            inputText: 'white',
                                            inputBorder: 'rgba(255,255,255,0.1)',
                                            messageText: 'white',
                                            anchorTextColor: '#0066FF',
                                        },
                                        radii: {
                                            borderRadiusButton: '1rem',
                                            inputBorderRadius: '1rem',
                                        },
                                        space: {
                                            inputPadding: '1.25rem',
                                            inputPaddingTop: '1.25rem',
                                            inputPaddingBottom: '1.25rem',
                                        }
                                    },
                                },
                            }}
                            theme="dark"
                            providers={['google', 'github']}
                            redirectTo={`${window.location.origin}/admin`}
                        />
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
