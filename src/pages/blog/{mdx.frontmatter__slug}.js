import * as React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <p>First Type: {data.mdx.frontmatter.firstType}</p>
      <p>Second Type: {data.mdx.frontmatter.secondType}</p>
      <p>Evolution Stage: {data.mdx.frontmatter.evolutionStage}</p>
      {children}
      
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        pokedexNumber
        firstType
        secondType
        evolutionStage
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost