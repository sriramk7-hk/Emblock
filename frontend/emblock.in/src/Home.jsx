import { React, useRef, useEffect, useState } from "react";
import { Image, Grid, Header, Divider } from "semantic-ui-react";
import "./assets/css/Home.css";
import iotboard from "./assets/images/iotboard.png";
import connected from "./assets/images/Connected.png";

function Home() {
  const textRef = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(textRef.current);
  }, []);

  return (
    <div className="imageCenter">
      <Grid>
        <Grid.Row style={{ position: "relative" }} centered>
          <Image
            src={iotboard}
            className="imageStyle"
          />
          <Header color="grey" as="h4" className="textSlide">
            Objective:
            <p
              style={{ fontWeight: "300", fontSize: "14px", paddingTop: "2px" }}
            >
              Our objective is to seamlessly integrate artificial intelligence
              (AI) Internet Of Things (IOT) and web3 technologies to make a
              better future.
            </p>
          </Header>
        </Grid.Row>
        <Divider inverted horizontal>
          <div className="segmentTitle">Innovation</div>
        </Divider>
        <Grid.Row style={{ position: "relative" }}>
          <Image
            centered
            src={connected}
            className={"imageStyle1"}
          />
          <div ref={textRef}></div>
          <Header color="grey" as="h4" className={visible ? "textSlide1" : ""}>
            Objective:
            <p
              style={{ fontWeight: "300", fontSize: "14px", paddingTop: "2px" }}
            >
              Our objective is to seamlessly integrate artificial intelligence
              (AI) Internet Of Things (IOT) and web3 technologies to make a
              better future.
            </p>
          </Header>
          {/* <Header color="grey" as="h4" className={visible ? "textSlide2" : ""}>
            Objective:
            <p
              style={{ fontWeight: "300", fontSize: "14px", paddingTop: "2px" }}
            >
              Our objective is to seamlessly integrate artificial intelligence
              (AI) Internet Of Things (IOT) and web3 technologies to make a
              better future.
            </p>
          </Header> */}
        </Grid.Row>
        <Divider inverted horizontal>
          <div className="segmentTitle">Projects</div>
        </Divider>
        <Grid.Row centered>
          <p className="homeDescription">
            As a startup, our primary goal is to disrupt the market and provide
            innovative solutions to meet the needs of our target customers. We
            understand that we are operating in a dynamic and competitive
            environment, which requires us to be agile, adaptable, and
            customer-centric.Our projects revolve around building a strong
            foundation for our business. We begin by developing a minimum viable
            product (MVP) that showcases the core features and value proposition
            of our offering. This allows us to quickly validate our ideas,
            gather user feedback, and make necessary iterations. Overall, as a
            startup, we embrace the challenges and uncertainties that come with
            entrepreneurship. We strive to be innovative, customer-focused, and
            adaptable, leveraging projects across various domains to build a
            successful and sustainable business.{" "}
            <a style={{ color: "beige", fontWeight: "600" }} href="/#/projects">
              Check out our projects
            </a>
          </p>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Home;
