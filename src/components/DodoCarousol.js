import React from 'react'
import whats_in_dodo_club from '../assets/whats_in_dodo_club.png'
import { Grid, Image, } from 'semantic-ui-react'

function DodoCarousol() {
  return (
    <div>
        <Grid>
            <Grid.Row centered>
        <div style={{marginLeft:'40px', marginRight:'40px', marginTop:"20px",}}>
             <Image src={whats_in_dodo_club} centered size='huge' />
             
        </div>
        </Grid.Row>

        <Grid.Row centered>
        <div style={{marginLeft:'40px', marginRight:'40px', marginTop:"20px", marginBottom:'10px', }}>
             <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                 A collection of 8000 unique Wasted Dodos</p>
             
        </div>
        </Grid.Row>
        </Grid>
    </div>
  )
}

export default DodoCarousol