import {React, useRef, useEffect, useState} from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'
import "./assets/css/Projects.css"

function Projects() {
  const textRef = useRef()
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      console.log(entry)
      setVisible(entry.isIntersecting)
      
    })
    observer.observe(textRef.current)
  }, [])

  return (
    <div className="centerP">
     <Divider inverted horizontal><div className="segmentTitle">IOT-BLOCKCHAIN INTEGRATION</div></Divider>
      <Grid textAlign='center'>
        <Grid.Row style={{position: "relative"}}>
          <Image src="./src/assets/images/projectbackground.png" className='imageStyleP'/>
          <div ref={textRef} className='projectDescriptionSec'>
            <h4>Abstract</h4>
            <div className='projectDescription'>
              <span>Need to be written</span>
            </div>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Projects