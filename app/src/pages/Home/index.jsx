import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Accomodations from '../../components/Accomodations';
import Benefits from '../../components/Benefits';

import './home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Accomodations />
      <Benefits />
    </div>
  );
}

export default Home;
