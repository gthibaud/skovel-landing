import { StaticImage } from "gatsby-plugin-image";
import { Sparkles } from "gthibaud-icons-react";
import { TiltingContainer } from "../Container/Titling";
import { BigTitle } from "../Typography/BigTitle";
import { SubTitle } from "../Typography/SubTitle";

export const HeroSection = () => {
    return (
        <div className="w-full bg-white bg-dot-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="z-20 bg-gradient-to-b">
                <BigTitle>Communiquez avec <u>impact</u></BigTitle>
                <SubTitle>
                    <span>
                        Ensemble, propulsons votre événement outdoor sur le web et les réseaux sociaux.
                        <Sparkles className="fill-palettePurple" />
                    </span>
                </SubTitle>
                <div className="flex justify-center px-4 mt-8">
                    <TiltingContainer glare>
                        <a href="https://capybarun.skovel.com" target="_blank">
                            <StaticImage
                                className="max-w-screen-lg"
                                src="../../../static/images/desktop.png"
                                alt="Desktop Airtable interface."
                                style={{ cursor: 'pointer' }}
                            />
                        </a>
                    </TiltingContainer>
                </div>
            </div>
        </div>
    );
}