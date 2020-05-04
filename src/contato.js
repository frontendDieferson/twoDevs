
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
  Column,
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavbarNav,
  NavbarLink,
  Footer,
  Copyright
} from '@front10/landing-page-book/dist/components'

class contato extends Component {
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
        <form>
          <div className='form-row mt-5'>
            <div className='form-group col-md-6'>
              <label for='inputEmail4'>Email</label>
              <input type='email' class='form-control' id='inputEmail4' placeholder='Email' />
            </div>
            <div className='form-group col-md-6'>
              <label for='inputPassword4'>Nome Completo</label>
              <input type='text' class='form-control' id='inputPassword4' placeholder='Nome Completo' />
            </div>
          </div>
          <div className='form-group'>
            <label for='inputAddress'>Endereço</label>
            <input type='text' class='form-control' id='inputAddress' placeholder='Rua ou Avenida, nº 0' />
          </div>

          <div classname='form-row'>
            <div class='form-group col-md-6'>
              <label for='inputCity'>Cidade</label>
              <input type='text' class='form-control' id='inputCity' />
            </div>
            <div className='form-group col-md-4'>
              <label for='inputEstado'>Estado</label>
              <select id='inputEstado' class='form-control'>
                <option selected>Escolher...</option>
                <option>...</option>
              </select>
            </div>
            <div classname='form-group col-md-2'>
              <label for='inputCEP'>CEP</label>
              <input type='text' class='form-control' id='inputCEP' />
            </div>
          </div>
          <div className='form-group'>
            <label for='exampleFormControlTextarea1'>Sua Mensagem:</label>
            <textarea class='form-control' id='exampleFormControlTextarea1' rows='3' />
          </div>
          <center>
            <div className='form-group'>
              <div class='form-check'>
                <input class='form-check-input' type='checkbox' id='gridCheck' />
                <label class='form-check-label' for='gridCheck'>
       Aceito os termos de privacidade
                </label>
              </div>
            </div>
          </center>
          <center><button type='submit' class='btn btn-primary'>Enviar</button></center>
        </form>
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
                src='/images/facebook.png' width='30' height='30' />
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

export default contato
