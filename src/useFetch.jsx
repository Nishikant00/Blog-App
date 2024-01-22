import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
    
    useEffect(()=>{  


        fetch(url)
        .then(res=>{
        if(!res.ok){
            throw Error("Data could not be fetched!!!!");
        }
            return res.json();
        })
        .then(data=>{
            setIsPending(false)
            setData(data)
            setError(null);

        })
        .catch((e)=>{
            
            console.log(e)
            setIsPending(false)
            setError(e.message)

        }) 

    },[])
    return {data, isPending, error}
}
 
export default useFetch;