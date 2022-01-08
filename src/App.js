import React from 'react'
import './app.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import UserList from './pages/userList/UserList'


export default function App() {
  return (
    <Router>
        <Topbar />
        <div className='container'>
          <Sidebar />
            <Switch>
                <Route path="/" exact>
                      <Home />
                </Route>
                <Route path="/users">
                      <UserList />
                </Route>
            </Switch>
         </div>
    </Router>
  )
}
