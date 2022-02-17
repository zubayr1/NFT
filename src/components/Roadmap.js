import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import { Grid, Image } from "semantic-ui-react";
import dodo3_scratch from '../assets/dodo3_scratch.png'

import "./Roadmapstyles.css";

export default function Roadmap() {
  const Timeline = ({ setObserver, callback }) => {
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");
    const [message4, setMessage4] = useState("");
    const [message5, setMessage5] = useState("");
    const [message6, setMessage6] = useState("");

    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);

    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    const circle4 = useRef(null);
    const circle5 = useRef(null);
    const circle6 = useRef(null);

    const someCallback1 = () => {
      setMessage1("   - You can create your own design. If the editorial team likes it, it will be auctioned in Drunk Dodo page and will be promoted via all Drunk Dodo social media. You keep 90% royalty.");
      callback();
    };

    const someCallback2 = () => {
      setMessage2("   - We will start our own events in Metaverse where all the memebrs will play games. Winners will be awarded with 5 Ethers. Remember, there will be multiple such events throughout!");
    };

    const someCallback3 = () => {
      setMessage3("   - 100,000$ will be donated for Children welfare. It will be discussed with the most active members of the Club");
    };

    const someCallback4 = () => {
      setMessage4("   - Live your wildest dreams!: Attend the wildest drunk parties of Dodos in the Metaverse. Long nights of party and poker and lets bring Vegas in Metaverse!");
    };

    const someCallback5 = () => {
      setMessage5("   - Mythical performance in the Metaverse: Just imagine. There are flying mountains and sky kissing trees. A place populated by mythical creatures. And your favourite popstar is performing there in our unique place. Club members will be directly invited. ");
    };

    const someCallback6 = () => {
      setMessage6("    - Drunk Dodos is a family, always: As the club grows, all the members will be invited to our next projects, and members will be collaborated for their own projects in the Metaverse. ");
    };

    useEffect(() => {
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(timeline4.current);
      setObserver(timeline5.current);
      setObserver(timeline6.current);
      setObserver(circle1.current, someCallback1);
      setObserver(circle2.current, someCallback2);
      setObserver(circle3.current, someCallback3);
      setObserver(circle4.current, someCallback4);
      setObserver(circle5.current, someCallback5);
      setObserver(circle6.current, someCallback6);
    },);

    return (
      <div>
        <p class="FuturaFont" style={{color:'#FE560C', fontSize:'100px', fontWeight:'bolder'}}>
            Dodo Roadmap
            </p>
          <div style={{marginLeft:'40px', marginRight:'20px'}}>
        <Grid >
          <Grid.Column only="tablet computer" tablet={6} computer={6} floated='right' verticalAlign="middle">
           <Image src={dodo3_scratch} size='large' />
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={8} floated='left'>
      <div className="wrapper">
          
        <div id="timeline1" ref={timeline1} className="timeline" />
        <div className="circleWrapper">
          <div id="circle1" ref={circle1} className="circle">
            15%
          </div>
          <div className="message" style={{color:'white'}}>{message1}</div>
        </div>

        <div id="timeline2" ref={timeline2} className="timeline" />
        <div className="circleWrapper">
          <div id="circle2" ref={circle2} className="circle">
            30%
          </div>
          <div className="message" style={{color:'white'}}>{message2}</div>
        </div>

        <div id="timeline3" ref={timeline3} className="timeline" />
        <div className="circleWrapper">
          <div id="circle3" ref={circle3} className="circle">
            45%
          </div>
          <div className="message" style={{color:'white'}}>{message3}</div>
        </div>

        <div id="timeline4" ref={timeline4} className="timeline" />
        <div className="circleWrapper">
          <div id="circle4" ref={circle4} className="circle">
            60%
          </div>
          <div className="message" style={{color:'white'}}>{message4}</div>
        </div>

        <div id="timeline5" ref={timeline5} className="timeline" />
        <div className="circleWrapper">
          <div id="circle5" ref={circle5} className="circle">
            80%
          </div>
          <div className="message" style={{color:'white'}}>{message5}</div>
        </div>

        <div id="timeline6" ref={timeline6} className="timeline" />
        <div className="circleWrapper">
          <div id="circle6" ref={circle6} className="circle">
            100%
          </div>
          <div className="message" style={{color:'white'}}>{message6}</div>
        </div>
      </div>
      </Grid.Column>
      </Grid>
      </div>
      </div>
    );
  };

  

  const onCallback = () => {
    
  };

  return (
    <div className="App">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="red"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2"><div></div></div>
    </div>
  );
}
