import React from 'react'
import { Grid, Image, } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
import browse_gallery_btn from '../assets/browse_gallery_btn.png'

import dc1 from '../assets/dc1.PNG'
import dc2 from '../assets/dc2.png'
import dc3 from '../assets/dc3.png'
import dc4 from '../assets/dc4.PNG'
import dc5 from '../assets/dc5.png'

import './click.css'
function DodoCarousol() {



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
                        <div className="click" style={{borderRadius:'20px' }}>
                        <div  style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                      <div  style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px',}}>
                    <Image src={dc1} rounded/>
                    </div>
                    </div>
                    </div>
                    </Grid.Row>

                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                              Dodo #1</p>
                          </Grid.Row>
                    </Grid>
                </Grid.Column>



                <Grid.Column only='tablet computer' tablet={3} computer={3}>
                  <Grid centered padded>
                    <Grid.Row>
                    <div className="click" style={{borderRadius:'20px' }}>
                    <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                    <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                    <Image src={dc2} rounded/>
                    </div>
                    </div>
                    </div>
                  </Grid.Row>

                  <Grid.Row>
                  <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                            Dodo #2</p>
                        </Grid.Row>
                      </Grid>
                </Grid.Column>



                <Grid.Column only='tablet computer' tablet={3} computer={3}>
                  <Grid centered padded>
                      <Grid.Row>
                      <div className="click" style={{borderRadius:'20px' }}>
                      <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                      <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                    <Image src={dc3} rounded/>
                    </div>
                    </div>
                    </div>
                    </Grid.Row>

                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                              Dodo #3</p>
                          </Grid.Row>
                    </Grid>
                </Grid.Column>



                <Grid.Column mobile={8} tablet={3} computer={3}>
                  <Grid centered padded>
                      <Grid.Row>
                      <div className="click" style={{borderRadius:'20px' }}>
                      <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                      <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                    <Image src={dc4} rounded/>
                    </div>
                    </div>
                    </div>
                    </Grid.Row>

                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                              Dodo #4</p>
                          </Grid.Row>
                    </Grid>
                </Grid.Column>



                <Grid.Column only='tablet computer' tablet={3} computer={3}>
                  <Grid centered padded>
                      <Grid.Row>
                      <div className="click" style={{borderRadius:'20px' }}>
                      <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                        <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                    <Image src={dc5} rounded />
                    </div>
                    </div>
                    </div>
                    </Grid.Row>

                    <Grid.Row>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'16px',}}>
                              Dodo #5</p>
                          </Grid.Row>
                    </Grid>
                </Grid.Column>

            </Grid.Row>
            
        </Grid>
        
        </Grid.Column>

      </Grid.Row> 

      <Grid.Row>
      <div className="buttonclick" style={{borderRadius:'10px'}}>
        <div style={{boxShadow: 'rgba(50, 50, 93, 0.25) 1px 13px 27px 3px, rgba(0, 0, 0, 0.3) 0px 8px 16px 0px'}}>
        <Image src={browse_gallery_btn} />
        </div>
        </div>
      </Grid.Row>
     
    
  </Grid>

  

    </div>
  )
}

export default DodoCarousol