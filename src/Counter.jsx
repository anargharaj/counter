import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset, addValue } from './redux/countSlice'


function Counter() {
 const [val,setVal]=useState(0)
  const {count}=useSelector((state)=>state.counterReducer)
  console.log(count)
  const dispatch=useDispatch()
  return (
    <div className='w-75 p-3 border shadow border-light'>
        <h3 className='text-center text-danger mb-2'>counter</h3>
        <h4 className='text-light text-center'>{count}</h4>
        <div className='p-3 my-2 d-flex justify-content-around'>
            <button className='btn btn-success' onClick={()=>{dispatch(increment())}}>+ increase</button>
            <button className='btn btn-info'  onClick={()=>{dispatch(reset())}}>RESET</button>
            <button className='btn btn-danger'  onClick={()=>{dispatch(decrement())}}>- increase</button>


        </div>
        <div className='mt-3 d-flex'>
          <input type="number" className='form-control '  onChange={(e)=>{setVal (Number(e.target.value))}}/>
          <button className='btn btn-info w-25' onClick={()=>dispatch(addValue(val))}>submit</button>
        </div>


    </div>
  )
}

export default Counter