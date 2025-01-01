import React from 'react'

function PricingStep({icon,title=''}) {
    const dummyImage = 'https://i.pinimg.com/1200x/e3/52/0f/e3520f8b3d8ca78ef9c08d777d035cfe.jpg'
    const dummyTitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi aut temporibus dolores repudiandae itaque asperiores assumenda vitae iste rem.'
  return (
      <div className='pricing-item flex flex-col sm:flex-row items-start  gap-4 h-fit my-3'>
          <img src={!icon ? dummyImage : icon} className='h-10 w-10 object-cover object-center mt-2  rounded-full ' alt="" />
          <p className='text-lg text-gray-700'>{!title ? dummyTitle : title}</p>
    </div>
  )
}

export default PricingStep