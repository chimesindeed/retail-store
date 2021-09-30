import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [prices, setPrices] = useState('loading...');

    const fetchPrices= async(url)=>{
        const raw = await fetch(url);
        const obj = await raw.toJson();
        setPrices(obj)
    }
    
    useEffect(()=>{
        fetchPrices(url);
    },[url])

    return {prices}

}
