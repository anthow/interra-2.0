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
                src="https://res.cloudinary.com/anthow/image/upload/v1751374235/Onglet_Soutenez-nous_1_frrbbp.png"
                alt="Merci de nous soutenir !"
                placeholder="blurred"
                className="rounded-lg shadow-lg"
            />
        </div>
        
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Suite à la perte de nombreux subsides,
            l'équipe est en chômage économique temporaire, et <span className="font-bold text-red-600">la structure dans son ensemble risque de disparaitre.</span>
        </p>

        <p className="text-xl mb-6 leading-relaxed">
            <span className="font-bold text-green-600">On a besoin de vous !</span>
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
            Nous avons besoin de votre soutien pour maintenir nos activités quotidiennes et surtout démontrer <span className="font-bold">qu'Interra est essentielle pour Liège</span> et toutes les personnes qui bénéficient de nos activités.
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
        
        
    </main>
)

export default Homepage