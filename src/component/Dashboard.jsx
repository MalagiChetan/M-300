import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import AsBoth from './AsBoth'
import Buyer from './Buyer'
import Seller from './Seller'


function Dashboard() {
  return (
    <Router>
      <div >
        <nav>
          <div className='counter' >
            <Link to='/dashboard/buyer' className='links'>Buyer</Link>
            <Link to='/dashboard/seller' className='links'>Seller</Link>
            <Link to='/dashboard/as-both' className='links'>As Both</Link>
          </div>
        </nav>
        <Route path='/dashboard/buyer' component={Buyer} />
        <Route path='/dashboard/seller' component={Seller} />
        <Route path='/dashboard/as-both' component={AsBoth} />
      </div >
    </Router>
  )
}

export default Dashboard