import React,{useState,useEffect,useRef} from 'react'

function UseRef() {
    let [name,setName] = useState(0)
    let count = useRef(0)
    let ref1 = useRef(null)
    let ref2 = useRef(null)
    let ref3 = useRef(null)
    let ref4 = useRef(null)

   const handleSubmit = ()=>{
        let otp = `${ref1.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`
        if(otp.length===4)
        {
            alert("Entered OTP is "+otp)

            ref1.current.value=""
            ref2.current.value=""
            ref3.current.value=""
            ref4.current.value=""
            ref1.current.focus()
        }
        else
        {
            alert("Invalid OTP")
            ref1.current.value=""
            ref2.current.value=""
            ref3.current.value=""
            ref4.current.value=""
            ref1.current.focus()
        }
    }

    useEffect(()=>{
        // setCount(count+1) //this cause infinite loop for useeffect
        count.current+=1
    })
  return <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">useRef Hook</h1>
                    </div>

                    <div>
                        <label>Select your Mentor</label>
                        <select defaultValue={"default"} onChange={(e)=>setName(e.target.value)}>
                            <option value={"default"} disabled>Select Mentor</option>
                            <option value={"Nagarajan"}>Nagarajan</option>
                            <option value={"Priya"}>Akalya</option>
                            <option value={"Rupan"}>Rupan</option>
                            <option value={"Mahathi"}>Mahathi</option>
                            <option value={"Venkat"}>Venkat</option>
                        </select>
                    </div>
                    <div>
                        The selected mentor is {name}
                    </div>
                    <div>
                        Number of times component renders : {count.current}
                    </div>
                    <div>
                        Enter your OTP:
                    </div>
                    <div>
                        <input type='text' ref={ref1} onChange={()=>ref2.current.focus()}/>
                        <input type='text' ref={ref2} onChange={()=>ref3.current.focus()}/>
                        <input type='text' ref={ref3} onChange={()=>ref4.current.focus()}/>
                        <input type='text' ref={ref4} onChange={()=>
                        setTimeout(()=>{
                            handleSubmit()
                        },500)}/>
                    </div>
                </div>
            </div>
        </div>
}

export default UseRef