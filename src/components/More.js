import React from 'react'
import moreofit from '../assets/moreofit.png'
import {  Image, } from 'semantic-ui-react'

function More() {
  return (
    <div style={{marginTop:'5%', paddingBottom:'5%'}}>
        <p class="FuturaFont" style={{color:'#ffffff', fontSize:'30px', fontWeight:'bolder'}}>
            Wasted Dodo will be More than just NFTs...
        </p>
        <p class="FuturaFont" style={{color:'#ffffff', fontSize:'20px', fontWeight:'bold'}}>
            1000 Euros will be allocated in developing a multiplayer game in Metaverse. 
            As the project grows, more budget will be allocated for this purpose.
        </p>
        <Image src={moreofit} rounded/>

        
    </div>
  )
}

export default More