import React from 'react'
import loader from '../public/loader.gif'

const Loader = () => {
  return (
    <div>
        <Image className='w-[200px] m-auto block' src={loader} alt='loading..' />
    </div>
  )
}

export default Loader