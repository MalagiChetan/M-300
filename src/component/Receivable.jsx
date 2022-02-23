import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import HardwareReceivables from './HardwareReceivables'
import SoftwareReceivable from './SoftwareReceivable'

function Receivable() {
    return (
        <Router>
            <div>
                <nav>
                    <div className='counter'>
                        <Link to='/receivable/hardware-receivables' className='links'>Hardware Receivables</Link>
                        <Link to='/receivable/software-receivables' className='links'>Software Receivables</Link>
                    </div>
                </nav>
                <Route path='/receivable/hardware-receivables' component={HardwareReceivables} />
                <Route path='/receivable/software-receivables' component={SoftwareReceivable} />
            </div>
        </Router>
    )
}

export default Receivable