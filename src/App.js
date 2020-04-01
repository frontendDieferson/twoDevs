
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

        <Row className="mt-8">

          <Column>
          <Navbar expand="navbar navbar-expand-lg navbar-light" style="background-color: #246B73;">
      <Container>
          <NavbarCollapse>
              <NavbarBrand>
                  <Image 
                      width="120"
                      height="30"
                      src="/images/twoDevslogo.png"
                      alt="twoDevs Startup logo"
                  />
              </NavbarBrand>
              
              <NavbarNav alignItems="right">
                  <NavbarLink>Home</NavbarLink>
                  <NavbarLink>ShowCase</NavbarLink>
                  <NavbarLink>Blog</NavbarLink>
                  <NavbarLink>Contato</NavbarLink>
            
            </NavbarNav>
            <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
    </form>
                  
              
          </NavbarCollapse>
      </Container>
  </Navbar>
                          
          </Column>
        </Row>
        <Row className="mt-5">
          <Column>

              <Container>
                
                <Header className="text-warning">Somos uma Startup de duas pessoas apaixonadas por Tecnologia.</Header>
                <Header className="text-warning" type="h5">E Apaixonados por solucionar problemas.
                  <div className="mt-5">
                  <Link className="btn btn-primary btn-started" href="#" target="_blank"> Nossos Projetos</Link>
                </div>
                
                </Header>
                
              
                  
                
                
              </Container>
              <container>
                <Header className="dev">
                  <Image 
                      width=""
                      height=""
                      src="/images/dev.png"
                      alt="twoDevs startup logo"
                  />
                  </Header>
                </container>

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
              socials={["facebook", "twitter"]}
            />

          </Column>
        </Row>

        <Row className="mt-5">
          <Column>

            <Footer>
              <Row>
                <Column className="col-sm-12 col-md">
                  <Copyright showAllRightText={false} text="Startup twoDevs" />
                  <Image href="#" target="_blank" src="/images/instagram.png" width="30" height="30"  alt="twoDevs startup Instagram" />
                  <Image href="#" target="_blank" src="/images/facebook.png" width="30" height="30"  alt="twoDevs startup Facebook" />
                  <Image href="#" target="_blank" src="/images/twitter.png" width="30" height="30"  alt="twoDevs startup Twitter" />
                  
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
