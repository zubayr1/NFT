import React from 'react'
import {   Table, Image, Grid  } from 'semantic-ui-react'
import thanks from '../assets/thanks.png'

function Collaborators() {


    let data =[
      {'id': 1, 'name':'Sarah', 'amount': 500},
      {'id': 2, 'name':'Zake', 'amount': 100},
      {'id': 3, 'name':'Debarchan', 'amount': 100},
      {'id': 4, 'name':'Khwab', 'amount': 500},
      {'id': 5, 'name':'Badhan', 'amount': 100},
      {'id': 6, 'name':'Ujjval', 'amount': 300},
      {'id': 7, 'name':'Rupam', 'amount': 100},
      {'id': 8, 'name':'OptimasP', 'amount': 50},
      {'id': 9, 'name':'Aditto', 'amount': 100},
      {'id': 10, 'name':'Zubayr', 'amount': 700},
      {'id': 11, 'name':'Pero', 'amount': 1000},
      {'id': 12, 'name':'Bitan', 'amount': 25},
      {'id': 13, 'name':'Pritam', 'amount': 50},
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
        0x3C2d5237a40269730e10b2CBf6D0E8ec54d17EDa </p> </p> 
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