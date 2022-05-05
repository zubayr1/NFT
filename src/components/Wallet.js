import React, {useState, } from 'react'
import { Button,  Grid, Message } from 'semantic-ui-react'
import BaseMint from './BaseMint';
import Whitelisting from './Whitelisting';
// import WhiteMint from './Whitemint';

function Wallet() {

    const [whitelistcheck, setWhitelistcheck] = useState(0)
    const [basemintcheck, setBasemintcheck] = useState(0)
    // const [whitemintcheck, setWhitemintcheck] = useState(0)



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

    const whitelisthandler = () =>
    {
        setWhitelistcheck((whitelistcheck+1)%2)
    }

    let whitelistcomponent

    if(whitelistcheck===1)
    {
        whitelistcomponent = <div>
            <Whitelisting dataParentToChild = {defaultAccount}/>
        </div>
    }
    else{
        whitelistcomponent = <div>
            
        </div>
    }



    // const whiteminthandler = () =>
    // {
    //     setWhitemintcheck((whitemintcheck+1)%2)
    // }

    // let whitemintcomponent

    // if(whitemintcheck===1)
    // {
    //     whitemintcomponent = <div>
    //         <WhiteMint dataParentToChild = {defaultAccount}/>
    //     </div>
    // }
    // else{
    //     whitemintcomponent = <div>
            
    //     </div>
    // }
    



    const baseminthandler = () =>
    {
        setBasemintcheck((basemintcheck+1)%2)
    }

    let basemintcomponent

    if(basemintcheck===1)
    {
        basemintcomponent = <div>
            <BaseMint dataParentToChild = {defaultAccount}/>
        </div>
    }
    else{
        basemintcomponent = <div>
            
        </div>
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

        <div>
            <Button inverted color='blue' onClick={whitelisthandler}>Get Whitelisted</Button>
        </div>

    {whitelistcomponent}


    {/* <div style={{marginTop: '20px'}}>
            <Button inverted onClick={whiteminthandler}>Go for Sale Mint</Button>
        </div>

    {whitemintcomponent} */}


    <div style={{marginTop: '20px'}}>
            <Button inverted color='green' onClick={baseminthandler}>Go for Public Mint</Button>
        </div>

    {basemintcomponent}
        
    </div>
  )
}

export default Wallet