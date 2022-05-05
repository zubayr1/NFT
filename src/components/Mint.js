import React from 'react'
import Fade from 'react-reveal/Fade';
import Wallet from './Wallet';
import metal_dodo from '../assets/metal_dodo.PNG'
import { Grid, Image, } from 'semantic-ui-react'

function Mint() {
  return (
    <div style={{backgroundColor:'black'}}>
        <div style={{marginTop:'7%', marginLeft:'20px', marginRight:'20px', }}>
            <div style={{borderRadius:'14px', boxShadow:'#a9a8ed 0px 3px 6px, #a9a8ed 0px 5px 10px'}}>

                <div style={{marginTop:'2%', marginLeft:'20px', marginRight:'40px', marginBottom:'30px', textAlign:'center', paddingBottom:'20px' }}>

                      <Fade bottom>
                        <p class="FuturaFont" style={{color:'#2637a6', fontSize:'40px', fontWeight:'bolder', fontStyle: 'italic'}}>
                               Pre Sale will be LIVE soon!!</p>


                          <Wallet/>

                          <Grid centered>

                          <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                              Metallic Dodo on Auction!!</p>
                          <Image src={metal_dodo} r/>

                          </Grid>

                        
                      </Fade>
                   

                       

                 </div>
                 </div>
        </div>
    </div>
  )
}

export default Mint