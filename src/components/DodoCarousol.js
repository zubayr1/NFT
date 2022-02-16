import React from 'react'
import whats_in_dodo_club from '../assets/whats_in_dodo_club.png'
import { Grid, Image, } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
import browse_gallery_btn from '../assets/browse_gallery_btn.png'

function DodoCarousol() {

  const src = 'https://gateway.pinata.cloud/ipfs/QmZwETCvSnwmVSBV52PnB67rE8cADKjEFR8Tr4pJCYJwAB'

  const INDEX1 = Math.random()*20|0 +1;
  const INDEX2 = INDEX1 +1;
  const INDEX3 = INDEX1 +2;
  const INDEX4 = INDEX1 +3;
  const INDEX5 = INDEX1 +4;

  return (
    <div>
        <Grid>
            <Grid.Row centered>
        <div style={{marginLeft:'40px', marginRight:'40px', marginTop:"40px",}}>
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

        

    <Grid centered >
    <Grid.Row columns={5}>

      <Grid.Column  mobile={7} tablet={3} computer={3}>
      <Grid centered >
        <Grid.Row>
      <Image src={src+'/'+ INDEX1+'.png'} size='medium'/>
      </Grid.Row>

      <Grid.Row>
      <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                 Dodo #{INDEX1}</p>
            </Grid.Row>
          </Grid>
      </Grid.Column>


      <Grid.Column only='tablet computer' tablet={3} computer={3}>
      <Grid centered >
        <Grid.Row>
      <Image src={src+'/'+ INDEX2+'.png'} size='medium'/>
      </Grid.Row>

      <Grid.Row>
      <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                 Dodo #{INDEX2}</p>
            </Grid.Row>
          </Grid>
      </Grid.Column>


      <Grid.Column only='tablet computer' tablet={3} computer={3}>
      <Grid centered >
        <Grid.Row>
      <Image src={src+'/'+ INDEX3+'.png'} size='medium'/>
      </Grid.Row>

      <Grid.Row>
      <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                 Dodo #{INDEX3}</p>
            </Grid.Row>
          </Grid>
      </Grid.Column>


      <Grid.Column mobile={7} tablet={3} computer={3}>
      <Grid centered >
        <Grid.Row>
      <Image src={src+'/'+ INDEX4+'.png'} size='medium'/>
      </Grid.Row>

      <Grid.Row>
      <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                 Dodo #{INDEX4}</p>
            </Grid.Row>
          </Grid>
      </Grid.Column>

      <Grid.Column  only='tablet computer' tablet={3} computer={3}>
      <Grid centered >
        <Grid.Row>
      <Image src={src+'/'+ INDEX5+'.png'} size='medium'/>
      </Grid.Row>

      <Grid.Row>
      <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                 Dodo #{INDEX5}</p>
            </Grid.Row>
          </Grid>
      </Grid.Column>

      </Grid.Row>
    </Grid>

    <div style={{marginTop:'20px',}}>
      {/* <Link to="/alldodos"> */}
        <Image src={browse_gallery_btn} size='medium' centered/>
        {/* </Link> */}
    </div>
    


    </div>
  )
}

export default DodoCarousol