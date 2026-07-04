import React, { useState } from 'react'
import AppleBasket from './AppleBasket';

const AppleCounter = () => {

    const totalAppleCount = 10;
    const [leftAppleCount, setLeftAppleCount] = useState(0)
    const [rightAppleCount, setRightAppleCount] = useState([
        totalAppleCount - leftAppleCount
    ])

    const leftCountHandler = () => {
        if (leftAppleCount > 0) {
            setRightAppleCount(rightAppleCount + 1)
            setLeftAppleCount(leftAppleCount - 1)
        }
    }

    const rightCountHandler = () => {
        if (rightAppleCount > 0) {
            setRightAppleCount(rightAppleCount - 1)
            setLeftAppleCount(leftAppleCount + 1)
        }
    }

    return (
        <div className='px-20 py-33  '>

            <div className='flex justify-between items-center w-full bg-yellow-600 p-20 rounded-lg'>
                <AppleBasket appleCount={leftAppleCount} basketName={"Basket-1"} />

                <div className='flex justify-between w-60'>
                    <button onClick={leftCountHandler} className='border rounded-sm px-4 py-1 mt-1.5 hover:bg-green-300 hover:shadow-lg hover:scale-95 duration-150 ease-in-out'>← Left</button>


                    <button onClick={rightCountHandler} className='border rounded-sm px-3 py-1 mt-1.5 hover:bg-green-300 hover:shadow-lg hover:scale-95 duration-150 ease-in-out'>Right → </button>
                </div>

                <AppleBasket appleCount={rightAppleCount} basketName={"Basket-2"} />
            </div>

        </div>
    )
}

export default AppleCounter
