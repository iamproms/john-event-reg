import React from 'react';

export function Card({ children, className = '', noPadding = false, ...props }) {
    return (
        <div
            className={`
        rounded-3xl shadow-xl border-b-4 border-r-4 border-black/10
        ${noPadding ? '' : 'p-6 md:p-8'}
        ${className || 'bg-white'}
      `}
            {...props}
        >
            {children}
        </div>
    );
}
