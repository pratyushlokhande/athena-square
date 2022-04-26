import React from 'react'

const TractionCard = (props) => {
  return (
    <div className='traction-card'>
        <div className="number">
            {props.number}
        </div>
        <div className="context">
            {props.context}
        </div>
    </div>
  )
}

export default TractionCard