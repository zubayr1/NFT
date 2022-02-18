import React from 'react'
import { Grid, Button,Image } from 'semantic-ui-react'
import wasted_dodo_footer from '../assets/wasted_dodo_footer.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import discord_footer from '../assets/discord_footer.png'

function Footer() {
  return (
    <div style={{backgroundColor:'rgba(254, 86, 12, 0.19)'}}>
        <div style={{marginTop:'30px', marginLeft:'30px', marginRight:'30px'}}>
            
            <Grid  columns={2}>
                <Grid.Column mobile={8} tablet={6} computer={4} floated='left'>
                <p class="FuturaFont" style={{color:'#FE560C', fontSize:'40px', fontWeight:'bolder', margin:'0'}}>
                Get In Touch</p>

                <p class="FuturaFont" style={{color:'#FE560C', fontSize:'20px', fontWeight:'bold'}}>
                Have a design? We'd love to see it</p>

                <Button size='large' style={{color:'#0F0F0F', backgroundColor:'#FE560C'}}>React Out to Us</Button>
                </Grid.Column>

                <Grid.Column mobile={8} tablet={6} computer={4} floated='right'>
                 <Image src={wasted_dodo_footer} size='medium'/>

                <div style={{marginTop:'20px', }}>
                    <Grid>
                        <Grid.Column mobile={5} tablet={3} computer={3}>
                        <a href='https://instagram.com/wasteddodoclub?utm_medium=copy_link'>
                        <Image src={instagram} size='mini'/>
                        </a>
                        </Grid.Column>

                        <Grid.Column mobile={5} tablet={3} computer={3}>
                        <a href='https://twitter.com/dodo_drunk'>
                        <Image src={twitter} size='mini'/>
                        </a>
                        </Grid.Column>

                        <Grid.Column mobile={5} tablet={3} computer={3}>
                        <a href='https://discord.gg/aug6ttSW'>
                        <Image src={discord_footer} size='mini'/>
                        </a>
                        </Grid.Column>

                        <Grid.Column>
                        
                        </Grid.Column>


                    </Grid>

                    
                </div>

                </Grid.Column>

            </Grid>
            <div style={{marginBottom:'20px'}}>
                <p class="FuturaFont" style={{color:'#FE560C', fontSize:'15px', fontWeight:'bolder', margin:'10',display:"inline"}}>
                    Made by Wasted Dodo Club, empowered by</p> <p style={{color:'#F5B9AC', fontSize:'15px', fontWeight:'bolder', display:"inline"}}>AtlanTen. </p> 
            </div>

        </div>
    </div>
  )
}

export default Footer