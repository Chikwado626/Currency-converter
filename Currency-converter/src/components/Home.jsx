import React from 'react'
import CurrencySelector from './CurrencySelector'

const Home = () => {
  return (
    <div className='flex flex-col items-center max-w-2xl mx-auto mt-5'>
        <div className='flex justify-between w-full'>
        <CurrencySelector />
        <CurrencySelector />
        </div>
    </div>
  )
}

export default Home