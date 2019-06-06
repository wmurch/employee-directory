import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL =
  'https://sdg-staff-directory-app.herokuapp.com/api/murktech/employees'

export default function EmployeeList() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    axios.get({ API_URL }).then(resp => {
      setEmployees(resp.data)
      console.log({ resp })
    })
  })
  return (
    <>
      <h1>MurkTech Employees</h1>
      <ul>
        <li>test data</li>
      </ul>
    </>
  )
}
