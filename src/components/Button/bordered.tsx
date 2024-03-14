import { Link } from 'gatsby';
import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    to?: string;
    className?: string;
};

export const ButtonBordered = ({ children, to = "/", className = '' }: ButtonProps) => {
    return (
        <Link to={to} className='flex group min-w-[120px] items-center font-semibold text-foreground shadow-sm gap-1.5 relative overflow-hidden rounded-[12px] p-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:scale-105 transition-all'>
            <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]' />
            <button
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-white/90 group-hover:bg-white/70 transition-all px-4 py-2 font-medium text-foreground backdrop-blur-3xl ${className}`}
            // className={`font-medium text-white px-3 py-2 transition-colors duration-300 ease-in-out ${className}`}
            >
                {children}
            </button>
        </Link>
    );
};
