import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Listprojet from "../components/listprojets"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

                                     

const projetsPage = ({data}) => (
    <Layout className="">
           <Seo title="Projets" />
<article className="< m-auto flex flex-col">

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

            <h1 className="text-center font-black text-4xl mb-10 text-vert-interra  bg-white "> {data.datoCmsNosProjet.titreDeLaPage}</h1>
            
           <div
            dangerouslySetInnerHTML={{
                 __html: data.datoCmsNosProjet.texteDeLaPage,
            }}
            className="paragraphe"
          ></div>
                      <a href=" https://miniurl.be/r-4lo4" rel="noreferrer" target="_blank" className="mt-10 text-center"> 
        <button className=" w-max mt-5 text-white bg-vert-interra font-black  p-1 px-2  rounded hover:bg-white-interra hover:text-vert-interra hover:bg-white border hover:border-vert-interra"> Découvrir nos projets </button>

         </a>
       
          </div>
            </div> 
    </section>
    </article>

<Listprojet />

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

export default projetsPage

