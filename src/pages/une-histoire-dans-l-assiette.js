import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const UneHistoireDansLAssiettePage = () => (
  <Layout>
    <Seo title="Une histoire dans l'assiette" />
    
    <main className="max-w-5xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-vert-interra mb-4">
          Une histoire dans l'assiette
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        <div className="space-y-3">
          <p className="text-base leading-relaxed text-gray-700">
            INTERRA rassemble des personnes d'origines et de parcours différents autour d'ateliers culinaires et de moments partagés. Ce livre en est le prolongement : une mémoire collective, où les recettes se mêlent aux histoires personnelles et aux traditions transmises.
          </p>
          
          <p className="text-base leading-relaxed text-gray-700">
            À travers les pages d'"Une histoire dans l'assiette. Saveurs et rencontres avec INTERRA", vous découvrirez comment l'alimentation est bien plus qu'un geste quotidien : un langage universel, une porte d'entrée vers l'Autre, et une invitation à bâtir une société plus inclusive et solidaire.
          </p>
          
          {/* Bouton dans la colonne de gauche */}
          <div className="mt-6">
            <a 
              href="https://interra.sumupstore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-orange-interra text-white font-black px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                PASSER COMMANDE
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <StaticImage
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Livre de cuisine ouvert avec des ingrédients"
            placeholder="blurred"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>
      </div>

      <div className="bg-vert-interra text-white p-6 rounded-lg mb-8">
        <h2 className="text-xl md:text-2xl font-black mb-4 text-center">
          (S')offrir "cet ouvrage, c'est :
        </h2>
        
        <ul className="space-y-3 text-base">
          <li className="flex items-start">
            <span className="text-orange-interra font-bold mr-3">•</span>
            <span>Soutenir une société inclusive où chacun.e peut trouver sa place</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-interra font-bold mr-3">•</span>
            <span>Bénéficier de recettes issues du monde entier, racontées par les membres de la communauté d'INTERRA</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-interra font-bold mr-3">•</span>
            <span>Soutenir concrètement les activités uniques d'INTERRA</span>
          </li>
        </ul>
      </div>

      <div className="text-center bg-gray-50 p-6 rounded-lg mb-8">
        <p className="text-base text-gray-700 mb-4">
          Ouvrage publié aux Editions Altura, réalisé sous la coordination de Lucile Haertjens, et grâce au soutien financier de Co-Legia, de Promethea et de la Loterie Nationale.
        </p>
        
        {/* Quatrième et dernier bouton d'appel à l'action */}
        <a 
          href="https://interra.sumupstore.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-orange-interra text-white font-black px-8 py-4 rounded-lg text-xl hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            COMMANDER MAINTENANT
          </button>
        </a>
      </div>
    </main>
  </Layout>
)

export default UneHistoireDansLAssiettePage
