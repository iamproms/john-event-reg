import React from 'react';

export function Input({ className = '', label, id, error, ...props }) {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block text-sm font-bold text-gray-700 mb-1 font-body uppercase tracking-wider">
                    {label}
                </label>
            )}
            <input
                id={id}
                className={`
          w-full px-4 py-3 rounded-lg border-2 border-gray-200 
          focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none 
          transition-all font-body text-gray-900 placeholder:text-gray-400
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
          ${className}
        `}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>}
        </div>
    );
}
