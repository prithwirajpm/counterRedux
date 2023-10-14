import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    const dispatch  = useDispatch()
    const count = useSelector((state)=>state.counter.count)
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
        <div className='d-flex d-flex justify-content-center align-items-center border rounded p-5 w-25 flex-column'>
            <h1 style={{fontSize:'100px'}}>{count}</h1>
            <div className='d-flex justify-content-between w-100 mt-5'>
                <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
                <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
                <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
            </div>

        </div>
    </div>
  )
}

export default Counter