import React from 'react'
import moreofit from '../assets/moreofit.png'
import {   Image, } from 'semantic-ui-react'
import './imagebtn.css'

function More() {
  
  return (
    <div style={{marginTop:'5%', paddingBottom:'5%'}}>
        <p class="FuturaFont" style={{color:'#ffffff', fontSize:'30px', fontWeight:'bolder'}}>
            Wasted Dodo will be More than just NFTs...
        </p>
        <p class="FuturaFont" style={{color:'#ffffff', fontSize:'20px', fontWeight:'bold'}}>
            A significant amount will be allocated in developing the Dodo's Nest: The Malibu in Metaverse, as well as buying lands.
            As the project grows, more budget will be allocated for this purpose.
        </p>

        <div class="container">
          <Image class='img' src={moreofit} rounded  size='massive' centered />
          <button class="btn">Coming Soon</button>

          </div>

        
    </div>
  )
}

export default More