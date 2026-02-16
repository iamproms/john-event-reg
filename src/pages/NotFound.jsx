import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Music } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-brand-green flex flex-col items-center justify-center text-center px-4 font-body">
            <div className="bg-white/10 p-8 rounded-full mb-8 animate-pulse">
                <Music className="w-24 h-24 text-brand-yellow" />
            </div>

            <h1 className="font-display text-8xl md:text-9xl text-white mb-4">404</h1>

            <h2 className="font-display text-3xl md:text-4xl text-brand-yellow mb-6">
                Wrong Note?
            </h2>

            <p className="text-white/80 text-xl max-w-md mb-10 leading-relaxed">
                Looks like you've wandered off the setlist. This page doesn't exist, but the music is still playing back home.
            </p>

            <Link to="/">
                <Button variant="secondary" className="px-10 py-4 text-xl">
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}
