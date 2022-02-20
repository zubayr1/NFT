import React from 'react'
import instagram_original from '../assets/instagram_original.png'
import twitter_original from '../assets/twitter_original.png'
import discord_original from '../assets/discord_original.png'
import { Grid, Image } from 'semantic-ui-react'

function SocialMedia() {
  return (
    <div style={{backgroundColor:'black',}}>
        <div style={{marginTop:'3%', paddingBottom:'20px', marginLeft:'20px', marginRight:'20px',  }}>
            <div style={{borderRadius:'14px' ,boxShadow:'#baecff 0px 3px 6px, #baecff 0px 5px 10px'}}>
                <div style={{marginTop:'10px', paddingBottom:'20px', }}>
              
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'40px', fontWeight:'bolder'}}>
                        Join with Dodos in Social Media</p>
                   
                       
                    <Grid>
                        <Grid.Row columns={4} verticalAlign="middle">

                                <Grid.Column  tablet={16} computer={16} floated='right'>

                                <Image.Group >
                                
                                <a href='https://discord.gg/aug6ttSW'><Image src={discord_original} size='medium'/></a>

                                <a href='https://twitter.com/dodo_drunk'><Image src={twitter_original} size='small'/></a>
                                <a href='https://instagram.com/wasteddodoclub?utm_medium=copy_link'><Image src={instagram_original} size='small'/></a>
                                    
                                 </Image.Group>
                                </Grid.Column>                               

                        </Grid.Row>                               

                           
                    </Grid>

                 </div>
            </div>

        </div>
    </div>
  )
}

export default SocialMedia