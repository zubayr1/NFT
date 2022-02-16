import React from 'react'
import { Button} from 'semantic-ui-react'

function BuyDodo() {
  return (
    <div style={{backgroundColor:'black'}}>
        <div style={{marginTop:'30px', marginLeft:'20px', marginRight:'40px', }}>
            <div style={{border: '2px solid #FE560C', borderRadius:'14px'}}>
                <div style={{marginTop:'30px', marginLeft:'20px', marginRight:'40px', marginBottom:'30px' }}>

        <p class="FuturaFont" style={{color:'#FE560C', fontSize:'40px', fontWeight:'bolder'}}>
                 BUY A DODO</p>

                 <p class="FuturaFont" style={{color:'#FE560C', fontSize:'20px', fontWeight:'bold'}}>
                 The pre-sale will start soon. Follow us in DIscord, Twitter and Instagram to always stay updated!
                 The first followers will have special offers throughout our journey.
                 </p>

                   

                    <div style={{justifyContent:'center'}}>
                        <div style={{marginRight:'10px', display:'inline'}}>
                            <Button size='large' style={{color:'#0F0F0F', backgroundColor:'#FE560C'}}>Buy on Opensea</Button>
                        </div>
                        <div style={{marginLeft:'10px', display:'inline'}}>
                    <Button size='large' style={{color:'#FFFFFF', backgroundColor:'#0F0F0F'}}>Buy on Rarible</Button>
                    </div>
                    </div>

                 </div>
                 </div>
        </div>
    </div>
  )
}

export default BuyDodo