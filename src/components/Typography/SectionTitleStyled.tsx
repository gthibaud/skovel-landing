import { ElementType, FC, ReactNode, useEffect, useState } from 'react';
import { jsConfetti } from '../../utils/confetti';

type TitleProps = {
    part1?: ReactNode;
    part2?: ReactNode;
    part3?: ReactNode;
    icon?: ElementType;
    confettiEmojis: string[];
    colorsVariant?: 'blue' | 'orange' | 'pink' | 'green';
};

export const SectionTitleStyled: FC<TitleProps> = (props) => {
    const { part1 = "", part2 = "", part3 = "", icon: Icon = undefined, confettiEmojis, colorsVariant = "blue" } = props;

    // On hover, confetti will be activated
    const [active, setActive] = useState(false);
    useEffect(() => {
        if (active) {
            jsConfetti.addConfetti({
                emojis: confettiEmojis,
                confettiNumber: 50,
                emojiSize: 50,
            });
        }
    }, [active]);

    const generateColorsVariant = (): string => {
        switch (colorsVariant) {
            case "blue":
                return "from-[#5EA2EF] to-[#0072F5]";
            case "orange":
                return "from-[#FF705B] to-[#FFB457]";
            case "pink":
                return "from-[#FF7EB3] to-[#FF3D7E]";
            case "green":
                return "from-[#6FEE8D] to-[#17c964]";
            default:
                return "from-[#5EA2EF] to-[#0072F5]";
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl text-primary font-bold text-center mt-20 mb-10 hover:scale-110 transition-all">
                    {part1} <span onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className={`tracking-tight inline ${generateColorsVariant()} bg-clip-text text-transparent bg-gradient-to-b`}>{part2}</span>{part3}
                    {Icon ? <Icon className={`tracking-tight inline ${generateColorsVariant()} bg-clip-text text-transparent bg-gradient-to-b`} /> : null}
                </h2>
            </div>
        </div>
    );
};
