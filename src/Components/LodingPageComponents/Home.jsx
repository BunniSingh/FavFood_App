import React from 'react'
import Hero from './Hero';
import RestaurantBranch from './RestaurantBranch';
import CustmerReview from './CustmerReviewCard';
const Home = () => {
  return (
    <div>
        <Hero/>
        <RestaurantBranch/>
        <CustmerReview/>
    </div>
  )
}

export default Home