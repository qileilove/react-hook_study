import React, { useState , useEffect,createContext , useContext } from 'react';
const CountContext = createContext()

function Example4(){
    const [ count , setCount ] = useState(0);
    //---关键代码---------start-------
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })
    //---关键代码---------end-------

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>


            <CountContext.Provider value={count}>
            <Counter />

            </CountContext.Provider>
        </div>
    )
}
function Counter(){
    const count = useContext(CountContext)  //一句话就可以得到count
    return (<h2>{count}</h2>)
}
export default Example4;
