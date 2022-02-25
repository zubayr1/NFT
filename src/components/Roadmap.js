import React from "react";
import Fade from 'react-reveal/Fade';
import hoodie from '../assets/hoodie.png'
import ps_xbox from '../assets/ps_xbox.png'

import { Grid, Image} from 'semantic-ui-react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './click.css'

export default function Roadmap() {
   
  return (
    <div>
         <Grid padded centered>
           <Grid.Row >
           <Grid.Column only="computer tablet">
             <Fade bottom>
                <div style={{textAlign:'center'}}>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'80px', fontWeight:'bolder'}}>
                  Dodo Roadmap
                  </p>
                  </div>
               </Fade>
           </Grid.Column>

           
           </Grid.Row>
         </Grid>

         <Grid padded centered>
           <Grid.Row >
           <Grid.Column only="mobile">
              <Fade bottom>
                <div style={{textAlign:'center'}}>
                    <p class="FuturaFont" style={{color:'#FE560C', fontSize:'40px', fontWeight:'bolder'}}>
                  Dodo Roadmap
                  </p>
                  </div>
              </Fade>
           </Grid.Column>

           
           </Grid.Row>
         </Grid>


        <VerticalTimeline >

          <VerticalTimelineElement
            className="vertical-timeline-element--work roadmap"
            contentStyle={{ background: '#000', color: '#fff', borderRadius:'14px' ,boxShadow:'#baecff 0px 3px 6px, #baecff 0px 5px 10px' }}
            contentArrowStyle={{ borderRight: '7px solid  #baecff' }}
            iconStyle={{ background: 'linear-gradient(110deg, #0b096b 60%, #0b0a2b 60%)', color: '#000',  }}
            
          > 
            
            <h3 className="vertical-timeline-element-title">15%</h3>
            
            <p style={{fontSize:'14px'}}>
              We pay our Debts back.
            </p>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--work roadmap"
            contentStyle={{ background: '#000', color: '#fff', borderRadius:'14px' ,boxShadow:'#baecff 0px 3px 6px, #baecff 0px 5px 10px' }}
            contentArrowStyle={{ borderRight: '7px solid  #baecff' }}
            iconStyle={{ background: 'linear-gradient(110deg, #0b096b 60%, #0b0a2b 60%)', color: '#000',  }}
            
          >
            <h3 className="vertical-timeline-element-title">30%</h3>
            
            <p style={{fontSize:'14px'}}>
              You can create your own design. If the editorial team likes it, it will be auctioned in Drunk Dodo page and will be promoted via all Drunk Dodo social media. You keep 90% royalty if your NFT gets sold.

            </p>

          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--work roadmap"
            contentStyle={{ background: '#000', color: '#fff', borderRadius:'14px' ,boxShadow:'#baecff 0px 3px 6px, #baecff 0px 5px 10px' }}
            contentArrowStyle={{ borderRight: '7px solid  #baecff' }}
            iconStyle={{ background: 'linear-gradient(110deg, #0b096b 60%, #0b0a2b 60%)', color: '#000',  }}
            
          >
            <h3 className="vertical-timeline-element-title">45%</h3>
            
            <p style={{fontSize:'14px'}}>
              Customized Tees/Caps/Hoodies will be gifted to club members with pictures of their NFT Dodos printed on them. 

            </p>
            <Grid centered style={{marginTop:'2%'}}>
              <div >
                <Image src={hoodie} size='medium' />  
              </div>

            </Grid>
            

            
          </VerticalTimelineElement>




          <VerticalTimelineElement
            className="vertical-timeline-element--work roadmap"
            contentStyle={{ background: '#000', color: '#fff', borderRadius:'14px' ,boxShadow:'#baecff 0px 3px 6px, #baecff 0px 5px 10px' }}
            contentArrowStyle={{ borderRight: '7px solid  #baecff' }}
            iconStyle={{ background: 'linear-gradient(110deg, #0b096b 60%, #0b0a2b 60%)', color: '#000',  }}
            
          >
            <h3 className="vertical-timeline-element-title">60%</h3>
            
            <p style={{fontSize:'14px'}}>
              We will arrange our own online gaming events. Every members of our Discord channel are welcome to participate. The winners will be awarded with AR/VR Set, PS5/XBox Series X and NFTs. Remember, there will be multiple such events throughout our journey!
            </p>

            <Grid centered style={{marginTop:'2%'}}>
              <div >
                <Image src={ps_xbox} size='large' />  
              </div>

            </Grid>

          </VerticalTimelineElement>




          <VerticalTimelineElement
            className="vertical-timeline-element--work roadmap"
            contentStyle={{ background: '#000', color: '#fff', borderRadius:'14px' ,boxShadow:'#baecff 0px 3px 6px, #baecff 0px 5px 10px' }}
            contentArrowStyle={{ borderRight: '7px solid  #baecff' }}
            iconStyle={{ background: 'linear-gradient(110deg, #0b096b 60%, #0b0a2b 60%)', color: '#000',  }}
            
          >
            <h3 className="vertical-timeline-element-title">75%</h3>
            
            <p style={{fontSize:'14px'}}>
              100,000$ will be donated to different NGOs working for Children Welfare and to Save Endangered Species like our favorite Dodos. It will be discussed with the most active members of the Club.
            </p>
          </VerticalTimelineElement>




          <VerticalTimelineElement
            className="vertical-timeline-element--work roadmap"
            contentStyle={{ background: '#000', color: '#fff', borderRadius:'14px' ,boxShadow:'#baecff 0px 3px 6px, #baecff 0px 5px 10px' }}
            contentArrowStyle={{ borderRight: '7px solid  #baecff' }}
            iconStyle={{ background: 'linear-gradient(110deg, #0b096b 60%, #0b0a2b 60%)', color: '#000',  }}
            
          >
            <h3 className="vertical-timeline-element-title">90%</h3>
            
            <p style={{fontSize:'14px'}}>
              Live your wildest dreams! Attend the wildest drunk parties of Dodos in our base 'Dodos' Nest' in the Metaverse. Long nights of party and poker and lets bring Vegas in Metaverse!

            </p>
          </VerticalTimelineElement>




          <VerticalTimelineElement
            className="vertical-timeline-element--work roadmap"
            contentStyle={{ background: '#000', color: '#fff', borderRadius:'14px' ,boxShadow:'#baecff 0px 3px 6px, #baecff 0px 5px 10px' }}
            contentArrowStyle={{ borderRight: '7px solid  #baecff' }}
            iconStyle={{ background: 'linear-gradient(110deg, #0b096b 60%, #0b0a2b 60%)', color: '#000',  }}
            
          >
            <h3 className="vertical-timeline-element-title">100%</h3>
            
            <p style={{fontSize:'14px'}}>
              Mythical performance in the Metaverse: Just imagine. There are flying mountains and sky kissing trees. A place populated by mythical creatures. And your favourite popstar is performing there in our unique place. Club members will be directly invited. Club members can apply for free passes to perform themselves! Its time to show your talent. In the Metaverse!

              
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work roadmap"
            iconStyle={{ background: 'linear-gradient(110deg, #030229 40%, #04030f 40%)', color: '#000' }}
            contentStyle={{ background: '#000', color: '#fff', borderRadius:'14px' ,boxShadow:'#baecff 0px 3px 6px, #baecff 0px 5px 10px' }}
            contentArrowStyle={{ borderRight: '7px solid  #baecff' }}
            
          >
                        
          <p style={{fontSize:'14px'}}>
            Oh! And one more Thing!- Drunk Dodos is a family, always: As the club grows, all the members will be invited to our next projects, and members will be collaborated for their own projects in the Metaverse. 
              Its time to rule Metaverse, as a family.
              
            </p>
          </VerticalTimelineElement>


        </VerticalTimeline>

    </div>
  );

}