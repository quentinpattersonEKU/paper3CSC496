import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <>
    
    <Layout pageTitle="POKEDEX">
    <StaticImage src="../../images/pokedex1.png" alt="Pokedex" height={500}></StaticImage>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.pokedexNumber}:
                {node.frontmatter.title}
                
              </Link>
            </h2>
          </article>
        ))
      }
    </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { pokedexNumber: ASC }}) {
      nodes {
        frontmatter {
          title
          pokedexNumber
          slug
          firstType
          secondType
          evolutionStage
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage