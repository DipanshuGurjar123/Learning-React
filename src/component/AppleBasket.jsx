import React from 'react'

const AppleBasket = ({appleCount, basketName}) => {
  return (
    <div className='bg-purple-300 p-10 rounded-lg'>
      <h1>
        <span>{appleCount}</span> apples
      </h1><br />
      <p>{basketName} {appleCount === 10 && "(Full)"} {appleCount === 0 && "(Empty)"}</p>
    </div>
  )
}

export default AppleBasket


