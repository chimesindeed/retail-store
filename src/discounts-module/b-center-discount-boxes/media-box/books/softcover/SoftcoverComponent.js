import React, {useContext} from 'react'
import '../../../../../Styles.css'
import {SoftcoverPriceContext} from '../../../../z-context-containers/contextObjects'

const softcover = 'Softcover'
export const SoftcoverComponent = () => {
    const [softcoverPrice]= useContext(SoftcoverPriceContext)
    return (
        <div className="item-and-price">
          <div className="softcover">{softcover}</div>
          <div className="prices">{softcoverPrice.price}</div>
        </div>
    )
}