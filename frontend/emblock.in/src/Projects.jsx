import {React, useRef, useEffect, useState} from 'react'
import { Grid, Image, Divider, List } from 'semantic-ui-react'
import "./assets/css/Projects.css"
import constants from "../constants.js"

function Projects() {
  const imageRef = useRef()
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setVisible(entry.isIntersecting)
      
    })
    //observer.observe(imageRef.current)
  }, [])

    

  return (
    <div className="centerP">
     {
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
     }
    </div>
  )
}

export default Projects


