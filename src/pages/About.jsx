import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Music, Heart, ArrowLeft } from 'lucide-react';
import profileImg from '../assets/dvoice-profile.jpg'; // Uncomment when file is replaced

export default function About() {
    return (
        <div className="min-h-screen bg-brand-yellow font-body text-gray-900 pb-20 overflow-x-hidden">
            {/* Navigation */}
            <nav className="p-6 md:p-8 flex justify-between items-center relative z-20">
                <Link to="/" className="font-display text-xl uppercase tracking-wider hover:text-brand-orange transition-colors">
                    Love Sessions
                </Link>
                <Link to="/">
                    <Button variant="outline" className="text-xs px-5 py-2">
                        Back to Home
                    </Button>
                </Link>
            </nav>

            <div className="container mx-auto px-4 pt-8 md:pt-16 max-w-4xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-display text-6xl md:text-8xl mb-6 relative inline-block">
                        THE STORY
                        <div className="absolute -bottom-2 w-full h-4 bg-brand-green/30 -rotate-2 -z-10 rounded-full"></div>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
                        More than just a concert. It's a gathering of hearts, souls, and melodies.
                    </p>
                </div>

                {/* D'Voice Bio Section */}
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl mb-12 rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-display text-4xl mb-4 text-brand-orange">Who is D'Voice?</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Dvoice is a gospel entertainer. As songwriter, recording and performing music artiste, he delivers his music through excellence with his energetic live performances with a fusion of rap, pop rock and soul amongst other genres.
                                <br /><br />
                                He is devoted to spreading God’s love through music.
                                <br /><br />
                                When he’s not being a voice of God’s love through music he is an architect and a facility manager and a sound business man
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                                    <Music className="w-6 h-6" />
                                </div>
                                <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                                    <Heart className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                        {/* Placeholder for Artist Image - leveraging CSS pattern for now if no image */}
                        <div className="order-1 md:order-2 bg-brand-green h-64 md:h-80 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                            <img
                                src={profileImg}
                                alt="D'Voice Profile"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-brand-yellow/20 mix-blend-overlay"></div>
                        </div>
                    </div>
                </div>

                {/* The Concept */}
                <div className="bg-brand-orange text-white rounded-[3rem] p-8 md:p-12 shadow-xl mb-16 -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <h2 className="font-display text-4xl mb-6 text-brand-yellow">Why "Love Sessions"?</h2>
                    <p className="text-xl leading-relaxed mb-8 opacity-90">
                        … because Love sessions aims to reintroduce who/what love is to everyone. That those who do not know or who may have known before now is reminded that God is love and as he (God) has expressed his love vertically to us from above so we can in turn dispense His love horizontally to everyone around us.
                        <br /><br />
                        So that if you’re a child or an adult, single or married and regardless of your race and faith you get a chance to know about the real Love.
                    </p>

                    <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                        <h3 className="font-display text-2xl mb-2">What to Expect</h3>
                        <p className="text-lg leading-relaxed">
                            Expect to be filled with love through arrays of different entertainment acts; music, dance etc as each act has been carefully selected to reach out to every tribe through ear candy tunes and lyrics. In love sessions with Dvoice nobody will be left out
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center pb-20">
                    <h3 className="font-display text-4xl mb-8">Ready to experience it?</h3>
                    <Link to="/">
                        <Button variant="white" className="text-xl px-12 py-5 shadow-2xl">
                            Secure Your Seat
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
