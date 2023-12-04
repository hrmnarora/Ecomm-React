import React,{useEffect,useState} from 'react';
import apiClints from '../utils/api-clints';

const useData = (endpoint, customConfig, deps) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(false)
  
    useEffect(() => {
        setIsLoading(true)
      apiClints
        .get(endpoint,customConfig) 
        .then((res) => {
            if(endpoint === "/products" && data && data.products && customConfig.params.page !==1){
                setData(prev =>({
                    ...prev, products: [...prev.products, ...res.data.products]
                }))
            }else{
            setData(res.data)
            setIsLoading(false)
            }
        })
        .catch((err) => {
            setError(err.message)
            setIsLoading(false)
        });
    },deps);

    return {data, error, isLoading};
}

export default useData