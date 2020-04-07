
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


class blog extends Component {
  render() {
    return (
      <Container>

        <Row className="mt-8">

          <Column>
          <Navbar expand="navbar navbar-expand-lg navbar-light" style="background-color: #246B73;">
      <Container>
          <NavbarCollapse>
              <NavbarBrand href="/">
                  <Image 
                      width="120"
                      height="30"
                      src="/images/twoDevslogo.png"
                      alt="twoDevs Startup logo"
                  />
              </NavbarBrand>
              
              <NavbarNav alignItems="right">
                  <NavbarLink href="/">Home</NavbarLink>
                  <NavbarLink href="showcase">ShowCase</NavbarLink>
                  <NavbarLink href="blog">Blog</NavbarLink>
                  <NavbarLink href="contato">Contato</NavbarLink>
            
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
        

            <Footer>
              <Row>
                <Column className="col-sm-12 col-md">
                <Copyright showAllRightText={false} text="Startup twoDevs" />
                  <a href="https://www.instagram.com/twodevsstartup/"><img alt="Instagram twoDevs Startup" 
                  src="/images/instagram.png" width="30" height="30"></img></a>
                  
                  <a href="https://www.facebook.com/twodevsstartup/"><img alt="Facebook twoDevs Startup" 
                  src="/images/facebook.png" width="30" height="30"></img></a>
                  
                  <a href="https://www.twitter.com/twodevsstartup/"><img alt="Twitter twoDevs Startup" 
                  src="/images/twitter.png" width="30" height="30"></img></a>
                  
                </Column>


              </Row>
            </Footer>
        
       

      </Container>
    );
  }
}

export default blog;
