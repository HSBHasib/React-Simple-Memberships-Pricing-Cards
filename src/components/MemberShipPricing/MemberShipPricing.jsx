import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";


const MemberShipPricing = ({data}) => {
  const pricedata = use(data);
  console.log(pricedata);
  return (
    <div className="px-6 space-y-4">
      <h1 className="text-2xl font-semibold">Get Our MemberShip</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {
          pricedata.map(getData => <PricingCard 
            key={getData.id}
            getData={getData}/>)
        }
       </div>
    </div>
  )
}

export default MemberShipPricing
