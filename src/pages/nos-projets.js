import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"



const Nosprojets = ({ data }) => (
  <Layout className="">
    <Seo title="Nos projets " />
    <article className="w-10/12 m-auto">
      <section className=" mt-10 flex flex-col space-y-20   m-auto">
        <div className="flex flex-col gap-10 md:grid grid-cols-2">
            <figure className="">
            <GatsbyImage
              image={data.datoCmsNosProjet.imageDeLaPage.gatsbyImageData}
              alt={data.datoCmsNosProjet.imageDeLaPage.alt}
            
            />
          </figure>
          <div className="flex flex-col gap-5">

            <h1 className="font-black text-4xl mb-10 md:mb-20 text-jaune-interra  bg-white text-center"> {data.datoCmsNosProjet.titreDeLaPage}</h1>
            
           <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsNosProjet.texteDeLaPage,
            }}
            className="paragraphe"
          ></div>
                      <a href={data.datoCmsNosProjet.texteDeLaPage.urlPdf} rel="noreferrer" target="_blank" className="mt-10 text-center"> 
        <button className=" w-max mt-5 text-white bg-vert-interra font-black  p-1 px-2  rounded hover:bg-white-interra hover:text-vert-interra hover:bg-white border hover:border-vert-interra"> Découvrir nos projets </button>

         </a>
       
          </div>
            </div> 
    </section>
    </article>

  </Layout>
)


export const query = graphql`
{
    datoCmsNosProjet {
        titreDeLaPage
        texteDeLaPage
        imageDeLaPage {
          alt
          gatsbyImageData
        }
        urlPdf
      }
    }

`


export default  Nosprojets







