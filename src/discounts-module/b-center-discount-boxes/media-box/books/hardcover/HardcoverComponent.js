import React, {useContext} from 'react'
import '../../../../../Styles.css'
import {HardcoverPriceContext} from '../../../../z-context-containers/contextObjects'

const hardcover = 'Hardcover'
export const HardcoverComponent = () => {
    const [hardcoverPrice] = useContext(HardcoverPriceContext)
    return (
        <div className="item-and-price">
          <div className="hardcover">{hardcover}</div>
          <div className="prices">{hardcoverPrice.price}</div>
        </div>
    )
}