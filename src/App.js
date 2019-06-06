import React, { Component } from 'react'
import Employee from './pages/Employee'
import Home from './pages/Home'
import Input from './pages/Input'

class App extends Component {
  render() {
    return (
      <>
        <Employee />
        <Home />
        <Input />
      </>
    )
  }
}

export default App
