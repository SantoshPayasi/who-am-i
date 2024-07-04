import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <span className="loading loading-ring loading-xs bg-red-700 "></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
    </div>
  )
}

export default Loader