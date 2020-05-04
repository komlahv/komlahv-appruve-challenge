import React from 'react'
import PropTypes from 'prop-types'
import './PriceCard.css'
import logo from '../../logo.svg';

function PriceCard(props) {
  const { plan, price, features, setPlan } = props;

  return (
    <div className='card'>
      <div className='card__head'>
        <img src={logo} className="card__logo" alt="logo" /><b>{plan}</b>
        <p>GHC <span className="card__amount">{price}</span>/month</p>
      </div>
      <hr />
      <ul className="card__features">
        {
          features.map(feature => <li>{feature}</li>)
        }
      </ul>
      <button className='card__button' onClick={() => setPlan()}>Subscribe</button>
    </div>
  )
}

PriceCard.propTypes = {
  plan: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.array.isRequired,
  setPlan: PropTypes.func.isRequired,
}

export default PriceCard
