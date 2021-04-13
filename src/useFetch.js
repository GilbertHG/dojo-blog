import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState();
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err=>{
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000); // Dont implement setTimeout on live
    }, []); // Just run first init
    
    return {data,isPending,error}
} // Custom hook need word 'hook', otherwise it won't work

export default useFetch;