import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import CashOnDelivery from './CashOnDelivery'
import PayOnline from './PayOnline'

function Payable() {
    return (
        <Router>
            <div >
                <nav >
                    <div className='counter'>
                        <Link to='/payable/pay-online' className='links'>Pay Online</Link>
                        <Link to='/payable/cash-on-delivery' className='links'>Cash On Delivery</Link>
                    </div>
                </nav>
                <Route path='/payable/pay-online' component={PayOnline} />
                <Route path='/payable/cash-on-delivery' component={CashOnDelivery} />
            </div>
        </Router >
    )
}

export default Payable