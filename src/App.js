
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
//front10 components
import "@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css";

import "./App.css";

import React, { Component } from "react";

import {
  Row,
  Header,
  Container,
  Hero,
  Image,
  Link,
  GithubButton,
  Column,
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavbarNav,
  NavbarLink,
  Icon,
  LanguageSwitcher,
  Features,
  Team,
  BrowserSupport,
  Gif,
  Footer,
  Copyright,
  Social
} from "@front10/landing-page-book/dist/components";

import particles from "./data/particles.json";
import features from "./data/features.json";
import team from "./data/team.json";
import browsers from "./data/browsers.json";

class App extends Component {
  render() {
    return (
      <Container>

        <Row className="mt-5">

          <Column>
          <Navbar expand="lg">
      <Container>
          <NavbarCollapse>
              <NavbarBrand>
                  <Image 
                      width="120"
                      src="logo_twoDevs.png"
                      alt="twoDevs Startup logo"
                  />
              </NavbarBrand>
              <NavbarNav alignItems="right">
                  <NavbarLink>Home</NavbarLink>
                  <NavbarLink>ShowCase</NavbarLink>
                  <NavbarLink>Blog</NavbarLink>
                  <NavbarLink>Contato</NavbarLink>
            
            </NavbarNav>

                  
              
          </NavbarCollapse>
      </Container>
  </Navbar>
                          
          </Column>
        </Row>
        <Row className="mt-5">
          <Column>

              <center><Container>
                
                <Header className="text-warning">Somos uma Startup de duas pessoas apaixonadas por Tecnologia.</Header>
                <Header className="text-warning" type="h5">
                  E Apaixonados por solucionar problemas
                </Header>
                <div className="mt-5">
                  <Link
                    className="btn btn-primary btn-started"
                    href="#"
                    target="_blank"
                  >
                    Nossos Projetos
                  </Link>

                </div>
              </Container></center>

          </Column>
        </Row>
        <Row className="mt-5">
          <Column>
            <Header type="h5">Nossos Recursos</Header>
            <Features
              features={features}
              imageCircle={false}
              showBorder={false}
              showSubtitle={true}
            />
          </Column>
        </Row>
        <Row className="mt-5">
          <Column>
            <center><Header type="h5"> Os Nerds por trás do Terminal</Header></center>
            <Team
              showBorder={false}
              members={team}
              socials={["linkedin", "twitter"]}
            />

          </Column>
        </Row>

        <Row className="mt-5">
          <Column>

            <Footer>
              <Row>
                <Column className="col-sm-12 col-md">
                  <Copyright showAllRightText={false} text="twoDevs" />
                </Column>


              </Row>
            </Footer>
          </Column>
        </Row>

      </Container>
    );
  }
}

export default App;
