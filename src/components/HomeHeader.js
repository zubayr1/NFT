import React from 'react'
import { Grid,Image, } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import logo from '../assets/wasted_dodo_header.png'
import opensea_logo from '../assets/opensea_logo.png'
import rarible_logo from '../assets/rarible_logo.png'

import './fonts.css'
function HomeHeader({changeState}) {



  return (
    <div style={{marginLeft:'2%', marginRight:'2%'}}>
        

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
                    <div onClick={() => changeState('team')}>
                      <p class="headerfont">Team</p>
                    </div>
                  </Grid.Column>
  
              </Grid.Row>
              
          </Grid>
          
          </Grid.Column>


  
          <Grid.Column floated='right' mobile={8} tablet={6} computer={4}>  
  
          <Grid>
              <Grid.Row columns={2} verticalAlign="middle">
                  
  
                  <Grid.Column mobile={8} tablet={8} computer={7}>
                  <a href="https://rarible.com/">
                      <Image src={rarible_logo} size='small'/>
                      
                    </a>
                  </Grid.Column>
  
                  <Grid.Column mobile={8} tablet={8} computer={7}>
                    <a href="https://opensea.io/">
                      <Image src={opensea_logo} size='small'/>
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