import React from 'react'
import notfound from '../assets/notfound.png'
import { Grid, Image, Button } from 'semantic-ui-react'

function PageNotFound() {
  return (
    <div style={{backgroundColor:'white', width: '100%',
    height: '100%'}}>

        <Grid centered>
            <Grid.Row>
            <Image circular src={notfound} size='small'/>
            </Grid.Row>

            <Grid.Row>
                <h1>
                    Sorry! 
                </h1>                
            </Grid.Row>

            <Grid.Row only='computer tablet'>
            <h3>
                Dodos couldn't find the page you requested &#128531;
                </h3>
            </Grid.Row>

            <Grid.Row only='mobile'>
            <h5>
                Dodos couldn't find the page you requested &#128531;
                </h5>
            </Grid.Row>

            <Grid.Row>
            <Button color='red'>Report a Problem ?</Button>
            </Grid.Row>
        </Grid>
        
    </div>
  )
}

export default PageNotFound