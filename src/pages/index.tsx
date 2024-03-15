import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { ChevronRight, Megaphone } from 'gthibaud-icons-react';
import { Toaster } from 'react-hot-toast';
import { ButtonBordered } from '../components/Button/bordered';
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
                        title="L'information de référence"
                        description="Rendez l'information à jour pour tous, grâce à un site internet central et unique."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/reach.png"
                                alt="Coffee image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Atteignez chaque acteur"
                        description="Augmenter l'affluence, mobiliser des bénévoles, partenaires, etc. nous avons une solution pour vous."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/paperplane.png"
                                alt="Error image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="À la page"
                        description="Site web, réseaux sociaux, emails... utilisons le bon canal de communication pour chaque interlocuteur."
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
                            src="../../static/images/computer.jpg"
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
                            Nous créons votre site internet à votre image, parfaitement référencé sur Google et les calendriers sportifs. Selon vos besoins, nous vous accompagnons pour frapper fort sur les réseaux sociaux et par email.
                        </>
                    }
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/notes.png"
                            alt="Checklist image"
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
                            src="../../static/images/tools.png"
                            alt="Tools image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Des outils pour vous faire gagner du temps"
                    description="Inscriptions, gestion des participants, FAQ dynamique, communication de crise, affichage des résultats, etc. Comptez sur nos outils pour simplifier l'organisation de votre évènement."
                />
                <SectionTitleStyled
                    part1="Nos tarifs (sans"
                    part2="astérisques"
                    part3=")"
                    confettiEmojis={['']}
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
                        description={<span>Nous créons, hébergeons et référençons votre site internet.<br />Exemple: <Link to="https://capybarun.skovel.com" className='underline'>CapybaRun</Link></span>}
                        price="500 € / site"
                        priceDescription="gratuit si vous utilisez notre module d'inscription"
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
                        description="Nous définission votre stratégie sur les réseaux et autres canaux pour une communication optimale."
                        price="500 € / stratégie"
                        priceDescription="création et publication des contenus en option"
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
                        price="1€ + 2% / participant"
                        priceDescription='inclut un CRM et module de communication'
                    />
                </PlanSection>
                <div className="flex justify-center">
                    <ButtonBordered
                        to="https://creastel.notion.site/Les-offres-Skovel-eca8ffe8c0354c43b4f26733c78d2eee?pvs=4"
                        target="_blank"
                    >
                        Nos offres en détail
                        <ChevronRight />
                    </ButtonBordered>
                </div>
                <SectionTitleStyled
                    part1=""
                    part2="Discutons"
                    part3=" de votre projet !"
                    confettiEmojis={['✨', '🙌🏻', '🥇', '🖥️']}
                    colorsVariant='pink'
                />
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
                <SectionTitleStyled
                    part1={<span>FAQ<Megaphone className="fill-paletteBlue" /></span>}
                    confettiEmojis={[]}
                />
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
                    answer="Notre gamme de services s'étend de la communication sur votre course (avant, pendant et après course) aux opérations d'organisations. Nous pouvons mettre à disposition plusieurs outils pour vous aider à gérer votre évènement : système de communication avec les participants, bénévoles et partenaires (via mail, SMS de dernière minute, etc.), gestion des inscriptions, mise à disposition des résultats, etc."
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
