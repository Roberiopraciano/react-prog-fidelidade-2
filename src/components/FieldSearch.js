import React from 'react';
import ButtonSearch from '../styles/search';
import Search from '../assets/img/search.svg';

import '../styles/search.css';

const FieldSearch = () => (
  <>
    <form id="search">
      <div className="input-block">
        <input type="number" id="subject" />
        <ButtonSearch><img className="bt-search" src={Search} alt="Close" /></ButtonSearch>
      </div>
    </form>

  </>
);

export default FieldSearch;
