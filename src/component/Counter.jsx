import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Payable from './Payable'
import Receivable from './Receivable'
import User from './User'
import '../App.css'

function Counter() {


    return (
        <Router>
            <div >
                <nav >
                    <div className='counter' >
                        <Link to='/dashboard' className='links'>Dashboard</Link>
                        <Link to='/user' className='links'>User</Link>
                        <Link to='/receivable' className='links'>Receivable</Link>
                        <Link to='/payable' className='links'>Payable</Link>
                    </div>
                </nav>
                <Route exact={true} path="/"
                    render={(props) => {
                        console.log(props);
                        return <div>
                            <h1 style={{ justifyContent: 'center', paddingTop: '250px' }}>Hello, Welcome User!!</h1>
                        </div>
                    }} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/user' component={User} />
                <Route path='/receivable' component={Receivable} />
                <Route path='/payable' component={Payable} />
            </div>
        </Router >
    )
}

export default Counter