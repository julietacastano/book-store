import { useState, useEffect } from "react";

export const useAsync = (funcionAsync, dependencies =[]) =>{
    const [data,setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    useEffect(() =>{
        setLoading(true);
        
        funcionAsync()
            .then(data=>{
                setData(data)
            }).catch((error)=>{
                setError(error)
            }).finally(()=>{
                setLoading(false)
            })

        },dependencies)//eslint-disable-line

    return{
        data,
        loading,
        error}

}
