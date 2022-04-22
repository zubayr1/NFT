import React, {useState, } from 'react'
import { Button, Form, Grid, Message } from 'semantic-ui-react'
import {abi, address} from './SmartContract';
import { ethers } from 'ethers'

function Whitelisting(props) {

    const defaultAccount = props.dataParentToChild
    const [check, setCheck] = useState(0)
    const [hash, setHash] = useState('')

    const { ethereum } = window

    const [whitelistAddress, setWhitelistAddress] = useState('')
   

    const btnHandler = async(event) =>
      {

        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()


        const SmartContract = new ethers.Contract(
            address,
            abi,
            signer
          )

        event.preventDefault();

        if(defaultAccount===null)
        {
            setCheck(3)
        }
        else if (check!==1 && defaultAccount!==null )
        {
            
            try{
                await SmartContract.whitelistUser(whitelistAddress
                    )
                    .then(function(transaction) {
                        setHash(transaction.hash)

                        
                        setCheck(1)
                    });
                    
            }
            catch (error)
            {
                setCheck(2)
            }
            
        }

      }



      let message 
      
      if(check===0)
      {
        message =  <div>
        </div>
      }
      else if(check===1)
      {
        message =  <div>
            <Message
                success
                header='Whitelisted'
                content='Address Successfully whitelisted!'
            />
        </div>
      }
      else if(check===2)
      {
          message = <div>
              <Message
                error
                header='Action Forbidden'
                content='Something went wrong while transaction'
                />
          </div>
      }
      else if(check===3)
      {
          message = <div>
              <Message
                warning
                header='Action Required'
                content='Log in with Metamask'
                />
          </div>
      }

    
      let hashmessage

      if(check===1)
      {
          hashmessage = <div>

                <Grid centered columns={1}>

               
                <Grid.Row>
                <Grid.Column computer={8} tablet={12} mobile={16}>

                    <Form inverted>
                        <Form.Field>
                        <label>Transaction hash</label>
                        <div style={{ borderRadius:'50px',boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 14px 0 #daeaf0'}}>
                        <input defaultValue={hash} disabled style={{borderRadius:'50px', backgroundColor:'#0F0F0F', color:'white'}}/>
                        </div>
                        </Form.Field>
                        
                    </Form>

                </Grid.Column>
                </Grid.Row>


                </Grid>

          </div>
      }
      else
      {
          hashmessage = 
          <div></div>
      }
      

  return (
    <div>
        <Grid centered columns={1}>

        
        <Grid.Row>
        <p class="FuturaFont" style={{color:'#FE560C', fontSize:'30px', fontWeight:'bold'}}>
                Whitelist Address!
                </p>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column computer={8} tablet={12} mobile={16}>

            <Form inverted>
                <Form.Field>
                <label>sender</label>
                <div style={{ borderRadius:'50px',boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 14px 0 #daeaf0'}}>
                <input onChange={(e)=> setWhitelistAddress(e.target.value)}  style={{borderRadius:'50px', backgroundColor:'#0F0F0F', color:'white'}}/>
                </div>
                </Form.Field>
                
                <Button floated='right' inverted onClick={btnHandler}>Whitelist</Button>
            </Form>

        </Grid.Column>
        </Grid.Row>


        <Grid.Row computer={8} tablet={12} mobile={2}>
            {message}
        </Grid.Row>

        </Grid>

        {hashmessage}
    </div>
  )
}

export default Whitelisting