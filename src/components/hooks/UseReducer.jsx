import React,{useReducer, useRef} from 'react'
import { Button } from 'react-bootstrap'
const initialVlaue={
    count:0,
    name:"Naga",
    email:"naga@gmail.com"
}

function reducer(state,action)
{
    switch(action.type)
    {
        case 'INCREMENT':return {
            ...state,
            count:state.count+1
        }
        case 'DECREMENT':return {
            ...state,
            count:state.count-1
        }
        case 'RESET': return {
            ...state,
            count:0
        }
        case 'UPDATE': return {
            ...state,
            name:action.payload.name,
            email:action.payload.email
        }
    }
}

function UseReducer() {

    let [state,dispatch] = useReducer(reducer,initialVlaue)
    let nameRef = useRef(null)
    let emailRef = useRef(null)
    
  return <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">useReducer Hook</h1>
                    </div>
                    <div>
                        <Button onClick={()=>dispatch({type:'DECREMENT'})}>-</Button>
                        &nbsp;
                        {state.count}
                        &nbsp;
                        <Button onClick={()=>dispatch({type:'INCREMENT'})}>+</Button>
                    </div>
                    <br/>
                    <div>
                        <Button onClick={()=>dispatch({type:'RESET'})}>Reset</Button>
                    </div>
                    <br/>
                    <div>
                        <label>Name:</label>
                        <input type='text' ref={nameRef}/>
                    </div>
                    <br/>
                    <div>
                        <label>Email:</label>
                        <input type='email' ref={emailRef}/>
                    </div>
                    <br/>
                    <div>
                        <Button onClick={()=>{
                            dispatch({type:'UPDATE',payload:{
                                name:nameRef.current.value,
                                email:emailRef.current.value
                            }})
                        }}>Submit</Button>
                    </div>
                    <div>{state.name}</div>
                        
                    <div>
                        {state.email}
                    </div>
                </div>
            </div>
        </div>
}

export default UseReducer