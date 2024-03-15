import { StaticImage } from 'gatsby-plugin-image';
import { ChevronRight, Megaphone, Sparkles } from 'gthibaud-icons-react';
import { Toaster } from 'react-hot-toast';
import { ButtonUnstyled } from '../components/Button/unstyled';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { TiltingContainer } from '../components/Container/Titling';
import { FAQ } from '../components/FAQ';
import { Feature } from '../components/Feature';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/Hero';
import { Plan } from '../components/Plan';
import { Problem } from '../components/Problem';
import { CardSection } from '../components/Section/CardSection';
import { PlanSection } from '../components/Section/PlanSection';
import { Body } from '../components/Typography/Body';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { SectionTitleStyled } from '../components/Typography/SectionTitleStyled';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FFFFFF';

const Main = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <HeroSection />
            <MainContainer>
                <SectionTitleStyled
                    part1="Rendez-vous"
                    part2="visibles"
                    confettiEmojis={['📢', '🥁', '👀']}
                />
                <SubTitle>
                    Faites du bruit ! Votre évènement mérite d'être connu et partagé.
                </SubTitle>
                <CardSection>
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/bulb.jpg"
                                alt="Bulb image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Référencement"
                        description="Rendze votre évènement à la portée de chacun en quelques clics."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/coffee.jpg"
                                alt="Coffee image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="La bonne information"
                        description="Partagez les informations essentielles et à jour."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/error.jpg"
                                alt="Error image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Dans l'ère du temps"
                        description="Site web, réseaux sociaux, emails... atteignez chacun."
                    />
                </CardSection>
                <SectionTitleStyled
                    part1="La course, notre"
                    part2="expertise"
                    confettiEmojis={['🤓', '🏃🏻', '🏊‍♀️', '🚴🏻‍♀️']}
                    colorsVariant='green'
                />
                <SubTitle>
                    Vous n'avez pas la compétence ou le temps pour gérer votre communication ? Ça tombe bien, c'est notre cœur de métier !
                </SubTitle>
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/clock.jpg"
                            alt="Clock image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Visibilité en ligne"
                    description={
                        <>
                            Nous créons votre site internet à votre image, parfaitement référencé sur Google et les calendriers sportifs. Nous vous accompagnons pour frapper fort sur les réseaux sociaux et par email.
                        </>
                    }
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/files.jpg"
                            alt="Files image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Stratégie gagnante"
                    description="Vous n'avez pas la compétence ou le temps pour gérer votre communication ? Nous définissons et appliquons la meilleure stratégie de communication jour par jour."
                    inversedDirection
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/computer.jpg"
                            alt="Computer image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Des outils pour vous faire gagner du temps"
                    description="Nous intégrons sur votre site des modules d'inscription, gestion des participants et affichage des résultats en quelques clics. Comptez sur nos outils de communication opérationnelle pour simplifier l'organisation de votre évènement."
                />
                <SectionTitleStyled
                    part1="Nos tarifs (sans"
                    part2="astérisques"
                    part3=")"
                    confettiEmojis={['🤓', '🏃🏻', '🏊‍♀️', '🚴🏻‍♀️']}
                    colorsVariant='orange'
                />
                <SubTitle>
                    Pas d'engagement ou de coûts cachés
                    <br /> nous avons une solution pour chaque budget !
                </SubTitle>
                <br />
                <PlanSection>
                    <Plan
                        to="https://creastel.notion.site/Les-offres-Skovel-eca8ffe8c0354c43b4f26733c78d2eee?pvs=4"
                        target="_blank"
                        title="Site web"
                        image={
                            <StaticImage
                                src="../../static/images/monthly.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Nous créons, hébergeons et référençons votre site internet : exemple."
                        price="300€"
                    />
                    <Plan
                        to="https://creastel.notion.site/Les-offres-Skovel-eca8ffe8c0354c43b4f26733c78d2eee?pvs=4"
                        target="_blank"
                        title="Réseaux sociaux"
                        image={
                            <StaticImage
                                src="../../static/images/weekly.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Nous publions pour vous sur les réseaux sociaux et par email, pour une communication efficace."
                        price="50€ / publication"
                    />
                    <Plan
                        to="https://creastel.notion.site/Les-offres-Skovel-eca8ffe8c0354c43b4f26733c78d2eee?pvs=4"
                        target="_blank"
                        title="Inscriptions & résultats"
                        image={
                            <StaticImage
                                src="../../static/images/daily.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Utilisez notre module d'inscription et de gestion des participants pour votre évènement."
                        price="1€ +2% / participant"
                    />
                </PlanSection>
                <ButtonUnstyled
                    to="/#contact"
                    ariaLabel="Sur mesure"
                    className="flex justify-center"
                >
                    <span className="text-paletteBlue fill-paletteBlue">
                        Un projet en tête ? Contactez-nous pour en discuter
                        <ChevronRight />
                    </span>
                </ButtonUnstyled>
                <SectionTitle>
                    <span id="contact">
                        Discutons de votre projet !
                        <Sparkles className="fill-palettePurple" />
                    </span>
                </SectionTitle>
                <div>
                    <Columns columnsNumber={2}>
                        <div className="flex flex-col flex-1 gap-4">
                            <Body>
                                Contactez Grégoire pour échanger sur votre projet et vous étudier comment Skovel pourra vous accompagner au mieux.
                            </Body>
                            <Body>
                                Email: {' '}
                                <a href="mailto:gregoire@skovel.com" className="text-paletteBlue fill-paletteBlue"><u>gregoire@skovel.com</u></a>
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
                <SectionTitle>
                    <span>
                        FAQ
                        <Megaphone className="fill-paletteBlue" />
                    </span>
                </SectionTitle>
                <FAQ
                    question="Qui êtes-vous ?"
                    answer={
                        <>
                            Skovel est la division spécialisée dans la communication d'évènements outdoors de l'agence <u>
                                <a href="https://creastel.com" target='_blank'>Creastel</a>
                            </u>. Depuis 2018, Creastel développe des services numériques innovants et uniques pour startups et entreprises. Découvrez nos réalisations sur <u> <a href="https://creastel.com" target='_blank'>notre site</a></u> !
                            <br />
                            <br />
                            Vous souhaitez échanger sur votre projet ? N'hésitez pas à contacter Grégoire Thibaud par <u><a href="mailto:gregoire@skovel.com"> email</a></u> ou sur <u><a href="https://www.linkedin.com/in/gregoire-thibaud/" target='_blank'>LinkedIn</a></u>.
                        </>
                    }
                />
                <FAQ
                    question="Pourquoi choisir Skovel ?"
                    answer="Nos services sont spécialement conçus pour des organisateurs d'évènements avec des budgets limités et / ou n'ayant pas les compétences en communication. Que vous ayez besoin d'un simple site web ou d'une gestion complète de votre communication clé en main, nous vous accompagnons avec un degré de personnalisation sur mesure. À l'inverse d'une agence marketing généraliste, nous avons une expertise spécifique dans la communication d'évènements sportifs et outdoor."
                />
                <FAQ
                    question="Quels services proposez-vous ?"
                    answer="Notre gamme de services s'étend de la communication sur votre course aux opérations d'organisations. Nous pouvons mettre à disposition plusieurs outils pour vous aider à gérer votre évènement : système de communication avec les participants, bénévoles et partenaires (via mail, SMS de dernière minute, etc.), gestion des inscriptions, gestion des résultats, etc."
                />
            </MainContainer>
            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
};

export default Main;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="en" />
        <title>Skovel – Communiquez avec impact !</title>
        <meta
            name="description"
            content="Skovel vous accompagne dans la mise en place de la communication de votre course outdoor. Site web, réseaux sociaux, emails... discutons de votre projet !"
        />
        <meta charSet="utf-8" />
    </>
);
