import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import NewUser from './NewUser'
import OldUser from './OldUser'

function User() {
    return (
        <Router>
            <div>
                <nav>
                    <div className='counter'>
                        <Link to='/user/new-user' className='links'>New User</Link>
                        <Link to='/user/old-user' className='links'>Old App User</Link>
                    </div>
                </nav>
                <Route path='/user/new-user' component={NewUser} />
                <Route path='/user/old-user' component={OldUser} />
            </div>
        </Router>
    )
}

export default User