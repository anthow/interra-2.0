// NavbarLink.js

import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";
import SocialLinks from "./SocialLinks";
import ActionButtons from "./ActionButtons";
import MainMenu from "./MainMenu";

const NavbarLinks = () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsMenu {
          imageWallonie {
            alt
            gatsbyImageData(width: 40)
          }
          menuPrincipalUnAccueil
          menuPrincipalDeuxDecouvrirInterra
          menuPrincipalTroisProjets
          menuPrincipalQuatreAgenda
          menuPrincipalCinqAgirAvecNous
          menuPrincipalSixContact
          sousMenuDecouvrirInterraAdn
          sousMenuDecouvrirInterraMission
          sousMenuDecouvrirInterraPartenaires
          sousMenuDecouvrirInterraValeurs
          sousMenuDecouvrirInterraLexique
          sousMenuProjetInteract
          sousMenuProjetDuo
          sousMenuProjetFormation
          sousMenuProjetInterlab
          sousMenuAgirAvecNousDevenirCoah
          sousMenuAgirAvecNousDevenirVolontaire
          sousMenuAgirAvecNousDevenirTalent
          sousMenuAgirAvecNousFaireDon
          sousMenuAgirAvecNousFormerUnduo
          sousMenuAgirAvecNousParticiperFormation
        }
      }
    `}
    render={(data) => (
      <div className="  md:w-auto flex flex-col ">
        <nav
          name="presse"
          className=" md:mt-5 order-2 md:order-1
        md:col-span-2 md:items-center md:self-end md:justify-self-end"
        >
          <ul
            className="md:items-center m-auto  md:flex md:content-start
         flex-col md:flex-row md:space-x-2"
          >
                <li className="flex flex-row md:mr-2 gap-2 items-center">
                  <GatsbyImage
                    image={data.datoCmsMenu.imageWallonie.gatsbyImageData}
                    alt={data.datoCmsMenu.imageWallonie.alt}
                  />
                  <p className="font-black">Prix du Mérite wallon 2022</p>
                </li>
                <ActionButtons />
                <SocialLinks />
          </ul>
        </nav>
        <nav
          name="menu"
          className="mt-2 order-1 md:order-2 mb-2 md:mb-10 md:mb-0 "
        >
            <ul className=" text-lg   flex-col md:flex-row md:flex  m-auto md:space-x-10 ">
                <MainMenu data={data} />
              </ul>
        </nav>
      </div>
    )}
  ></StaticQuery>
);

export default NavbarLinks;
