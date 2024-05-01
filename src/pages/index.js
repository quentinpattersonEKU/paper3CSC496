import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to the world of Pokemon!</h1>
      <StaticImage src="../images/kantoMap.png" ></StaticImage>
      <p>The world of pokemon is vast, and has lots to enjoy!</p>
      <p>This website is specifically about the Kanto region in the pokemon world.</p>

    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage