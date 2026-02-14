import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
    const styles = variant === 'primary'
        ? "bg-white text-black hover:bg-zinc-200"
        : "border border-zinc-700 text-white hover:bg-zinc-900";

    return (
        <button
            className={`px-8 py-3 rounded-full font-bold transition-all active:scale-95 ${styles}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
