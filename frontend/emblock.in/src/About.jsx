import React from 'react'
import { Grid, Divider, Image, Icon } from 'semantic-ui-react'
import "../src/assets/css/About.css"
import constants from '../constants'

function About() {
  return (
    <div className='centerA paddedA'>
      <Divider inverted horizontal><div className="segmentTitle">About</div></Divider>
      <div className='aboutDescription'>At Emblock, we provide IoT and Blockchain-enabled solutions inculcating core competency and QoS for our clients. Our vision scopes to give a futuristic approach using Web3. We also provide expertise solutions in wireless sensor networks (WSN). Innovation, determination, and continuous development are our key goals to approach a logical solution for our clients. We develop AR and VR-based applications, that suites the needs of our clients. We also strive to develop and constantly upgrade our company products and services thereby contributing to our motherland.</div>
      <Divider inverted horizontal><div className="segmentTitle">Meet Our Team</div></Divider>
      <div style={{paddingTop: "3rem"}}>
        {
          constants.team.map((ele, i) => (
          <Grid textAlign='center' key={i}>
            <Grid.Row>
              <Image src={ele.photo} circular alt="Profile Logo" size='tiny'/>
            </Grid.Row>
            <Grid.Row style={{display: "grid"}} centered>
              <div className='nameA'>{ele.name}</div>
              <div className='roleA'>{ele.role}</div>
              <a href={ele.linkedLink}>
                <Icon name="linkedin" size="large" />
              </a>
            </Grid.Row>
          </Grid>
          ))
        }
      </div>
    </div>
  )
}

export default About