import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'

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
      <ul>
        <li>
          <Router>
            <Link to="/addEmployee">Add New Employee</Link>
          </Router>
        </li>
      </ul>
      <tbody>
        <table>
          <thead>First Name</thead>
          <thead>Last Name</thead>
          <thead>Birth Date</thead>
          <thead>Hire Date</thead>
          <thead>Full Time?</thead>
          <thead>Profile Image</thead>
          <tr>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
          <tr>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
          <tr>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
          <tr>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
          <tr>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
          <tr>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
          <tr>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
          <tr>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
          v
          <tr>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
        </table>
      </tbody>
    </>
  )
}
