import * as React from 'react'
import Layout from '../components/layout'

import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const ComparisonPage = () => {

    const typeCompare = () => {
        var first = document.getElementById('typeOne').value;
        var second = document.getElementById('typeTwo').value;
        var answer = ""

        if(first == "Normal"){
            if(second == "Rock" || second == "Steel"){
              answer = "x1/2"
            }
            else if(second == "Ghost"){
              answer = "x0"
            }
            else{
              answer = "x1"
            }
        }
        if(first == "Fire"){
          if(second == "Fire" || second == "Water" || second == "Rock" || second == "Dragon"){
            answer = "x1/2"
          }
          else if (second == "Grass" || second == "Ice" || second == "Bug" || second == "Steel"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Water"){
          if(second == "Water" || second == "Grass" || second == "Dragon"){
            answer = "x1/2"
          }
          if(second == "Fire" || second == "Ground" || second == "Rock"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Electric"){
          if(second == "Electric" || second == "Grass" || second =="Dragon"){
            answer = "x1/2"
          }
          else if(second == "Water" || second == "Flying"){
            answer = "x2"
          }
          else if(second == "Ground"){
            answer = "x0"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Grass"){
          if(second == "Fire" || second == "Grass" || second == "Poison" || second == "Flying" || second == "Bug" || second == "Dragon" || second == "Steel"){
            answer = "x1/2"
          }
          else if(second == "Water" || second == "Ground" || second == "Rock"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }

        }

        if(first == "Ice"){
          if(second == "Fire" || second == "Water" || second == "Ice" || second == "Steel"){
            answer = "x1/2"
          }
          else if(second == "Grass" || second == "Ground" || second =="Flying" || second == "Dragon"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }
        }
        
        if(first == "Fighting"){
          if(second == "Poison" || second == "Flying" || second == "Psychic" || second == "Bug" || second == "Fairy"){
            answer = "x1/2"
          }
          else if(second == "Normal" || second == "Ice" || second == "Rock" || second == "Dark" || second == "Steel"){
            answer = "x2"
          }
          else if(second == "Ghost"){
            answer = "x0"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Poison"){
          if(second == "Poison" || second == "Ground" || second == "Rock" || second == "Ghost"){
            answer = "x1/2"
          }
          else if(second == "Grass" || second == "Fairy"){
            answer = "x2"
          }
          else if(second == "Steel"){
            answer = "x0"
          }
          else{
            answer = "x1"
          }

        }

        if(first == "Ground"){
          if(second == "Grass" || second == "Bug"){
            answer = "x1/2"
          }
          else if(second =="Fire" || second == "Electric" || second == "Poison" || second == "Rock" || second == "Steel"){
            answer = "x2"
          }
          else if(second == "Flying"){
            answer = "x0"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Flying"){
          if(second == "Electric" || second == "Rock" || second == "Steel"){
            answer = "x1/2"
          }
          else if(second == "Grass" || second == "Fighting" || second == "Bug"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Psychic"){
          if(second == "Psychic" || second == "Steel"){
            answer = "x1/2"
          }
          else if(second == "Fighting" || second == "Poison"){
            answer = "x2"
          }
          else if(second == "Dark"){
            answer = "x0"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Bug"){
          if(second == "Fire" || second == "Fighting" || second == "Poison" || second == "Flying" || second == "Ghost" || second == "Steel" || second == "Fairy"){
            answer = "x1/2"
          }
          else if(second == "Grass" || second == "Psychic" || second == "Dark"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Rock"){
          if(second == "Fighting" || second == "Ground" || second == "Steel"){
            answer = "x1/2"
          }
          else if(second == "Fire" || second == "Ice" || second == "Flying" || second == "Bug"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Ghost"){
          if(second == "Dark"){
            answer = "x1/2"
          }
          else if(second == "Psychic" || second == "Ghost"){
            answer = "x2"
          }
          else if(second == "Normal"){
            answer = "x0"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Dragon"){
          if(second == "Steel"){
            answer = "x1/2"
          }
          else if(second =="Dragon"){
            answer = "x2"
          }
          else if(second == "Fairy"){
            answer = "x0"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Dark"){
          if(second == "Fighting" || second == "Dark" || second == "Fairy"){
            answer = "x1/2"
          }
          else if(second == "Psychic" || second == "Ghost"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }
        }

        if(first == "Steel"){
          if(second == "Fire" || second == "Water" || second == "Electric" || second == "Steel"){
            answer = "x1/2"
          }
          else if(second == "Ice" || second == "Rock" || second == "Fairy"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }
        }
        
        if(first == "Fairy"){
          if(second == "Fire" || second == "Poison" || second == "Steel"){
            answer = "x1/2"
          }
          else if(second == "Fighting" || second == "Dragon" || second == "Dark"){
            answer = "x2"
          }
          else{
            answer = "x1"
          }
        }


        document.getElementById('first').textContent = first
        document.getElementById('second').textContent = second
        document.getElementById('answer').textContent = answer
    }


  return (
    <Layout pageTitle="Type Comparison">
      <StaticImage src="../images/pokemonTypes.png" alt="types"></StaticImage>
      <p>This is a page where you compare types.</p>

        <p>Offending   :
        <select name="typeOne" id="typeOne">
            <option value="Normal">Normal</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Electric">Electric</option>
            <option value="Grass">Grass</option>
            <option value="Ice">Ice</option>
            <option value="Fighting">Fighting</option>
            <option value="Poison">Poison</option>
            <option value="Ground">Ground</option>
            <option value="Flying">Flying</option>
            <option value="Psychic">Psychic</option>
            <option value="Bug">Bug</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Dragon">Dragon</option>
            <option value="Dark">Dark</option>
            <option value="Steel">Steel</option>
            <option value="Fairy">Fairy</option>

            
        </select>
        <button onClick={() => typeCompare()}>Click me!</button>
        <select name="typeTwo" id="typeTwo">
        <option value="Normal">Normal</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Electric">Electric</option>
            <option value="Grass">Grass</option>
            <option value="Ice">Ice</option>
            <option value="Fighting">Fighting</option>
            <option value="Poison">Poison</option>
            <option value="Ground">Ground</option>
            <option value="Flying">Flying</option>
            <option value="Psychic">Psychic</option>
            <option value="Bug">Bug</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Dragon">Dragon</option>
            <option value="Dark">Dark</option>
            <option value="Steel">Steel</option>
            <option value="Fairy">Fairy</option>
        </select>
        :   Defending</p>
        
        <div>If your type is 
        <div id="first">Normal</div>
        and it goes against
        <div id="second">Normal</div>
        then it will do
        <div id="answer">x1</div>
        damage
        </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Type Comparison" />

export default ComparisonPage