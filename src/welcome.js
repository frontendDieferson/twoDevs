
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


class welcome extends Component {
  render() {
    return (
        
           
        <div class="welcome">
          <div>
            <header class="border"></header>
          </div>
         <div class="box">
        <container class="text-center">
        <Header><img src="/images/welcome.png" width="200" height="250" alt="twoDevs Startup logo"></img>
        <h1>twoDevs Startup</h1>
        <h5>Somos uma Startup de duas pessoas apaixonadas por Tecnologia.</h5>
        <h5>E Apaixonados por solucionar problemas.</h5>

        
        
        <p>Acompanhe as novidades da Startup twoDevs no Instagram.</p>
        <a href="https://www.instagram.com/twodevsstartup/">
         <img alt="Qries" src="/images/instagram.png"
         width="30" height="30"></img>
      </a>
        
                  
                  
                  <p>&copy; 2020</p>
        </Header>
        
      </container>
    </div>

      
  </div>
    );
  }
}

export default welcome;
