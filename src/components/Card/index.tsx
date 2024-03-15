import { CSSProperties, FC } from 'react';
import Markdown from 'react-markdown';

export interface CardProps {
    children: string | JSX.Element | JSX.Element[];
    variant?: '' | 'grid' | 'centered';
    style?: CSSProperties;
    className?: string;
}

export const Card: FC<CardProps> = (props) => {
    const { children, variant = '', style, className } = props;

    const renderChildren = () => {
        if (typeof children === 'string') {
            return <Markdown>{children}</Markdown>;
        }
        return children;
    };

    return (
        <div
            style={style}
        >
            <div className={`card-content-${variant}`}>{renderChildren()}</div>
        </div>
    );
};
