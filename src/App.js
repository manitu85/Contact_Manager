import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Provider } from './context'
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContactControlled'
import About from './components/pages/About'


import 'bootstrap/scss/bootstrap.scss'
import './styles/App.scss'
import NotFound404 from './components/pages/NotFound404';


export class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App" >
            <Header brand="CONTACT MANAGER"/>
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound404} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
