import React from 'react'
import {   Table, Image, Grid  } from 'semantic-ui-react'
import thanks from '../assets/thanks.png'

function Collaborators() {


    let data =[
      {'id': 1, 'name':'Sarah', 'amount': 500},
      {'id': 2, 'name':'Zake', 'amount': 250},
      {'id': 3, 'name':'Debarchan', 'amount': 100},
      {'id': 4, 'name':'Khwab', 'amount': 500},
      {'id': 5, 'name':'Badhan', 'amount': 100},
      {'id': 6, 'name':'Winter', 'amount': 250},
    ]

  return (
    <div style={{backgroundColor:'white', width: '100%',
    height: '100%'}}>
        <div style={{paddingTop:'5%', paddingLeft:'5%', paddingRight: '5%'}}>

        <Grid centered>
          <Grid.Row>
          <Image circular src={thanks} size='small'/>

          </Grid.Row>

        </Grid>

        <h3>Dodos give a heartful thanks to all our contributors!</h3>
        <p>Find the Collaborator contract in Etherscan at address: <p style={{display:"inline", color:'#FE560C'}}>
          0xe24ac870179127075A54dE5129069698Cc011C41 </p> </p> 
        <Table unstackable>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Name</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Amount</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            {data.map(person => 
                {
                    return(
                <Table.Row>
                <Table.Cell>{person.id}</Table.Cell>
                <Table.Cell textAlign='center'>{person.name}</Table.Cell>
                <Table.Cell textAlign='right'>{person.amount}</Table.Cell>
            </Table.Row>)}
            )}
            
            
            </Table.Body>
        </Table>

        </div>
    </div>
  )
}

export default Collaborators