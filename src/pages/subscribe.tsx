import { StaticImage } from 'gatsby-plugin-image';
import { Sparkles } from 'gthibaud-icons-react';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { TiltingContainer } from '../components/Container/Titling';
import { Header } from '../components/Header';
import { BigTitle } from '../components/Typography/BigTitle';
import { Body } from '../components/Typography/Body';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FFFFFF';

const Subscribe = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Thank you!</BigTitle>
                <SubTitle>
                    <span>
                        You have been successfully added to the waiting list
                        <Sparkles className="fill-paletteGreen" />
                    </span>
                </SubTitle>
                <div>
                    <Columns columnsNumber={2}>
                        <div className="flex flex-col flex-1 gap-4">
                            <Body>
                                You will be notified as soon by our team to access Airtable Time
                                Machine.
                                <br />
                                See you soon!
                            </Body>
                        </div>
                        <div className="flex-1">
                            <TiltingContainer>
                                <StaticImage
                                    src="../../static/images/relax.png"
                                    alt="Zen image"
                                    width={460}
                                    placeholder="none"
                                    backgroundColor={BACKGROUND_DEFAULT}
                                />
                            </TiltingContainer>
                        </div>
                    </Columns>
                </div>
            </MainContainer>
        </div>
    );
};

export default Subscribe;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="fr" />
        <title>Skovel - Communication pour les courses</title>
        <meta
            name="description"
            content="Skovel vous accompagne dans la mise en place de la communication de votre course outdoor. Site web, réseaux sociaux, emails... discutons de votre projet !"
        />
        <meta name="viewport" content="width=device-width" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta property="og:title" content="Skovel - Communication pour les courses" />
        <meta property="og:description" content="Skovel vous accompagne dans la mise en place de la communication de votre course outdoor. Site web, réseaux sociaux, emails... discutons de votre projet !" />
        <meta property="og:image" content="https://skovel.com/images/preview.png" />
        <meta property="og:image:alt" content="Skovel website preview." />
        <meta name="twitter:title" content="Skovel - Communication pour les courses" />
        <meta name="twitter:description" content="Skovel vous accompagne dans la mise en place de la communication de votre course outdoor. Site web, réseaux sociaux, emails... discutons de votre projet !" />
        <meta name="twitter:url" content="https://skovel.com/" />
        <meta name="twitter:image:src" content="https://skovel.com/images/preview.png" />
        <meta name="twitter:image:alt" content="Skovel website preview" />
        <meta name="twitter:creator" content="@ThibaudGrgoire1" />
        <meta name="twitter:site" content="@ThibaudGrgoire1" />
        <meta charSet="utf-8" />
    </>
);
