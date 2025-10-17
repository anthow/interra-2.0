import React from "react";
import { Link } from "gatsby";

const MainMenu = ({ data }) => (
  <>
    <Link to="/">
      <li className="hover:text-yellow-500 text-sm md:text-lg text-center mb-2 md:mb-0 ">
        {data.datoCmsMenu.menuPrincipalUnAccueil}
      </li>
    </Link>
    <li className="text-center mb-2">
      <div class="dropdown inline-block relative">
        <button class="  hover:text-yellow-500 text-center text-sm md:text-lg  md:mb-0   rounded inline-flex items-center">
          <Link to="/decouvrir-interra">
            {data.datoCmsMenu.menuPrincipalDeuxDecouvrirInterra}
          </Link>
          <svg
            class="fill-current h-4 w-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden z-50 bg-white  text-gray-700  p-4 pt-3">
          <Link to="/decouvrir-interra/#adn">
            <li className="hover:text-yellow-500 text-center text-sm md:text-lg mb-2 ">
              {" "}
              {data.datoCmsMenu.sousMenuDecouvrirInterraAdn}
            </li>
          </Link>
          <Link to="/decouvrir-interra/#missions">
            <li className="hover:text-yellow-500 text-center mb-2 text-sm md:text-lg ">
              {" "}
              {data.datoCmsMenu.sousMenuDecouvrirInterraMission}{" "}
            </li>
          </Link>
          <Link to="/decouvrir-interra/#valeurs">
            <li className="hover:text-yellow-500 text-center mb-2 text-sm md:text-lg">
              {" "}
              {data.datoCmsMenu.sousMenuDecouvrirInterraValeurs}{" "}
            </li>
          </Link>
          <Link to="/decouvrir-interra/#partenaires">
            <li className="hover:text-yellow-500 text-center mb-2 text-sm md:text-lg">
              {" "}
              {data.datoCmsMenu.sousMenuDecouvrirInterraLexique}
            </li>
          </Link>
          <Link to="/decouvrir-interra/#partenaires">
            <li className="hover:text-yellow-500 text-center mb-2 text-sm md:text-lg">
              {" "}
              {data.datoCmsMenu.sousMenuDecouvrirInterraPartenaires}
            </li>
          </Link>
        </ul>
      </div>
    </li>
    <li className="text-center mb-2">
      <div class="dropdown inline-block m-auto relative">
        <button class="text-sm md:text-lg  hover:text-yellow-500 text-center    rounded inline-flex items-center">
          <Link to="/projets">
            {data.datoCmsMenu.menuPrincipalTroisProjets}{" "}
          </Link>
          <svg
            class="fill-current h-4 w-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden z-50 bg-white  text-gray-700  p-4 pt-3">
          <Link to="/inter-act">
            <li className="hover:opacity-80 text-vert-interra text-center mb-2 text-sm md:text-lg ">
              {" "}
              {data.datoCmsMenu.sousMenuProjetInteract}
            </li>
          </Link>
          <Link to="/duo2change">
            <li className="hover:opacity-80 text-jaune-interra text-center mb-2 text-sm md:text-lg ">
              {" "}
              {data.datoCmsMenu.sousMenuProjetDuo}{" "}
            </li>
          </Link>
          <Link to="/interlab">
            <li className="hover:opacity-80 text-orange-interra  text-center mb-2 text-sm md:text-lg">
              {" "}
              {data.datoCmsMenu.sousMenuProjetInterlab}{" "}
            </li>
          </Link>
          <Link to="/formation-interculturelle">
            <li className="hover:opacity-80 text-bleu-interra text-center mb-2 text-sm md:text-lg">
              {" "}
              {data.datoCmsMenu.sousMenuProjetFormation}{" "}
            </li>
          </Link>
        </ul>
      </div>
    </li>
    <a
      href="https://www.facebook.com/InterraCult/events"
      rel="noreferrer"
      target="_blank"
    >
      <li className="hover:text-yellow-500 text-center mb-2 md:mb-0 text-sm md:text-lg ">
        {" "}
        {data.datoCmsMenu.menuPrincipalQuatreAgenda}{" "}
      </li>
    </a>{" "}
    <li className="text-center mb-2">
      <div class="dropdown inline-block relative">
        <button class="text-sm md:text-lg  hover:text-yellow-500 text-center mb-2 md:mb-0   rounded inline-flex items-center">
          <Link to="/agir-avec-nous">
            {data.datoCmsMenu.menuPrincipalCinqAgirAvecNous}{" "}
          </Link>
          <svg
            class="fill-current h-4 w-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden z-50 bg-white  text-gray-700  p-4 pt-3">
          <Link to="/agir-avec-nous/talent-interact">
            <li className="hover:text-yellow-500 text-center mb-2 text-sm md:text-lg ">
              {" "}
              {data.datoCmsMenu.sousMenuAgirAvecNousDevenirTalent}{" "}
            </li>
          </Link>
          <Link to="/agir-avec-nous/former-duo">
            <li className="hover:text-yellow-500 text-center mb-2 text-sm md:text-lg ">
              {" "}
              {data.datoCmsMenu.sousMenuAgirAvecNousFormerUnduo}
            </li>
          </Link>
          <Link to="/agir-avec-nous/interlab">
            <li className="hover:text-yellow-500 text-center text-sm md:text-lg mb-2">
              {" "}
              {data.datoCmsMenu.sousMenuAgirAvecNousDevenirCoah}
            </li>
          </Link>
          <Link to="/agir-avec-nous/participer-formation">
            <li className="hover:text-yellow-500 text-center text-sm md:text-lg mb-2">
              {" "}
              {
                data.datoCmsMenu.sousMenuAgirAvecNousParticiperFormation
              }{" "}
            </li>
          </Link>
          <Link to="/agir-avec-nous/devenir-volontaire">
            <li className="hover:text-yellow-500 text-center text-sm md:text-lg mb-2">
              {" "}
              {
                data.datoCmsMenu.sousMenuAgirAvecNousDevenirVolontaire
              }{" "}
            </li>
          </Link>
          <Link to="/agir-avec-nous/#don">
            <li className="hover:text-yellow-500 text-center text-sm md:text-lg mb-2">
              {" "}
              {data.datoCmsMenu.sousMenuAgirAvecNousFaireDon}{" "}
            </li>
          </Link>
        </ul>
      </div>
    </li>
    <li className="hover:text-yellow-500 text-center text-sm md:text-lg mb-2 md:mb-0">
      {" "}
      <Link to="/contact">
        {data.datoCmsMenu.menuPrincipalSixContact}{" "}
      </Link>
    </li>
  </>
);

export default MainMenu;
