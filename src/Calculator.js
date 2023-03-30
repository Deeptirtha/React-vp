import React,{useState} from 'react'
import "./cal.css"

function Calculator() {
    let [val1,setVal1]=useState()
    let [val2,setVal2]=useState()
    let [ans,setans]=useState()


    function plus(){
        setans(parseInt(val1)+parseInt(val2))
    }
    function min(){
        setans(parseInt(val1)-parseInt(val2))
    }
    function div(){
        setans(parseInt(val1)/parseInt(val2))
    }
    function mul(){
        setans(parseInt(val1)*parseInt(val2))
    }




  return (
    <div className='big'>

        <div>{ans}</div>
        <input type="text" placeholder='numbe 1' value={val1} onChange={(e)=>setVal1(e.target.value)} />
        <input type="text" placeholder='numbe 2' value={val2} onChange={(e)=>setVal2(e.target.value)} />

   <div>
            <button onClick={plus}>+</button>
            <button onClick={min}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={div}>%</button>
        </div> 
    </div>
  )
}

export default Calculator
