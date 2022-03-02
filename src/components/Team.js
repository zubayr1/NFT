import React from 'react'
import { Grid, Image, } from 'semantic-ui-react'

import Fade from 'react-reveal/Fade';

import mem1 from '../assets/mem1.jpg'
import mem2 from '../assets/mem2.jpg'
import mem3 from '../assets/mem3.jpg'
import mem4 from '../assets/mem4.jpg'
import mem5 from '../assets/mem5.jpg'
import mem6 from '../assets/mem6.jpg'
import mem7 from '../assets/mem7.jpg'
import mem8 from '../assets/mem8.jpg'
import mem9 from '../assets/mem9.jpg'

import insta_bw from '../assets/insta_bw.png'
import github_bw from '../assets/github_bw.png'
import twitter_bw from '../assets/twitter_bw.png'
import linkedin_bw from '../assets/linkedin_bw.png'

function Team() {
  return (
    <div>
        <div style={{backgroundColor:'#121214', paddingBottom:'20px', borderRadius:'20px' ,boxShadow:'#000000 0px 30px 60px -12px inset, #000000 0px 18px 36px -18px inset'}}>

        <Fade bottom>
            <div style={{marginLeft:'10px', marginRight:'10px', marginTop:"7%", marginBottom:'2%', }}>
                    <p class="FuturaFont" style={{color:'#ffffff', fontSize:'50px', fontWeight:'bolder'}}>
                        The Core Team</p>
                    
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
                                    <Image src={mem1} rounded/>
                                    </div>
                                    </div>
                                    </div>
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'18px',}}>
                                            Zakwolf</p>
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'14px',}}>
                                            CEO</p>
                                    </Grid.Row>

                                        <Grid.Row >
                                            <Grid>
                                                <Grid.Row columns={1}>
                                                    <Grid.Column>
                                                        <Image src={insta_bw} rounded size='mini'/>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                    
                                    
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>



                                <Grid.Column mobile={8} tablet={3} computer={3}>
                                <Grid centered padded>
                                    <Grid.Row>
                                    <div className="click" style={{borderRadius:'20px' }}>
                                    <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                                    <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                                    <Image src={mem2} rounded/>
                                    </div>
                                    </div>
                                    </div>
                                </Grid.Row>

                                
                                <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'18px',}}>
                                            Zakekal</p>
                                            
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'14px',}}>
                                            CTO</p>
                                    </Grid.Row>

                                        <Grid.Row >
                                            <Grid>
                                                <Grid.Row centered columns={3}>
                                                    <Grid.Column>
                                                        <a href="https://github.com/zubayr1">
                                                            <Image src={github_bw} rounded size='mini'/>
                                                        </a>
                                                    </Grid.Column>

                                                    <Grid.Column>
                                                        <a href='https://twitter.com/zubayrkhalid5'>
                                                            <Image src={twitter_bw} rounded size='mini'/>
                                                        </a>
                                                    </Grid.Column>

                                                    <Grid.Column>
                                                        <a href='https://www.linkedin.com/in/zubayr-khalid-393257117/'>
                                                            <Image src={linkedin_bw} rounded size='mini'/>
                                                        </a>
                                                       
                                                    </Grid.Column>

                                                </Grid.Row>
                                            </Grid>
                                    
                                    
                                        </Grid.Row>
                                

                                </Grid>
                                </Grid.Column>



                                <Grid.Column mobile={8} tablet={3} computer={3}>
                                <Grid centered padded>
                                    <Grid.Row>
                                    <div className="click" style={{borderRadius:'20px' }}>
                                    <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                                    <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                                    <Image src={mem3} rounded/>
                                    </div>
                                    </div>
                                    </div>
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'18px',}}>
                                            Adam</p>
                                            
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'14px',}}>
                                            Tech Guy</p>
                                    </Grid.Row>


                                    </Grid>
                                </Grid.Column>



                                <Grid.Column mobile={8} tablet={3} computer={3}>
                                <Grid centered padded>
                                    <Grid.Row>
                                    <div className="click" style={{borderRadius:'20px' }}>
                                    <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                                    <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                                    <Image src={mem4} rounded/>
                                    </div>
                                    </div>
                                    </div>
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'18px',}}>
                                            F1R3H3ART</p>
                                            
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'14px',}}>
                                            Marketing Head</p>
                                    </Grid.Row>

                                    <Grid.Row >
                                            <Grid>
                                                <Grid.Row columns={1}>
                                                    <Grid.Column>
                                                        <a href='https://twitter.com/pritam007joy?t=ag27hro2D2eJEk5CEa9uzQ&s=09'>
                                                            <Image src={twitter_bw} rounded size='mini'/>
                                                        </a>
                                                        
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                    
                                    
                                        </Grid.Row>

                                    </Grid>
                                </Grid.Column>



                                <Grid.Column mobile={8} tablet={3} computer={3}>
                                <Grid centered padded>
                                    <Grid.Row>
                                    <div className="click" style={{borderRadius:'20px' }}>
                                    <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                                        <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                                    <Image src={mem5} rounded />
                                    </div>
                                    </div>
                                    </div>
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'18px',}}>
                                            Susen</p>
                                            
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'14px',}}>
                                            Legal Advisor</p>
                                    </Grid.Row>


                                    </Grid>
                                </Grid.Column>


                                <Grid.Column mobile={8} tablet={3} computer={3}>
                                <Grid centered padded>
                                    <Grid.Row>
                                    <div className="click" style={{borderRadius:'20px' }}>
                                    <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                                        <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                                    <Image src={mem6} rounded />
                                    </div>
                                    </div>
                                    </div>
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'18px',}}>
                                            Bish</p>
                                            
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'14px',}}>
                                            Design Head</p>
                                    </Grid.Row>

                                    <Grid.Row >
                                            <Grid>
                                                <Grid.Row columns={2}>
                                                    <Grid.Column>
                                                        <Image src={insta_bw} rounded size='mini'/>
                                                    </Grid.Column>

                                                    <Grid.Column>
                                                        <Image src={twitter_bw} rounded size='mini'/>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                    
                                    
                                        </Grid.Row>


                                    </Grid>
                                </Grid.Column>



                                <Grid.Column mobile={8} tablet={3} computer={3}>
                                <Grid centered padded>
                                    <Grid.Row>
                                    <div className="click" style={{borderRadius:'20px' }}>
                                    <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                                        <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                                    <Image src={mem7} rounded />
                                    </div>
                                    </div>
                                    </div>
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'18px',}}>
                                            Zigzag</p>
                                            
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'14px',}}>
                                            Design Guy</p>
                                    </Grid.Row>


                                    <Grid.Row >
                                            <Grid>
                                                <Grid.Row columns={1}>
                                                    <Grid.Column>
                                                        <Image src={insta_bw} rounded size='mini'/>
                                                    </Grid.Column>

                                                </Grid.Row>
                                            </Grid>
                                    
                                    
                                        </Grid.Row>


                                    </Grid>
                                </Grid.Column>



                                <Grid.Column mobile={8} tablet={3} computer={3}>
                                <Grid centered padded>
                                    <Grid.Row>
                                    <div className="click" style={{borderRadius:'20px' }}>
                                    <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                                        <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                                    <Image src={mem8} rounded />
                                    </div>
                                    </div>
                                    </div>
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'18px',}}>
                                            Deep</p>
                                            
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'14px',}}>
                                            Blockchain Expert</p>
                                    </Grid.Row>


                                    </Grid>
                                </Grid.Column>




                                <Grid.Column mobile={8} tablet={3} computer={3}>
                                <Grid centered padded>
                                    <Grid.Row>
                                    <div className="click" style={{borderRadius:'20px' }}>
                                    <div style={{borderRadius:'20px' ,boxShadow:'#baecff 0px 4px 10px'}}>
                                        <div style={{border: '2px solid #f7f5f5', borderRadius:'14px', padding:'5px'}}>
                                    <Image src={mem9} rounded />
                                    </div>
                                    </div>
                                    </div>
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'18px',}}>
                                            Poker</p>
                                            
                                    </Grid.Row>

                                    <Grid.Row>                                        
                                            <p class="FuturaFont" style={{color:'#ffffff', fontSize:'14px',}}>
                                            Web Design</p>
                                    </Grid.Row>


                                    </Grid>
                                </Grid.Column>
                                



                            </Grid.Row>
                            
                        </Grid>
                        
                        </Grid.Column>







                    </Grid.Row> 

                   
                </Grid>

            </Fade>

  

            </div>
    </div>
  )
}

export default Team