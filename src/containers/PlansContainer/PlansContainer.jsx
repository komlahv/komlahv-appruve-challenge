import React, { Fragment, useState } from 'react'
import './PlansContainer.css';

import PriceCard from '../../components/PriceCard/PriceCard';
import SuccessCard from '../../components/SuccessCard/SuccessCard';

function PlansContainer() {

  const [plan, setPlan] = useState(null);

  return (
    <Fragment>
      {plan === null ? (
        <div className="plans">
          <h1 className='plans__title'>Plans Tailored Just For You</h1>
          <div className='plans__block'>
            <PriceCard setPlan={() => setPlan('Gold')} plan='Gold' price={299} features={['ID verification', 'Background Check', 'Address Verification']} />
            <PriceCard setPlan={() => setPlan('Silver')} plan='Silver' price={150} features={['ID verification', 'Background Check']} />
            <PriceCard setPlan={() => setPlan('Bronze')} plan='Bronze' price={90} features={['ID verification']} />
          </div>
        </div>
      )
        :
        (<SuccessCard plan={plan} setPlan={() => setPlan(null)} />)}
    </Fragment>
  )
}

export default PlansContainer
