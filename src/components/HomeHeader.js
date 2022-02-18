import React from 'react'
import { Grid,Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import logo from '../assets/wasted_dodo_header.png'
import discord from '../assets/discord.png'
import rarible from '../assets/rarible.png'
import opensea from '../assets/opensea.png'

import './fonts.css'
function HomeHeader({changeState}) {



  return (
    <div style={{marginLeft:'40px', marginRight:'40px'}}>
        

        <Grid  padded>
      
        <Grid.Row  verticalAlign="middle"> 
          <Grid.Column floated='left'  mobile={6} tablet={3} computer={4}>
            <Link to="/">
              <Image src={logo} size='medium'/>
            </Link>
          </Grid.Column>

          

          <Grid.Column only='tablet computer' tablet={7} computer={5}>  
  
          <Grid>
              <Grid.Row columns={4} verticalAlign="middle">
                  <Grid.Column  tablet={4} computer={4} >
                     
                     <div onClick={() => changeState('home')}>
                    <p class="headerfont">Home</p>
                    </div>
                  </Grid.Column>
  
                  <Grid.Column  tablet={4} computer={4}>
                    <div onClick={() => changeState('gallery')}>
                    <p class="headerfont">Gallery</p>
                    </div>
                  </Grid.Column>
  
                  <Grid.Column  tablet={4} computer={4}>
                  <div onClick={() => changeState('roadmap')}>
                    <p class="headerfont">Roadmap</p>
                    </div>
                  </Grid.Column>

                  <Grid.Column  tablet={4} computer={4}>
                    <p class="headerfont">Team</p>
                  </Grid.Column>
  
              </Grid.Row>
              
          </Grid>
          
          </Grid.Column>


  
          <Grid.Column floated='right' mobile={8} tablet={6} computer={4}>  
  
          <Grid>
              <Grid.Row columns={3} verticalAlign="middle">
                  <Grid.Column only='tablet computer' tablet={4} computer={4} >
                    <a href='https://discord.gg/aug6ttSW'>
                      <Image src={discord} size='mini'/>
                    </a>
                  </Grid.Column>
  
                  <Grid.Column mobile={7} tablet={4} computer={4}>
                  <a href="https://rarible.com/">
                      <Image src={rarible} size='tiny'/>
                    </a>
                  </Grid.Column>
  
                  <Grid.Column mobile={9} tablet={8} computer={8}>
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
  )
}

export default HomeHeader