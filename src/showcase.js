
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
// front10 components
import '@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css'

import './App.css'

import React, { Component } from 'react'

import {
  Row,
  Container,
  Image,
  Link,
  Column,
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavbarNav,
  NavbarLink,
  Footer,
  Copyright
} from '@front10/landing-page-book/dist/components'

class showcase extends Component {
  render () {
    return (
      <Container>

        <Row className='mt-8'>

          <Column>
            <Navbar expand='navbar navbar-expand-lg navbar-light' style='background-color: #246B73;'>
              <Container>
                <NavbarCollapse>
                  <NavbarBrand href='/'>
                    <Image
                      width='120'
                      height='30'
                      src='/images/twoDevslogo.png'
                      alt='twoDevs Startup logo'
                    />
                  </NavbarBrand>
                  <NavbarNav alignItems='right'>
                    <NavbarLink href='/'>Home</NavbarLink>
                    <NavbarLink href='showcase'>ShowCase</NavbarLink>
                    <NavbarLink href='blog'>Blog</NavbarLink>
                    <NavbarLink href='contato'>Contato</NavbarLink>
                  </NavbarNav>
                </NavbarCollapse>
              </Container>
            </Navbar>
          </Column>
        </Row>
        <div class='card-deck mt-5'>
          <div class='card'>
            <img class='card-img-top' src='/images/projeto 1.jpg' width='100' height='200' alt='Imagem de capa do card' />
            <div class='card-body'>
              <h5 class='card-title'>Título do card</h5>
              <p class='card-text'>Este é um card mais longo com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior.</p>
              <Link className='btn btn-primary btn-started' href='#' target='_blank'> Visitar projeto</Link>
            </div>
          </div>
          <div class='card'>
            <img class='card-img-top' src='/images/projeto 2.jpg' width='100' height='200' alt='Imagem de capa do card' />
            <div class='card-body'>
              <h5 class='card-title'>Título do card</h5>
              <p class='card-text'>Este é um card mais longo com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior.</p>
              <Link className='btn btn-primary btn-started' href='#' target='_blank'> Visitar projeto</Link>
            </div>
          </div>
          <div class='card'>
            <img class='card-img-top' src='/images/projeto 3.jpg' width='100' height='200' alt='Imagem de capa do card' />
            <div class='card-body'>
              <h5 class='card-title'>Título do card</h5>
              <p class='card-text'>Este é um card mais longo com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior.</p>
              <Link className='btn btn-primary btn-started' href='#' target='_blank'> Visitar projeto</Link>
            </div>
          </div>
          <div class='card'>
            <img class='card-img-top' src='/images/projeto 4.jpg' width='100' height='200' alt='Imagem de capa do card' />
            <div class='card-body'>
              <h5 class='card-title'>Título do card</h5>
              <p class='card-text'>Este é um card mais longo com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior.</p>
              <Link className='btn btn-primary btn-started' href='#' target='_blank'> Visitar projeto</Link>
            </div>
          </div>

        </div>

        <Footer>
          <Row>
            <Column className='col-sm-12 col-md'>
              <Copyright showAllRightText={false} text='Startup twoDevs' />
              <a href='https://www.instagram.com/twodevsstartup/'><img
                alt='Instagram twoDevs Startup'
                src='/images/instagram.png' width='30' height='30' />
              </a>

              <a href='https://www.facebook.com/twodevsstartup/'><img
                alt='Facebook twoDevs Startup'
                src='/images/facebook.png' width='30' height='30'/>
              </a>

              <a href='https://www.twitter.com/twodevsstartup/'><img
                alt='Twitter twoDevs Startup'
                src='/images/twitter.png' width='30' height='30' />
              </a>

            </Column>

          </Row>
        </Footer>

      </Container>
    )
  }
}

export default showcase
