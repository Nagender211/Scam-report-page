import React from 'react';
import './Container.css';

import UpperContainer from './UpperContainer.js'

import MiddleContainer from './MiddleContainer.js'

import LowerContainer from './LowerContainer.js'

import RightUpperContainer from './RightUpperContainer.js'

import RightLowerContainer from './RightLowerContainer.js'

const Container = () => (
  <div className="main-body">
    <div className="left-column">
      <UpperContainer />
      <MiddleContainer likes={0}/>
      <LowerContainer />
    </div>
    <div className="right-column">
      <RightUpperContainer />
      <RightLowerContainer />
    </div>
  </div>
);

export default Container;
