import React, { useState ,useEffect ,useCallback } from 'react';
function Example10(){
   
    const size = useWinSize()
    return (
        <div>页面Size:{size.width}x{size.height}</div>
    )
}
function useWinSize(){
    const [ size , setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })

    const onResize = useCallback(()=>{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[]) 
    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])

    return size;

}

export default Example10