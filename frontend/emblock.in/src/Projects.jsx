import {React, useRef, useEffect, useState} from 'react'
import { Grid, Image, Divider, List } from 'semantic-ui-react'
import "./assets/css/Projects.css"

function Projects() {
  // const imageRef = useRef()
  // const [visible, setVisible] = useState(false);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     setVisible(entry.isIntersecting)
      
  //   })
  //   observer.observe(imageRef.current)
  // }, []);
  return (
    <div className="centerP">
     {/* {
      constants.arr.map((ele, i) => (
        <div key={i}>
        <Divider inverted horizontal><div className="segmentTitle">{ele.title}</div></Divider>
        <Grid textAlign='center'>
        <Grid.Row style={{position: "relative"}} >
          <Image src={ele.image} className={"imageStylePA"}/>
          <div className='projectDescriptionSec'>
            <h4 style={{filter: "brightness(1)", fontSize: "25px", textAlign: "center"}}>Abstract</h4>
            <div className='projectDescription'>
              <List bulleted>
                <List.Item>{ele.description.theme}</List.Item>
                <List.Item>{ele.description.importance}</List.Item>
                <List.Item>{ele.description.application}</List.Item>
              </List>
            </div>
          </div>
        </Grid.Row>
        </Grid>
      </div> 
      ))
     } */
     }
      <p className='projectDescriptionSec'>We provide solutions for real-time challenges faced by industrial enterprises. Our services encompass website development, data maintenance through server provision, secure data
       storage by designing decentralized applications. Our goal is to merge current IoT technology with Blockchain, driving the upcoming Industrial Revolution. Our mission is to craft versatile applications that effectively address contemporary issues. Our aim is to be the pioneers shaping the digital landscape of the future
     </p>
     <Divider inverted horizontal>
          <div className="segmentTitle">Services</div>
      </Divider>
     <div className='Left'>
      <p className='sub'>
        Decentralized Identity Management: Leverage blockchain technology to provide secure and self-sovereign identity solutions, ensuring user data privacy and authentication across platforms.
      </p>
     </div>
     <div className='Right'>
      <p className='sub'>
        Smart Contract Automation: Develop and deploy smart contracts on blockchain networks, enabling automatic execution of agreements and transactions with unparalleled transparency and trust.
        
      </p>
     </div>
     <div className='Left'>
      <p className='sub'>
        Smart Home Automation: Design software solutions that enable seamless control and automation of smart home devices, enhancing convenience, energy efficiency, and security.
      </p>
     </div>
     <div className='Right'>
      <p className='sub'>
        Supply Chain Traceability: Implement blockchain-based tracking to monitor the entire supply chain, ensuring real-time visibility, authentication, and accountability of goods from source to consumer.
      </p>
     </div>
     <div className='Left'>
      <p className='sub'>
        AI-Enhanced Customer Support: Utilize machine learning algorithms to offer personalized and efficient customer support, optimizing responses and resolutions based on historical interactions.
      </p>
     </div>
     <div className='Right'>
      <p className='sub'>
        Data Analytics Platform: Create sophisticated data analysis tools that gather, process, and visualize complex data sets, enabling data-driven decision-making and predictive insights.
      </p>
     </div>
     <div className='Left'>
      <p className='sub'>
        Energy Consumption Monitoring: Develop IoT-enabled software that tracks and analyzes energy consumption patterns in real-time, aiding businesses and households in reducing waste and costs.
      </p>
     </div>
     <div className='Right'>
      <p className='sub'>
        Personalized Healthcare Apps: Create health applications using machine learning to offer personalized recommendations, treatment plans, and monitoring for individuals' well-being.
      </p>
     </div>

     </div>
  )
}

export default Projects


