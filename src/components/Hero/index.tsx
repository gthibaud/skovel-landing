import { StaticImage } from "gatsby-plugin-image";
import { Sparkles } from "gthibaud-icons-react";
import TextLoop from "react-text-loop";
import { TiltingContainer } from "../Container/Titling";
import { BigTitle } from "../Typography/BigTitle";
import { SubTitle } from "../Typography/SubTitle";

export const HeroSection = () => {
    return (
        <div className="w-full bg-white bg-dot-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="z-20 bg-gradient-to-b px-6 lg:px-0">
                <BigTitle>Communiquez avec <br className="md:hidden" /><TextLoop mask={false} fade={true} interval={4000}>
                    <u className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">impact</u>
                    <u className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">enthousiasme</u>
                    <u className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">passion</u>
                    <u className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">efficacité</u>
                </TextLoop>
                </BigTitle>
                <SubTitle>
                    <span>
                        Ensemble, propulsons votre événement outdoor sur le web et les réseaux sociaux.
                        <Sparkles className="fill-palettePurple" />
                    </span>
                </SubTitle>
                <div className="absolute w-[200px] text-center -rotate-12 z-10 lg:mt-0 mt-12">
                    <p className="bg-white/90 backdrop-blur-sm p-2 rounded text-gray-600">exemple de site web avec Skovel :</p>
                    <StaticImage src="../../../static/assets/arrow-down-right.svg" alt="arrow" width={100} />
                </div>
                <div className="flex justify-center px-0 lg:mt-12 mt-20">
                    <TiltingContainer glare>
                        <a href="https://capybarun.skovel.com" target="_blank">
                            <StaticImage
                                className="max-w-screen-lg"
                                src="../../../static/images/desktop.png"
                                alt="CapybaRun"
                                style={{ cursor: 'pointer' }}
                            />
                        </a>
                    </TiltingContainer>
                </div>
            </div>
        </div>
    );
}