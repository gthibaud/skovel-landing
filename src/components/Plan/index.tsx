import { Link } from 'gatsby';
import { ReactNode } from 'react';
import { TiltingContainer } from '../Container/Titling';
import { Body } from '../Typography/Body';
import { CardTitle } from './Title';

type PlanProps = {
    image: ReactNode;
    title: string;
    description: string | ReactNode;
    price: string;
    to?: string;
    target?: string;
    priceDescription?: string;
};

export const Plan = ({ image, title, description, price, to, target, priceDescription }: PlanProps) => {
    return (
        <TiltingContainer className="flex-1 rounded-lg bg-surfaceSecondary border-strokePrimary border-2">
            <Link
                to={to || "/"}
                target={target}
                className="rounded-lg flex flex-1 flex-col items-center gap-4 text-center  p-6 pb-6"
            >
                <CardTitle>{title}</CardTitle>
                {image}
                <Body>{description}</Body>
                <CardTitle>{price}</CardTitle>
                <Body className='text-gray-500 text-sm'>{priceDescription}</Body>
                {/* <Button className="w-full bg-paletteBlue rounded-lg">
                    <span>
                        Get Started
                        <ArrowRight className="fill-surfacePrimary mb-1" />
                    </span>
                </Button> */}
            </Link>
        </TiltingContainer>
    );
};
