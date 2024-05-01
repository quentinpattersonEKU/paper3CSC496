import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const reloadPage = () => {
    window.location.reload();
}

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Page">
      <p>Voice your questions and concerns here!</p>
      <StaticImage src="../images/pokemonMail.png" alt="Pokedex" height={500}></StaticImage>
        <form>
            <br></br>
            <br></br>
            <label for ="name">Name: </label>
            <input type="text" id="name" name="name"></input>
            <br></br>
            <br></br>
            <label for ="email">Email:  </label>
            <input type="text" id="email" name="email"></input>
            <br></br>
            <br></br>
            <label for="comment">Comment:</label>
            <br></br>
            <textarea id="comment" name="comment" rows="10" cols="50">Enter comments here...</textarea>
            <br></br>
            <br></br>
            <input type="checkbox" id="emailsignup" name="emailsignup"></input>
            <label for="emailsignup">Would you like emails related to this pokemon fan website?</label>
            
        </form>
        
        <br></br>
        <button type="button" onClick={() => reloadPage()}>Submit!</button>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Page" />

export default ContactPage