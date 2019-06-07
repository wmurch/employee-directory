import React, { useState, useEffect } from 'react'
//import Axios from 'axios'

const API_URL =
  'https://sdg-staff-directory-app.herokuapp.com/api/murktech/employees'

export default function EmployeeInput() {
  //const submitEmployee = () => {}

  return (
    <>
      <h1>Test Info</h1>
      <form onSubmit={this.submitEmployee}>
        <label>First Name</label>
        <input id="fName" name="First Name" type="text" />
        <label>Last Name</label>
        <input id="LName" name="Last Name" type="text" />
        <label>Submit</label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
