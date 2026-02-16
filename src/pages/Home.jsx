import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Music, Calendar, MapPin, Instagram, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();

    const scrollToRegister = () => {
        document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => navigate("/success"))
            .catch((error) => alert(error));
    };

    return (
        <div className="min-h-screen bg-brand-green overflow-x-hidden font-body text-gray-900 pb-20">
            {/* Navigation */}
            <nav className="p-6 md:p-8 flex justify-between items-center relative z-20">
                <a href="/" className="font-display text-2xl uppercase tracking-wider text-white hover:text-brand-yellow transition-colors">
                    Love Sessions
                </a>
                <a href="/about">
                    <Button variant="outline" className="text-sm px-6 py-2 border-white text-white hover:bg-white hover:text-brand-green">
                        About
                    </Button>
                </a>
            </nav>
            {/* Abstract Background Shapes */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-yellow rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-orange rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-10 w-80 h-80 bg-brand-yellow rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-8 md:pt-16 max-w-4xl">
                {/* Hero Section */}
                <div className="text-center mb-16 relative">
                    <div className="inline-block bg-brand-yellow px-4 py-1 rotate-[-2deg] mb-4 shadow-lg">
                        <span className="font-display text-xl md:text-2xl uppercase tracking-widest">Live Music Experience</span>
                    </div>

                    <h1 className="font-display text-6xl md:text-8xl text-white drop-shadow-lg leading-tight mb-2">
                        LOVE <br />
                        <span className="text-brand-yellow relative inline-block">
                            SESSIONS
                            <Heart className="absolute -top-6 -right-8 text-red-500 w-12 h-12 fill-red-500 animate-bounce" />
                        </span>
                    </h1>

                    <div className="flex items-center justify-center gap-2 mb-8">
                        <span className="font-display text-4xl text-white">with</span>
                        <span className="font-display text-5xl text-brand-orange bg-white px-2 rounded-lg rotate-2 shadow-lg">D'VOICE</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                        <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                            <Calendar className="w-5 h-5 text-brand-green" />
                            <span className="font-bold text-lg">15th March 2026</span>
                        </div>
                    </div>

                    <Button onClick={scrollToRegister} className="text-xl px-10 py-4 shadow-xl hover:shadow-2xl">
                        Register Now
                    </Button>
                </div>

                {/* Event Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <Card className="bg-brand-yellow rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                        <div className="flex items-start gap-4">
                            <div className="bg-black/10 p-3 rounded-full">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl mb-1">Venue</h3>
                                <p className="text-lg font-medium leading-relaxed">
                                    Artful Media Studio<br />
                                    <span className="text-sm opacity-75">123 Creative Avenue, City Center</span>
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-brand-orange text-white rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                        <div className="flex items-start gap-4">
                            <div className="bg-white/20 p-3 rounded-full">
                                <Music className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl mb-1">Time</h3>
                                <p className="text-lg font-medium leading-relaxed">
                                    Red Carpet: 3:00 PM<br />
                                    Main Event: 4:00 PM
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Registration Form */}
                <div id="register" className="scroll-mt-20">
                    <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-brand-green via-brand-yellow to-brand-orange"></div>

                        <div className="text-center mb-10">
                            <h2 className="font-display text-4xl md:text-5xl mb-4">Secure Your Spot</h2>
                            <p className="text-gray-600 text-lg">
                                Join us for an evening of warmth, music, and community. <br className="hidden md:block" />
                                Seats are limited, so please register early!
                            </p>
                        </div>

                        <form
                            name="registration"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                            className="space-y-6 max-w-lg mx-auto"
                        >
                            <input type="hidden" name="form-name" value="registration" />

                            <Input label="Full Name" name="name" placeholder="John Doe" required />

                            <Input label="Email Address" type="email" name="email" placeholder="john@example.com" required />

                            <Input label="Phone Number" type="tel" name="phone" placeholder="+123 456 7890" required />

                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Attendees" type="number" name="attendees" min="1" max="10" defaultValue="1" />
                                <div className="w-full">
                                    <label className="block text-sm font-bold text-gray-700 mb-1 font-body uppercase tracking-wider">Source</label>
                                    <select name="source" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand-green outline-none bg-white">
                                        <option value="instagram">Instagram</option>
                                        <option value="friend">Friend</option>
                                        <option value="church">Church</option>
                                        <option value="whatsapp">WhatsApp</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mt-4">
                                <input type="checkbox" id="updates" name="updates" className="mt-1 w-5 h-5 text-brand-green rounded border-gray-300 focus:ring-brand-green" />
                                <label htmlFor="updates" className="text-sm text-gray-600 leading-tight">
                                    Keep me updated on future D'Voice events and releases.
                                </label>
                            </div>

                            <Button type="submit" className="w-full mt-4 text-xl py-4" variant="primary">
                                Confirm Registration <ArrowRight className="inline ml-2 w-5 h-5" />
                            </Button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                We respect your privacy. No spam, just love.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Footer Social */}
                <div className="text-center mt-20 pt-10 border-t border-white/20">
                    <a href="https://instagram.com/saydvoice" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-display text-2xl hover:text-brand-yellow transition-colors">
                        <Instagram className="w-8 h-8" />
                        @saydvoice
                    </a>
                    <p className="text-white/60 mt-4 text-sm">© 2026 Love Sessions. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
