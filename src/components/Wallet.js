import React, {useState, } from 'react'
import { Button,  Grid, Message } from 'semantic-ui-react'
import BaseMint from './BaseMint';
import Whitelisting from './Whitelisting';

function Wallet() {

    

    const [defaultAccount, setDefaultAccount] = useState(null);

    const [errormessage, setErrorMessage] =useState('')


    const connectwallethandler = ()=>
    {
        if (window.ethereum && window.ethereum.isMetaMask)
        {
            //metamask is there
            window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});
        }
        else{
            setErrorMessage('metamask not installed')
        }
    }


    const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
	}

    

    let walletmessage

    if(errormessage==='')
    {
        walletmessage=<div></div>
    }
    else{
        walletmessage = <div>
            <Message
                error
                header='Action Forbidden'
                content= {errormessage}
                />
        </div>
    }



      

      


  return (
    <div>    

    <Grid centered columns={1}>

        <Grid.Row>
            <div>
                <Button inverted color='orange' onClick={connectwallethandler}>Connect to metamask</Button>
            </div>
        </Grid.Row>

        <Grid.Row>
            {walletmessage}
        </Grid.Row>

        
     

    </Grid>

    <Whitelisting dataParentToChild = {defaultAccount}/>

    <BaseMint dataParentToChild = {defaultAccount}/>
        
    </div>
  )
}

export default Wallet