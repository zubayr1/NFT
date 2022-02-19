import React from 'react'
import { Grid, Image, } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
import browse_gallery_btn from '../assets/browse_gallery_btn.png'



function DodoCarousol() {

  const src = 'https://gateway.pinata.cloud/ipfs/QmVQRQaEohUJFyBxH9kTxTn76iGzfh3vaLYbtrkvducQdn'

  const INDEX1 = Math.random()*6|0 +1;
  const INDEX2 = INDEX1 +1;
  const INDEX3 = INDEX1 +2;
  const INDEX4 = INDEX1 +3;
  const INDEX5 = INDEX1 +4;

  

  return (
    <div style={{backgroundColor:'#0f0f0f', paddingBottom:'20px'}}>


      <div style={{marginLeft:'10px', marginRight:'10px', marginTop:"3%", marginBottom:'2%', }}>
             <p class="FuturaFont" style={{color:'#ffffff', fontSize:'50px', fontWeight:'bolder'}}>
                What's in <p style={{display:"inline", color:'#FE560C'}}>Dodo </p>Club</p>
             
        </div>
        

        <div style={{marginLeft:'20px', marginRight:'20px', marginTop:"20px", marginBottom:'10px', }}>
             <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                 A collection of 8000 unique Wasted Dodos</p>
             
        </div>

        

        <Grid padded centered>
      
      <Grid.Row  > 
        
        <Grid.Column mobile={16} tablet={12} computer={12}>  

        <Grid centered>
            <Grid.Row columns={5} >


                <Grid.Column mobile={8} tablet={3} computer={3} >                   
                  <Grid centered padded>
                      <Grid.Row>
                    <Image src={src+'/'+ INDEX1+'.png'}/>
                    </Grid.Row>

                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                              Dodo #{INDEX1}</p>
                          </Grid.Row>
                    </Grid>
                </Grid.Column>



                <Grid.Column only='tablet computer' tablet={3} computer={3}>
                  <Grid centered padded>
                    <Grid.Row>
                  <Image src={src+'/'+ INDEX2+'.png'} />
                  </Grid.Row>

                  <Grid.Row>
                  <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                            Dodo #{INDEX2}</p>
                        </Grid.Row>
                      </Grid>
                </Grid.Column>



                <Grid.Column only='tablet computer' tablet={3} computer={3}>
                  <Grid centered padded>
                      <Grid.Row>
                    <Image src={src+'/'+ INDEX5+'.png'} />
                    </Grid.Row>

                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                              Dodo #{INDEX5}</p>
                          </Grid.Row>
                    </Grid>
                </Grid.Column>



                <Grid.Column mobile={8} tablet={3} computer={3}>
                  <Grid centered padded>
                      <Grid.Row>
                    <Image src={src+'/'+ INDEX3+'.png'} />
                    </Grid.Row>

                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                              Dodo #{INDEX4}</p>
                          </Grid.Row>
                    </Grid>
                </Grid.Column>



                <Grid.Column only='tablet computer' tablet={3} computer={3}>
                  <Grid centered padded>
                      <Grid.Row>
                    <Image src={src+'/'+ INDEX5+'.png'} />
                    </Grid.Row>

                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                              Dodo #{INDEX5}</p>
                          </Grid.Row>
                    </Grid>
                </Grid.Column>

            </Grid.Row>
            
        </Grid>
        
        </Grid.Column>

      </Grid.Row> 

      <Grid.Row>
        <Image src={browse_gallery_btn} />
      </Grid.Row>
     
    
  </Grid>

  

    </div>
  )
}

export default DodoCarousol