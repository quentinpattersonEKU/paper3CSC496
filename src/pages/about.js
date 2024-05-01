import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <StaticImage src="../images/pokemonYellow.png" ></StaticImage>
      <p>Hi there! I am a fan of Pokemon, and my favorite pokemon game is Pokemon Yellow! So I have dedicated this website to helping trainers along their journey in Pokemon Yellow!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage