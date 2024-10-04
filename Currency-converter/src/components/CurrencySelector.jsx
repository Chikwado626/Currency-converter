import axios from 'axios'
import React, {useEffect, useState} from 'react'


const CurrencySelector = () => {

    const [moneyCurrency, setMoneyCurrency] = useState({});

    useEffect( () => {

        const fetchData = async () => {

        
        const result = await axios.get("https://v6.exchangerate-api.com/v6/88a8c9d2e5170f5c4b208ed2/latest/USD");
        console.log(result)
        setMoneyCurrency(result.data?.conversion_rates)
    }

    fetchData();
    }, [])

    console.log(Object.keys(moneyCurrency))

  return (
   
      <select name="" id="">
        {(Object.keys(moneyCurrency)).map((data, i) => (
 <option key={i} value={data}>{data}</option>
))}
       
      </select>
  
  )
}

export default CurrencySelector