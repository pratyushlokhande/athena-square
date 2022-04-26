import React from 'react'
// style
import './style/traction.scss'

// Utils
import Tractions from '../utils/TractionData'

import RightDots from '../assets/svg/RightDots'

// Components
import TractionCard from './TractionCard'

const Traction = () => {
  return (
    <div className='traction'>
        <div className="heading">
            Our <span>Traction</span>
        </div>
        <div className="traction-container">
            {
                Tractions.map(traction => <TractionCard key={traction.id} number={traction.number} context={traction.context} />
                )
            }
        </div>
        <div className="traction-asset-container">
          <RightDots className="traction-right" />
        </div>
    </div>
  )
}

export default Traction