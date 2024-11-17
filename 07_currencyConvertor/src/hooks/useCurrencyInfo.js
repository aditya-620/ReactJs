import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})  //here {} are used beacuse, if fetch didn't work then the website will not crash as we can run the loop on the object
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;