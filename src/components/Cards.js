import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these quick options to start shaping your business!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pexels-pixabay-262353.jpg'
              text='Pick the Best Fulfillment Offers for Your Business'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/pexels-imeenhae-4277794.jpg'
              text='Explore the Regional Warehouses for Your Operations'
              label='Warehouses'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pexels-rodnae-productions-7363102.jpg'
              text='Track Your Shipments and Get Updated on Every Stage'
              label='Shipments'
              path='/services'
            />
            <CardItem
              src='images/pexels-meruyert-gonullu-6161674.jpg'
              text='Explore the Best Manufacturers to Trade in Your Business'
              label='Resources'
              path='/products'
            />
            <CardItem
              src='images/pexels-nataliya-vaitkevich-6120177.jpg'
              text='Go Over Our Metrics On Target Markets and Customers While Building Your Business Strategy'
              label='Market Research'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
