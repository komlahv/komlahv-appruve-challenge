import React from 'react'
import PropTypes from 'prop-types'
import './SuccessCard.css'
import logo from '../../logo.svg';

function SuccessCard(props) {
  const { plan, setPlan } = props;

  return (
    <div className='success'>
      <h2 className='success__head'>Success</h2>
      <p>You have successfully subscribed to the {plan} plan</p>
      <img src={logo} className="card__logo" alt="logo" /><b>{plan}</b>
      <button className='success__button'>Open Dashboard</button>
      <button className='success__button' onClick={() => setPlan()}>Change plan</button>
    </div>
  )
}

SuccessCard.propTypes = {
  plan: PropTypes.string.isRequired,
  setPlan: PropTypes.func.isRequired
}

export default SuccessCard
