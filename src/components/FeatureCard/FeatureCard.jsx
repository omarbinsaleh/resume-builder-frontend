import React from 'react'

const FeatureCard = ({title="Default title", description='Default description'}) => {
  return (
    <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
      <h2 className='text-lg font-semibold mb-3'>
         {title}
      </h2>
      
      <p className='text-gray-600'>
         {description}
      </p>
    </div>
  )
}

export default FeatureCard
