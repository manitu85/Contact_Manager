import React, { Component } from 'react'
import { Provider } from './context';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContactControlled';


import 'bootstrap/scss/bootstrap.scss'
import './styles/App.scss'


export class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App" >
          <Header brand="CONTACT MANAGER"/>
          <div className='container'>
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
