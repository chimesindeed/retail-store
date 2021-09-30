import React, {useContext} from 'react'
import '../../../../../Styles.css'
import {DvdsPriceContext} from '../../../../z-context-containers/contextObjects'

const dvds = 'Dvds'
export const DvdsComponent = () => {
    const [dvdsPrice]= useContext(DvdsPriceContext)
    return (
        <div className="item-and-price">
          <div className="dvds">{dvds}</div>
          <div className="prices">{dvdsPrice.price}</div>
        </div>
    )
}