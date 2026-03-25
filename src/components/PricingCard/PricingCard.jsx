import { CheckCheck } from 'lucide-react';

const PricingCard = ({getData}) => {
  const {type, price, target_audience, features} = getData;
  
  return (
    <div className='flex flex-col rounded-xl px-4 py-3 bg-red-900 min-h-70 h-full '>
      <div className='flex justify-between items-center text-[22px] font-bold'>
        <h1>Name: {type}</h1>
        <h2 className='text-[16px]'>Price: {price}</h2>
      </div>
      <div className='text-[16px] space-y-2 flex flex-col flex-1'>
        <p className='font-semibold'>Perfect For: {target_audience}</p>
        <div className='bg-red-800 p-2 rounded-lg flex-1'>
          {
            features.map((featuresData, idx) => 
              <p key={idx} className='flex items-center gap-1.5'>
                <CheckCheck size={15} color="#07e90b" />  
                {featuresData}
              </p>)
          }
        </div>
        <button className='bg-black py-1.5 rounded-lg font-semibold hover:bg-[#111] cursor-pointer '>Let's Access</button>
      </div>
    </div>
  )
}

export default PricingCard


