import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EmployeeList from '../components/EmployeeList'
import EmployeeInput from '../components/EmployeeInput'

export default function Home() {
  return (
    <body>
      <header>
        <h1>MurkTech Employees</h1>
      </header>
      <main>
        <div>
          <Router>
            <Switch>
              <Route exact path="/addEmployee" component={EmployeeInput} />
            </Switch>
          </Router>
        </div>
        <div>
          <EmployeeList />
        </div>
      </main>
    </body>
  )
}
