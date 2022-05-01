import React from 'react'
import { Grid,Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import logo from '../assets/wasted_dodo_header.png'
import discord from '../assets/discord.png'
import rarible from '../assets/rarible.png'
import opensea from '../assets/opensea.png'

function Scratchheader() {
  return (
    <div style={{ backgroundColor:'black'}}>
    <div style={{marginLeft:'2%', marginRight:'2%',}}>
        

      <Grid  padded>
    
      <Grid.Row  verticalAlign="middle"> 
        <Grid.Column floated='left'  mobile={5} tablet={6} computer={4}>
          <Link to="/">
            <Image src={logo} size='medium'/>
          </Link>
        </Grid.Column>

        <Grid.Column floated='right' mobile={9} tablet={8} computer={4}>  

        <Grid>
            <Grid.Row columns={3} verticalAlign="middle">
                <Grid.Column mobile={4} tablet={4} computer={4} >
                    <Image src={discord} size='mini'/>
                </Grid.Column>

                <Grid.Column mobile={5} tablet={5} computer={6}>
                <a href="https://rarible.com/collection/0x9f26dfa739791efe3f899efc0bf07bf409cd6543/items">
                    <Image src={rarible} size='tiny'/>
                  </a>
                </Grid.Column>

                <Grid.Column mobile={7} tablet={7} computer={6}>
                  <a href="https://opensea.io/collection/wasteddodo">
                    <Image src={opensea} size='small'/>
                  </a>
                </Grid.Column>

            </Grid.Row>
            
        </Grid>
        
        </Grid.Column>
      </Grid.Row>

     
    
  </Grid>

      
    </div>

    </div>
  )
}

export default Scratchheader