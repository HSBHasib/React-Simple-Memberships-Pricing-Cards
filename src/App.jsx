import Navber from './components/Navber/Navber'
import MemberShipPricing from './components/MemberShipPricing/MemberShipPricing'
import { Suspense } from 'react';

const fetchPricingData = async () => {
  const res = await fetch('pricingData.json');
  const data = await res.json();
  return data;
}

const App = () => {
  const data = fetchPricingData();
  
  return (
    <div>
      <Navber/>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <MemberShipPricing data={data} />
      </Suspense>
    </div>
  )
}

export default App
