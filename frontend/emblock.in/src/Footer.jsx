import React from 'react'
import "./assets/css/footer.css"
import { Divider, Grid, Icon, List } from "semantic-ui-react"

function Footer() {
  return (
    <footer className="footerPos">
        <Divider inverted horizontal style={{marginTop: "3rem"}}><div class="footerTitle">Emblock</div></Divider>
        <p className='footerMessage'>We deliver hight quality product effectively with your preferred time</p>
        <Grid divided columns={3}>
            <Grid.Column className='footerMessage'>
                <h4>Contact</h4>
                <List>
                    <List.Item content={<p><Icon name="marker"/>Chennai,IN</p>}/>
                    <List.Item content={<a><Icon name="mail"/>contact@emblock.in</a>}/>
                    <List.Item content={<p><Icon name="phone"/>1234567890</p>}/>
                </List>
            </Grid.Column>
            <Grid.Column className='footerMessage'>
                <h4>Services</h4>
                <List>
                    <List.Item content={<a>IOT&nbsp;Blockchain&nbsp;Integration</a>}/>
                    <List.Item content={<a>Development&nbsp;of&nbsp;Dapp</a>}/>
                    <List.Item content={<a>Development&nbsp;of&nbsp;websites&nbsp;in&nbsp;web2&nbsp;and&nbsp;web3</a>}/>
                    <List.Item content={<a>Seamless&nbsp;Integration&nbsp;of&nbsp;Embedded&nbsp;products</a>}/>
                </List>
            </Grid.Column>
            <Grid.Column className='footerMessage'>
                <h4>About</h4>
                <List>
                    <List.Item content={<a>Who&nbsp;are&nbsp;we?</a>}/>
                    <List.Item content={<a>Meet&nbsp;our&nbsp;team</a>}/>
                    <List.Item content={<a>Our&nbsp;future&nbsp;products</a>}/>
                </List>
            </Grid.Column>
        </Grid>
        <p className='footerMessageCopy'>Copyrights @ 2023 Emblock All Rights Reserved&nbsp;&nbsp;</p>
    </footer>
  )
}

export default Footer