import React, { useRef} from 'react'
import HomeHeader from './HomeHeader';

function Home_Dodo() {

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


  return (
    <div>
        <HomeHeader changeState={changeState}/>
    </div>
  )
}

export default Home_Dodo