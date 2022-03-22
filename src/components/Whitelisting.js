import React, {useState, } from 'react'
import { Button, Form, Grid, Message } from 'semantic-ui-react'
import SmartContract from './SmartContract';

function Whitelisting(props) {

    const defaultAccount = props.dataParentToChild
    const [check, setCheck] = useState(0)

    const btnHandler = async(event) =>
      {
        event.preventDefault();

        if(defaultAccount===null)
        {
            setCheck(3)
        }
        else if (check!==1 && defaultAccount!==null )
        {
            await SmartContract.methods.whitelistUser().send({
                from: defaultAccount,
                
                // value: ethvalue
            })
                
                .on("confirmation", function () {
                    setCheck(1)
                })
                .on("error", async function () {
                    setCheck(2)
                });
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
                content="You're successfully whitelisted!"
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
      

  return (
    <div>
        <Grid centered columns={1}>

        
        <Grid.Row>
        <p class="FuturaFont" style={{color:'#FE560C', fontSize:'30px', fontWeight:'bold'}}>
                Whitelist Yourself!
                </p>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column computer={8} tablet={12} mobile={16}>

            <Form inverted>
                <Form.Field>
                <label>sender</label>
                <div style={{ borderRadius:'50px',boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 14px 0 #daeaf0'}}>
                <input defaultValue={defaultAccount} disabled style={{borderRadius:'50px', backgroundColor:'#0F0F0F', color:'white'}}/>
                </div>
                </Form.Field>
                
                <Button floated='right' inverted onClick={btnHandler}>Whitelist</Button>
            </Form>

        </Grid.Column>
        </Grid.Row>


        <Grid.Row>
            {message}
        </Grid.Row>



        </Grid>
    </div>
  )
}

export default Whitelisting