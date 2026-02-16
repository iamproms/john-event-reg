import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Music, Heart, ArrowLeft } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-brand-yellow font-body text-gray-900 pb-20 overflow-x-hidden">
            {/* Navigation */}
            <nav className="p-6 md:p-8 flex justify-between items-center relative z-20">
                <Link to="/" className="font-display text-2xl uppercase tracking-wider hover:text-brand-orange transition-colors">
                    Love Sessions
                </Link>
                <Link to="/">
                    <Button variant="outline" className="text-sm px-6 py-2">
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
                                D'Voice is a visionary artist whose music transcends genres, blending soul, gospel, and afro-fusion into a tapestry of sound that speaks directly to the spirit. With a passion for authentic expression, D'Voice creates spaces where audiences can disconnect from the noise and reconnect with what matters.
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green to-brand-yellow opacity-80 group-hover:scale-110 transition-transform duration-700"></div>
                            <span className="font-display text-white text-9xl opacity-20 select-none">D'V</span>
                        </div>
                    </div>
                </div>

                {/* The Concept */}
                <div className="bg-brand-orange text-white rounded-[3rem] p-8 md:p-12 shadow-xl mb-16 -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <h2 className="font-display text-4xl mb-6 text-brand-yellow">Why "Love Sessions"?</h2>
                    <p className="text-xl leading-relaxed mb-8 opacity-90">
                        In a world that often feels disconnected, Love Sessions was born out of a desire to bring people together through the universal language of music. It's an intimate evening designed to be raw, unfiltered, and deeply moving. Whether you come for the art, the community, or the vibe, you'll leave with a full heart.
                    </p>

                    <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                        <h3 className="font-display text-2xl mb-2">What to Expect</h3>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            <li>Live acoustic and full-band performances</li>
                            <li>Storytelling through song</li>
                            <li>A warm, welcoming atmosphere</li>
                            <li>Surprise guest appearances</li>
                        </ul>
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
