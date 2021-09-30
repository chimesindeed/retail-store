
// This Component wraps index.js
// to keep context logic separate from presentational flow.
import React, {useState} from 'react'
import * as Banners from './contextObjects'

export const TextboxBannersContextContainer = (props) => {
  const [storeNumber, setStoreNumber] = useState('Number');
  const [storeAddress, setStoreAddress] = useState('Address');
  const [storePhone, setStorePhone] = useState('Phone');
  const [storeHours, setStoreHours] = useState('Hours');

    return (
      <Banners.StoreNumberBannerContext.Provider value={[storeNumber, setStoreNumber]}>
      <Banners.StoreAddressBannerContext.Provider value={[storeAddress, setStoreAddress]}>
      <Banners.StorePhoneBannerContext.Provider value={[storePhone, setStorePhone]}>
      <Banners.StoreHoursBannerContext.Provider value={[storeHours, setStoreHours]}>
        {props.children}
      </Banners.StoreHoursBannerContext.Provider>
      </Banners.StorePhoneBannerContext.Provider>
      </Banners.StoreAddressBannerContext.Provider>
      </Banners.StoreNumberBannerContext.Provider>
    )
}