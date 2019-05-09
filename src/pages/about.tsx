import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Top } from '../components/About'

interface IAbout {
  data: {
    aboutYaml: {
      seo: {
        title: string
        description: string
      }
      hero: {
        title: string
        photos: Array<{
          alt: string
          image: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }>
      }
    }
  }
}

const Contact: React.FC<IAbout> = ({ data }) => {
  return (
    <Layout theme="light">
      <SEO
        title={data.aboutYaml.seo.title}
        description={data.aboutYaml.seo.description}
      />

      <Top
        title={data.aboutYaml.hero.title}
        photos={data.aboutYaml.hero.photos}
      />
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query AboutQuery {
    aboutYaml {
      seo {
        title
        description
      }
      hero {
        title
        photos {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
