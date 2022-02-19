import React from 'react'
import { Grid,  Image, } from 'semantic-ui-react'
import dodo_story from '../assets/dodo_story.png'
import dodo2_scratch from '../assets/dodo2_scratch.png'
import  './floating3.css'

function DodoStory() {
  return (
    <div style = {{ backgroundColor:"black"}}>
      <div style = {{marginTop:'20px', paddingBottom:'30px'}}>
        <Grid style={{ marginTop:'10px'}} padded>
          
          <Grid.Row verticalAlign="middle">
            <Grid.Column only='tablet computer' tablet={4} computer={4} floated='left'>
            <div class="avatar3" style={{marginLeft:'20px'}}>
                <Image src={dodo2_scratch} size='big' />
                </div>
            </Grid.Column>

              <Grid.Column mobile={16} tablet={10} computer={10}>

                  
                  <Grid style={{marginLeft:'10px', marginRight:'10px'}}>
                  <Grid.Row columns={2}>
                    <Image src={dodo_story} size='big' />
                  </Grid.Row>

                  <Grid.Row>
                  <div style={{float:'left'}}>
                        <p class="FuturaFont" style={{color:'#FE560C', fontSize:'20px'}}>
                          A new experience is Coming Soon!!
                        </p>
                        </div>
                    
                    </Grid.Row>     
                       
                        <Grid.Row>
                          
                          <div >
                                <p class="FuturaFont" style={{color:'white', fontSize:'16px', textAlign:'justify', maxWidth:'100%'}}>
                                Beyond the seas, there remains the mythical archipelago of Malibu and Mauritius, in the <p style={{display:"inline", color:'#FE560C'}}>Metaverse. </p> 
                                They have flying mountains, giant ancient animals and birds, and of course, the <p style={{display:"inline", color:'#FE560C'}}>Coolest Dodos. </p> 
                                Their only hobbies are to party wild, drink, smoke, and play poker till they are <p style={{display:"inline", color:'#FE560C'}}>super wasted. </p>  
                                Some mornings, they are so intoxicated that they need guidance to return to their nests. 
                                The secret voices of the Forests say they also host and attend wildest concerts in the Metaverse with <p style={{display:"inline", color:'#FE560C'}}>'Real People'! </p>
                                </p>
                              </div>
                         </Grid.Row>
                    </Grid>
                 
              </Grid.Column>
            </Grid.Row>


        </Grid>
        </div>
    </div>
  )
}

export default DodoStory