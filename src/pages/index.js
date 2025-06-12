import * as React from "react"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

const Homepage = ({ data }) => (
    <main className="max-w-4xl mx-auto px-8 py-12 text-center">
        <Seo title="Interra a besoin de vous" />
        
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
            Interra a besoin de vous !
        </h1>
        
        <p className="text-lg mb-8 leading-relaxed text-gray-700">
            Interra est une association liégeoise créatrice de liens entre les personnes nouvellement arrivées à Liège et les personnes locales via la valorisation de leurs talents, passions et savoir-faire.
        </p>
        
        <div className="mb-8">
            <StaticImage
                src="https://res.cloudinary.com/anthow/image/upload/v1749708622/2025_CAMPAGNE_SOLIDAIRE_-_Visuel_RS_3_a8ozip.png"
                alt="campagne"
                placeholder="blurred"
                className="rounded-lg shadow-lg"
            />
        </div>
        
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Suite à la perte de nombreux subsides,
            l'équipe est en chômage économique temporaire, et <span className="font-bold text-red-600">la structure dans son ensemble risque de disparaitre.</span>
        </p>

        <p className="text-xl mb-6 leading-relaxed">
            <span className="font-bold text-green-600">On a besoin de vous ! Soutenez Interra en participant à notre campagne solidaire !</span>
        </p>
        
        <p className="border-2 border-green-500 text-green-500 p-4 rounded-lg mb-12 font-medium">
            En savoir plus sur Interra : www.interra-asbl.be
        </p>

        <h2 className="text-3xl font-bold mb-8 text-gray-800">
            COMMENT NOUS SOUTENIR ?
        </h2>
        
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            1. Faites un don
        </h3>
        
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
            <span className="font-bold">Plus qu'une campagne de don, il s'agit ici d'une campagne de survie d'Interra</span>. Nous avons besoin de votre soutien pour maintenir nos activités quotidiennes et surtout démontrer <span className="font-bold">qu'Interra est essentielle pour Liège</span> et toutes les personnes qui bénéficient de nos activités.
        </p>
        
        <p className="text-lg mb-4 font-semibold text-gray-800">
            Comment faire un don ?
        </p>
        
        <ul className="text-left max-w-3xl mx-auto mb-8 space-y-4">
            <li className="text-lg leading-relaxed text-gray-700">
                Sur le<span className="font-bold"> compte de Caritas</span> BE04 2400 8007 6231 avec la communication "PROJET 732 371"
                <span className="italic text-gray-600"> (passer par Caritas nous permet d'offrir la déduction fiscale de 45%, à partir de 40€ de don)</span>
            </li>
            <li className="text-lg leading-relaxed text-gray-700">
                Via le<span className="font-bold"> QR Code</span> ci-dessous, directement via<span className="font-bold"> appli bancaire</span>
            </li>
        </ul>
        
        <div className="mb-8">
            <StaticImage
                src="../images/QR2025.png"
                alt="QR Code"
                placeholder="blurred"
                className="rounded-lg shadow-lg"
            />
        </div>
        
        <div className="mb-8">
            <StaticImage
                src="../images/tableau2025.png"
                alt="tableau"
                placeholder="blurred"
                className="rounded-lg shadow-lg"
            />
        </div>

        <p className="text-lg mb-8 leading-relaxed text-gray-700">
            Les dons passent par Caritas, afin de <span className="font-bold"> permettre une déduction fiscale</span> (45% à partir de 40€ de don). Ce qui signifie que vous ne dépenserez que 55% de la somme donnée (exemples ci-dessous).
        </p>
        
        <div className="mb-12">
            <StaticImage
                src="../images/3.png"
                alt="exemples déduction fiscale"
                placeholder="blurred"
                className="rounded-lg shadow-lg"
            />
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            2. Achetez votre "T-shirt Solidaire"
        </h3>
        
        <p className="text-lg mb-4 leading-relaxed text-gray-700">
            Achetez nos t-shirts solidaires pour porter nos valeurs directement sur vous !
        </p>
        
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
            👕 Commandez via ce formulaire : <a href="https://forms.gle/8tqE5LjMuPt6B7UWA" target="_blank" className="text-blue-600 hover:text-blue-800 underline"> https://forms.gle/8tqE5LjMuPt6B7UWA</a>
        </p>
        
        <div className="mb-12">
            <StaticImage
                src="../images/tshirt.png"
                alt="t-shirt solidaire"
                placeholder="blurred"
                className="rounded-lg shadow-lg"
            />
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            3. Kit de soutien - Partagez la campagne autour de vous
        </h3>
        
        <p className="text-lg mb-8 leading-relaxed text-gray-700">
            <a href="https://drive.google.com/drive/folders/11ahK1uH7dFmsrdGrPqTpOUl9eUkY6Ws0?usp=sharing" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Télécharger le Kit de soutien</a> ou copier/enregistrer directement les éléments ci-dessous.
        </p>
        
        <h4 className="text-xl font-semibold mb-4 text-gray-800">
            MESSAGE À DIFFUSER
        </h4>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left max-w-3xl mx-auto">
            <p className="font-bold mb-4 text-lg">
                Plus qu'une campagne de dons, la campagne solidaire que lance Interra est une campagne de survie !
            </p>
            <p className="mb-4 leading-relaxed">
                Depuis 2019, Interra crée des liens entre les personnes nouvellement arrivées à Liège et les personnes locales. Aujourd'hui, suite à la perte de nombreux subsides, l'équipe est en chômage économique, et l'avenir d'Interra est incertain.
            </p>
            <p className="mb-4 leading-relaxed">
                Pourtant, cette association liégeoise et ses projets sont essentiels pour Liège et pour toutes les personnes qui bénéficient de leurs activités.
            </p>
            <p className="font-bold mb-4 text-lg">
                Interra a besoin de vous !
            </p>
            <p className="leading-relaxed">
                Pour en savoir plus sur la campagne solidaire et à quoi serviront concrètement vos dons, rendez-vous sur leur page de campagne : <a href="https://urls.fr/XsxZXa" target="_blank" className="text-blue-600 hover:text-blue-800 underline"> https://urls.fr/XsxZXa</a>
            </p>
        </div>
        
        <h4 className="text-xl font-semibold mb-4 text-gray-800">
            VISUEL RÉSEAUX SOCIAUX
        </h4>
        
        <div className="mb-8">
            <StaticImage
                src="https://res.cloudinary.com/anthow/image/upload/v1749708622/2025_CAMPAGNE_SOLIDAIRE_-_Newsletter_grignoux_2_cyhorl.png"
                alt="campagne"
                placeholder="blurred"
                className="rounded-lg shadow-lg"
            />
        </div>

        <h4 className="text-xl font-semibold mb-4 text-gray-800">
            VISUEL SIGNATURE MAIL
        </h4>
        
        <div className="mb-12">
            <StaticImage
                src="../images/signature.png"
                alt="visuel signature mail"
                placeholder="blurred"
                className="rounded-lg shadow-lg"
            />
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gray-800">
            *Interra, c'est…
        </h2>
        
        <div className="space-y-8 text-left max-w-3xl mx-auto">
            <article className="bg-white p-6 rounded-lg shadow-md border">
                <p className="text-xl font-semibold mb-3 text-gray-800">
                    *InterAct et *InterAct J
                </p>
                <p className="text-lg mb-3 leading-relaxed text-gray-700">
                    <span className="font-bold">Des ateliers collectifs</span> entre personnes nouvellement arrivées et personnes locales.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    En savoir plus : <a href="https://www.interra-asbl.be/inter-act/" target="_blank" className="text-blue-600 hover:text-blue-800 underline"> InterAct | Interra</a>
                </p>
            </article>
            
            <article className="bg-white p-6 rounded-lg shadow-md border">
                <p className="text-xl font-semibold mb-3 text-gray-800">
                    *L'InterLab, premier incubateur inclusif wallon
                </p>
                <p className="text-lg mb-3 leading-relaxed text-gray-700">
                    Accompagnement à l'entrepreunariat sur mesure.
                </p>
                <p className="text-lg mb-3 leading-relaxed text-gray-700">
                    <span className="font-bold">Empo'Women</span> : accompagnement adapté aux défis rencontrés par les femmes entrepreneuses.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    En savoir plus : <a href="https://www.interra-asbl.be/interlab/" target="_blank" className="text-blue-600 hover:text-blue-800 underline"> Interlab | Interra</a>
                </p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-md border">
                <p className="text-xl font-semibold mb-3 text-gray-800">
                    *Duo2Change
                </p>
                <p className="text-lg mb-3 leading-relaxed text-gray-700">
                    <span className="font-bold">Rencontre en binôme</span> entre une personne nouvellement arrivée à Liège et une personne locale.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    En savoir plus : <a href="https://www.interra-asbl.be/duo2change/" target="_blank" className="text-blue-600 hover:text-blue-800 underline"> Duo2Change | Interra</a>
                </p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-md border">
                <p className="text-xl font-semibold mb-3 text-gray-800">
                    *Com'Together
                </p>
                <p className="text-lg mb-3 leading-relaxed text-gray-700">
                    <span className="font-bold">Formation à la communication interculturelle</span> mélange d'apports théoriques et d'exercices pratiques.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    En savoir plus : <a href="https://www.interra-asbl.be/formation-interculturelle/" target="_blank" className="text-blue-600 hover:text-blue-800 underline"> Formation interculturelle | Interra</a>
                </p>
            </article>
            
            <article className="bg-white p-6 rounded-lg shadow-md border">
                <p className="text-xl font-semibold mb-3 text-gray-800">
                    🎊 *L'InterraConnect
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Chaque mercredi, l'équipe d'Interra organise<span className="font-bold"> un moment de rencontre</span> autour de jeux, d'animations et de thématiques spécifiques. L'objectif ? Que les membres de la communauté d'Interra, actuel·les ou futur·es, puissent <span className="font-bold">se rencontrer, discuter, partager</span> un bon moment ensemble !
                </p>
            </article>
        </div>
        
        <div className="my-12">
            <StaticImage
                src="../images/2.jpg"
                alt="infographie Interra"
                placeholder="blurred"
                className="rounded-lg shadow-lg mb-8"
            />
        </div>

        <div className="mb-12">
            <StaticImage
                src="../images/4.jpg"
                alt="infographie Interra"
                placeholder="blurred"
                className="rounded-lg shadow-lg"
            />
        </div>
        
        <article className="bg-green-50 p-8 rounded-lg border-2 border-green-200 max-w-2xl mx-auto">
            <p className="text-lg mb-4 leading-relaxed text-gray-700">
                Une question ? Vous êtes une entreprise et souhaitez participer par du sponsoring ?
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
                Contactez Thomas Lenoir, Directeur d'INTERRA au <span className="font-bold">0474/95.86.13</span> ou par mail à l'adresse <a href="mailto:thomas@interra-asbl.be" className="text-blue-600 hover:text-blue-800 underline font-bold">thomas@interra-asbl.be</a>
            </p>
        </article>
    </main>
)

export default Homepage