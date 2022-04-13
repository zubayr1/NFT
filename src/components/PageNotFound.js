import React, {useState} from 'react'
import notfound from '../assets/notfound.png'
import { Grid, Image, Button, Form, Message } from 'semantic-ui-react'
import { getDatabase,  ref, set } from "firebase/database";
import moment from "moment";

const PageNotFound = () => {

  const [formshow, setFormshow] = useState(0);

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [about, setAbout] = useState('');

  const [showmessage, setShowMessage] = useState(0);



  const formsubit =()=>
  {
      if(name!=='' && mail!=='' && about!=='' && showmessage===0)
      {
        const date_create= moment().format("DD-MM-YYYY hh:mm:ss");

        const db = getDatabase();
        set(ref(db, 'report/' + date_create), {
            username: name,
            email: mail,
            about : about,
            date_create : date_create
        })
        .then(() =>
        {
            // Data saved successfully!
            setShowMessage(1)
            setFormshow(0)

        })
      }
  }

  let reportform

  if(formshow===0)
  {
      reportform = <div></div>
  }
  else{
      reportform= <div>
          <Form size='large' onSubmit={formsubit}>
            <Form.Field required>
            <label>Name</label>
            <input placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            </Form.Field>
            <Form.Field required>
            <label>Mail Id</label>
            <input placeholder='email' onChange={(e)=>setMail(e.target.value)}/>
            </Form.Field>
            <Form.TextArea required label='About' placeholder='let us know the issue..' onChange={(e)=>setAbout(e.target.value)}/>
            <Button type='submit'>Submit</Button>
        </Form>
      </div>
  }

  let message

  if(showmessage===0)
  {
      message=<div></div>
  }
  else
  {
      message=<div>
          <Message
      success
      header='Form Submitted'
      content="An agent of ours will soon contact you"
    />
      </div>
  }

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
            <Button onClick={()=>setFormshow((formshow+1)%2)} color='red'>Report a Problem ?</Button>
            </Grid.Row>

            <Grid.Row>
            </Grid.Row>
        </Grid>
        
        <div style={{paddingLeft:'10%', paddingRight: '10%'}}>
            {reportform}

            {message}
        </div>
        
    </div>
  )
}

export default PageNotFound