import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
    align?: string;
};

export const SubTitle = ({ children, align = 'center' }: TitleProps) => {
    return (
        <p className={`text-xl text-gray-500 font-medium text-${align} mx-auto max-w-xl my-4`}>
            {children}
        </p>
    );
};
