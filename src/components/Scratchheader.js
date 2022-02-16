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
    <div style={{marginLeft:'40px', marginRight:'40px',}}>
        

      <Grid  padded>
    
      <Grid.Row  verticalAlign="middle"> 
        <Grid.Column floated='left'  mobile={6} tablet={8} computer={4}>
          <Link to="/">
            <Image src={logo} size='medium'/>
          </Link>
        </Grid.Column>

        <Grid.Column floated='right' mobile={10} tablet={8} computer={4}>  

        <Grid>
            <Grid.Row columns={3} verticalAlign="middle">
                <Grid.Column mobile={4} tablet={4} computer={4} >
                    <Image src={discord} size='mini'/>
                </Grid.Column>

                <Grid.Column mobile={5} tablet={5} computer={6}>
                <a href="https://rarible.com/">
                    <Image src={rarible} size='tiny'/>
                  </a>
                </Grid.Column>

                <Grid.Column mobile={7} tablet={7} computer={6}>
                  <a href="https://opensea.io/">
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