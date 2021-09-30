import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TextboxBannersContextContainer} from './discounts-module/z-context-containers/TextboxBannersContextContainer'
import {PricesContextContainer} from './discounts-module/z-context-containers/PricesContextContainer'
import {FetchDataContainer} from './discounts-module/z-fetch-data-container/FetchDataContainer'
import {App} from './app-entry/App';

ReactDOM.render(
  <TextboxBannersContextContainer>
    <PricesContextContainer>
        <FetchDataContainer>
        <App/>
        </FetchDataContainer>
    </PricesContextContainer>
  </TextboxBannersContextContainer>,
  document.getElementById('root')
);
