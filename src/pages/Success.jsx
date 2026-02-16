import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckCircle, Music } from 'lucide-react';

export default function Success() {
    return (
        <div className="min-h-screen bg-brand-green flex items-center justify-center p-4 font-body">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl max-w-lg text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Music className="w-32 h-32 text-brand-orange" />
                </div>

                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-green/10 rounded-full text-brand-green mb-6">
                    <CheckCircle className="w-10 h-10" />
                </div>

                <h1 className="font-display text-4xl mb-4">You're on the list!</h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Thank you for registering for Love Sessions. We can't wait to share this experience with you. Keep an eye on your inbox for updates!
                </p>

                <Link to="/">
                    <Button variant="primary" className="w-full">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
