import React from "react";
import "./assets/css/footer.css";
import _ from "lodash";
import { Divider, Grid, Icon, List } from "semantic-ui-react";

function Footer() {
  const socialIcons = [
    "linkedin",
    "facebook square",
    "discord",
    "instagram",
    "youtube",
  ];

  return (
    <footer className="footerPos">
      <Divider inverted horizontal style={{ marginTop: "3rem" }}>
        <div className="footerTitle">Emblock</div>
      </Divider>
      {/* <p className="footerMessage">
        We deliver hight quality product effectively with your preferred time
      </p> */}
      <Grid divided columns={3} className="reply">
        <div className="footerMessage">
          <List>
            <h4>Contact</h4>
            <List.Item
              content={
                <p>
                  <Icon name="marker" />
                  Chennai,IN
                </p>
              }
            />
            <List.Item
              content={
                <a href="mailto:contact@emblock.in">
                  <Icon name="mail" />
                  contact@emblock.in
                </a>
              }
            />
            <List.Item
              content={
                <p>
                  <Icon name="phone" />
                  80567 01528
                </p>
              }
            />
          </List>
        </div>
        <div className="footerMessage marginFooter">
          <List>
            <h4>Services</h4>
            <List.Item content={"IOT Blockchain Integration"} />
            <List.Item content={"Development of Dapp"} />
            <List.Item
              content={
                
                  "VLSI Design"
              }
            />
            <List.Item
              content={
                
                "Seamless Integration of Embedded products"
                
              }
            />
          </List>
        </div>
        {/* <div className="footerMessage">
          <List>
            <h4>About</h4>
            <List.Item content={<a>Who&nbsp;are&nbsp;we?</a>} />
            <List.Item content={<a>Meet&nbsp;our&nbsp;team</a>} />
            <List.Item content={<a>Our&nbsp;future&nbsp;products</a>} />
          </List>
        </div> */}
        <Grid.Row centered columns={5}>
          <a href="https://www.linkedin.com/company/emblock-tech/">
            <Icon name="linkedin" size="large" />
          </a>
          {/* <a>
            <Icon name="facebook" size="large" />
          </a>
          <a>
            <Icon name="discord" size="large" />
          </a> */}
          <a href="https://instagram.com/emblock_tech?igshid=MzRlODBiNWFlZA==">
            <Icon name="instagram" size="large" />
          </a>
          {/* <a>
            <Icon name="youtube" size="large" />
          </a> */}
        </Grid.Row>
      </Grid>
      <p className="footerMessageCopy">
        Copyrights @ 2023 Emblock All Rights Reserved&nbsp;&nbsp;
      </p>
    </footer>
  );
}

export default Footer;
