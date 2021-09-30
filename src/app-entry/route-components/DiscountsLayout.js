import React, {useContext} from 'react'
import {StoreNumberBanner} from '../../discounts-module/a-topside-header-boxes/StoreNumberBanner'
import {StoreAddressBanner} from '../../discounts-module/a-topside-header-boxes/StoreAddressBanner'
import {StorePhoneBanner} from '../../discounts-module/a-topside-header-boxes/StorePhoneBanner'
import {StoreHoursBanner} from '../../discounts-module/a-topside-header-boxes/StoreHoursBanner'
import {DiscountsTitleBanner} from '../../discounts-module/a-topside-header-boxes/DiscountsTitleBanner'
import {TicketCycleContainer} from '../../discounts-module/b-center-discount-boxes/ticket-cycle-box/TicketCycleContainer'
import {ItemizedDiscountsDisplay} from '../../discounts-module/b-center-discount-boxes/media-box/ItemizedDiscountsDisplay'
import {ExchangePolicy} from '../../discounts-module/c-rightside-header-boxes/ExchangePolicy'
import {StoreNumberBannerContext, StoreAddressBannerContext, StorePhoneBannerContext, StoreHoursBannerContext} from '../../discounts-module/z-context-containers/contextObjects'

export const DiscountsLayout = () => {
    const [storeNumber] = useContext(StoreNumberBannerContext)
    const [storeAddress] = useContext(StoreAddressBannerContext)
    const [storePhone] = useContext(StorePhoneBannerContext)
    const [storeHours] = useContext(StoreHoursBannerContext)

  return (
    <div className="wrapper">
        <div className="store-num"><StoreNumberBanner storeNumber={storeNumber}/></div>
        <div className="store-add"><StoreAddressBanner storeAddress={storeAddress}/></div>
        <div className="store-phone"><StorePhoneBanner storePhone={storePhone}/></div> 
        <div className="store-hours"><StoreHoursBanner storeHours={storeHours}/></div>
        <div className="discounts-title"><DiscountsTitleBanner/></div>
        <div className="discount-boxes">
            <TicketCycleContainer/>
            <ItemizedDiscountsDisplay/>
        </div>
        <div className="exchange-policy"><ExchangePolicy/></div>
    </div>
  )
}