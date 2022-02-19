import React, {useState, useRef} from 'react'
import HomeHeader from './HomeHeader';
import { Grid,  Image,Form } from 'semantic-ui-react'
import welcome_message from '../assets/welcome_message.png'
import corrected_welcome from '../assets/corrected_welcome.png'
import dodo1_scratch from '../assets/dodo1_scratch.png'
import sorry from '../assets/sorry.png'
import dodo_intro from '../assets/dodo_intro.png'
import search_btn from '../assets/search_btn.png'
import DodoStory from './DodoStory';
import  './floating2.css'
import  './appear_animation.css';
import { enableBodyScroll } from 'body-scroll-lock';
import DodoCarousol from './DodoCarousol';
import Roadmap from './Roadmap';
import BuyDodo from './BuyDodo';
import Footer from './Footer';
import SocialMedia from './SocialMedia';

function HomeDodo() {
  enableBodyScroll(document)
  const [searchvalue, setSearchValue] = useState('')

  const home = useRef(null)
  const gallery = useRef(null)
  const roadmap = useRef(null)

  const changeState = (childdata) => {
    
    if(childdata==='home')
      home.current.scrollIntoView({ behavior: 'smooth' })
    if(childdata==='gallery')
      gallery.current.scrollIntoView({ behavior: 'smooth' }) 
    if(childdata==='roadmap')
      roadmap.current.scrollIntoView({ behavior: 'smooth' }) 
  }


  function handleSearch()
  {
    console.log(searchvalue);
  }

  return (
    <div>
      <HomeHeader changeState={changeState}/>

      <div style={{marginLeft:'20px', marginRight:'20px', marginTop:'10%'}} ref={home}>

      <Grid>
        <Grid.Row>
          <Grid.Column mobile={9} tablet={8} computer={8} floated='right'>

                <div>
                  <Image src={welcome_message} size='huge' />
                </div>

              

                <div class='background-img' style={{marginTop:'2%'}}>
                  <Image src={corrected_welcome} size='big' />
                </div>          

                
                <div class='background-img' style={{float:'center', marginTop:'2%'}}>
                  <Image src={sorry} size='medium' />
                </div> 

                <Image src={dodo_intro} size='big' style={{marginTop:'5%'}}/>

                <Grid style={{marginTop:'4%'}}>
                  <Grid.Row only='computer tablet'>     
                          
                      <Grid.Column tablet={12} computer={10}>
                                <Form size='small' key='small'>
                                  <Form.Field>                      
                                    <input placeholder='search collections' style={{borderRadius:'50px', backgroundColor:'#0F0F0F', color:'white'}}onChange={e => setSearchValue(e.target.value)}/>
                                  </Form.Field>
                                </Form>
                      </Grid.Column>

                      <Grid.Column mobile={3} tablet={3} computer={3}>
                              <div  onClick={handleSearch}>
                              <Image src={search_btn} size='mini'/>
                              </div>
                      </Grid.Column>               

                  </Grid.Row>
                </Grid>


          </Grid.Column>

          <Grid.Column mobile={7} tablet={6} computer={4} floated='left'>
              <div>
            <div class="avatar2">	
                <Image src={dodo1_scratch} size='large'/>
                </div>
                </div>
          </Grid.Column>
        </Grid.Row>
       </Grid>

       <Grid>
        <Grid.Row only='mobile'>       
            <Grid.Column mobile={13}>
                      <Form size='small' key='small'>
                        <Form.Field>                      
                          <input placeholder='search collections' style={{borderRadius:'50px', backgroundColor:'#0F0F0F', color:'white'}}onChange={e => setSearchValue(e.target.value)}/>
                        </Form.Field>
                      </Form>
            </Grid.Column>

            <Grid.Column mobile={3} >
                    <div  onClick={handleSearch}>
                    <Image src={search_btn} size='mini'/>
                    </div>
            </Grid.Column>               

        </Grid.Row>
      </Grid>
     

    

    </div>

    <div>

      <DodoStory/>      
      </div>

      <SocialMedia/>

      <div ref={gallery}>
      <DodoCarousol/>
      </div>

      <div style={{marginBottom:'20px', marginTop:'30px'}} ref={roadmap}>
        <Roadmap />
      </div> 

      <div style={{marginBottom:'20px', marginTop:'60px'}}>
      <BuyDodo/>
      </div>

      

      <div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default HomeDodo



