import React from 'react';

export function Button({ children, className = '', variant = 'primary', ...props }) {
    const variants = {
        primary: "bg-brand-orange text-white hover:bg-orange-700 shadow-lg hover:shadow-xl",
        secondary: "bg-brand-yellow text-black hover:bg-yellow-400 shadow-md",
        outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10",
        white: "bg-white text-brand-orange hover:bg-gray-100 shadow-lg hover:shadow-xl"
    };

    return (
        <button
            className={`
        px-8 py-3 rounded-full font-display uppercase tracking-wide text-lg
        transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
}
