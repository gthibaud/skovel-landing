import { Card } from '../components/Card';
import { MainContainer } from '../components/Container/Main';
import { Header } from '../components/Header';
import { BigTitle } from '../components/Typography/BigTitle';

const Legals = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Mentions légales</BigTitle>
                <Card>{`
## Informations légales

Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l'"Utilisateur", du site skovel.com, ci-après le "Site", les présentes mentions légales.

La connexion et la navigation sur le Site par l'Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.

Ces dernières sont accessibles sur le Site à la rubrique "Mentions légales".

### ARTICLE 1 : L'ÉDITEUR

L'édition du Site est assurée par Creastel SAS au capital de 1000 euros, immatriculée au Registre du Commerce et des Sociétés de 123 sous le numéro 123 dont le siège social est situé au 123, 
Numéro de téléphone 123, 
Adresse e-mail : 123.
N° de TVA intracommunautaire : 123
Le Directeur de la publication est 123
ci-après l'"Editeur".

### ARTICLE 2 : L'HÉBERGEUR

L'hébergeur du Site est la société AMAZON WEB SERVICES EMEA SARL, dont le siège social est situé au 38 AV JOHN F KENNEDY L 1855,  LUXEMBOURG LUXEMBOURG, avec l'adresse mail de contact: contact@aws.com.

### ARTICLE 3 : ACCÈS AU SITE

Le Site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d'une nécessité de maintenance.

En cas de modification, interruption ou suspension des services le Site ne saurait être tenu responsable.

### ARTICLE 4 : COLLECTE DES DONNÉES

Le Site assure à l'Utilisateur ne pas collecter ni traiter d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
 
Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
            `}</Card>
                <br />
            </MainContainer>
        </div>
    );
}
export default Legals;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="fr" />
        <title>Skovel - Mentions légales</title>
        <meta
            name="description"
            content="Skovel vous accompagne dans la mise en place de la communication de votre course outdoor. Site web, réseaux sociaux, emails... discutons de votre projet !"
        />
        <meta name="viewport" content="width=device-width" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta property="og:title" content="Skovel - Mentions légales" />
        <meta property="og:description" content="Skovel vous accompagne dans la mise en place de la communication de votre course outdoor. Site web, réseaux sociaux, emails... discutons de votre projet !" />
        <meta property="og:image" content="https://skovel.com/images/preview.png" />
        <meta property="og:image:alt" content="Skovel website preview." />
        <meta name="twitter:title" content="Skovel - Mentions légales" />
        <meta name="twitter:description" content="Skovel vous accompagne dans la mise en place de la communication de votre course outdoor. Site web, réseaux sociaux, emails... discutons de votre projet !" />
        <meta name="twitter:url" content="https://skovel.com/" />
        <meta name="twitter:image:src" content="https://skovel.com/images/preview.png" />
        <meta name="twitter:image:alt" content="Skovel website preview" />
        <meta name="twitter:creator" content="@ThibaudGrgoire1" />
        <meta name="twitter:site" content="@ThibaudGrgoire1" />
        <meta charSet="utf-8" />
    </>
);
