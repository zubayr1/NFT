import React  from 'react'
import Scratchheader from './Scratchheader'
import {Link} from 'react-router-dom'

import { Grid, Image,  } from 'semantic-ui-react'
import welcome_scratch from '../assets/welcome_scratch.png'
import join_button_scratch from '../assets/join_button_scratch.png'
import dodo1_scratch from '../assets/dodo1_scratch.png'
import dodo2_scratch from '../assets/dodo2_scratch.png'
import dodo3_scratch from '../assets/dodo3_scratch.png'
import dodo4_scratch from '../assets/dodo4_scratch.png'

import  './rippling.css'
import  './floating1.css'
import  './floating2.css'
import  './floating3.css'
import  './floating4.css'

import useSound from 'use-sound';
import boopSfx from '../assets/bg_music.mp3';


function Scratch() {
    
    
    const [play, { stop }] = useSound(boopSfx);

    

  return (
    <div >
        <Scratchheader/>
       
        
        <div style={{marginLeft:'40px', marginRight:'40px', marginTop:'100px'}}>
            <Grid >
                <Grid.Row>
                    <Grid.Column>
                    <Image src={welcome_scratch} centered size='huge'/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <p style={{ color: 'grey' }}>It is the nest of the 8000 unique dodos, unfortunately they were a bit wasted from yesterday's party and were 
        lost during their trip to the island of Malabu. </p>
        <p style={{ color: 'grey' }}>Please buy one dodo and lead it back to here before winter ends &#128533;</p>
                    </Grid.Column>
                    
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Link to="/home">
                            <Image src={join_button_scratch} centered size='medium'/>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
              
                

            </Grid>
        </div>

        <div class="ocean">
        <div class="bubble bubble--1"></div>
        <div class="bubble bubble--2"></div>

        <Grid>
            <Grid.Column floated='left' width={5}>
            <div >
                <div class="avatar2">	

                <Image src={dodo2_scratch} centered size='small' onMouseEnter={() => play()} onMouseLeave={() => stop()}/>
                    
   
            
                </div>
            </div>
        </Grid.Column>
        
        <Grid.Column floated='right' width={5}>
            <div >
                <div class="avatar1">		
                    <Image src={dodo1_scratch} centered size='medium' onMouseEnter={() => play()} onMouseLeave={() => stop()}/>
                </div>
            </div>
        </Grid.Column>
        </Grid>

       
        
        <div class="bubble bubble--3"></div>
        <div class="bubble bubble--4"></div>
        <div class="bubble bubble--5"></div>
        <div class="bubble bubble--6"></div>
        <div class="bubble bubble--7"></div>

        <div >
        <Grid>
            <Grid.Column floated='right' width={7}>
            <div >
                <div class="avatar3">		
                    <Image src={dodo3_scratch} centered size='small' onMouseEnter={() => play()} onMouseLeave={() => stop()}/>
                </div>
            </div>
        </Grid.Column>
        
        <Grid.Column  width={9}>
            <div >
                <div class="avatar4">		
                    <Image src={dodo4_scratch} centered size='tiny' onMouseEnter={() => play()} onMouseLeave={() => stop()}/>
                </div>
            </div>
        </Grid.Column>
        </Grid>
        </div>

        <div class="bubble bubble--8"></div>
        <div class="bubble bubble--9"></div>
        <div class="bubble bubble--10"></div>
        <div class="bubble bubble--11"></div>
        <div class="bubble bubble--12"></div>

        
    
        </div>

        


    </div>
  )
}

export default Scratch