
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
// front10 components
import '@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css'

import './App.css'

import React, { Component } from 'react'

import {
  Header
} from '@front10/landing-page-book/dist/components'

class welcome extends Component {
  render () {
    return (

      <div className='welcome'>
        <div>
          <header className='border' />
        </div>
        <div className='box'>
          <container className='text-center'>
            <Header><img src='/images/welcome.png' width='200' height='250' alt='twoDevs Startup logo' />
              <h1>twoDevs Startup</h1>
              <h5>Somos uma Startup de duas pessoas apaixonadas por Tecnologia.</h5>
              <h5>E Apaixonados por solucionar problemas.</h5>

              <p>Acompanhe as novidades da Startup twoDevs no Instagram.</p>
              <a href='https://www.instagram.com/twodevsstartup/' target='_blank'>
                <img
                  alt='Instagram twoDevs Startup' src='/images/instagram.png'
                  width='30' height='30'
                />
              </a>

              <p>&copy; 2020</p>
            </Header>

          </container>
        </div>

      </div>
    )
  }
}

export default welcome
