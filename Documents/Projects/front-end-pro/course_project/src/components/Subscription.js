import Social from './Social'
import React from 'react'

function Subscription() {
  return (
    <div className="subscription">
      <span className="subscription_description">
        Sign up today for email exclusives including early access to Sale, the
        latest trends and arrivals from your favorite designers and can’t miss
        promotions.
      </span>
      <form className="subscription-form" action="submit">
        <input
          type="email"
          placeholder="Enter your Email"
          className="subscription-form_input"
        />
        <button type="submit" className="button button__dark">
          Subscribe
        </button>
      </form>
      <Social></Social>
    </div>
  )
}

export default Subscription
