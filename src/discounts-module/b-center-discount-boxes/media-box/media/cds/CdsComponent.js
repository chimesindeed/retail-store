import React, {useContext} from 'react'
import '../../../../../Styles.css'
import {CdsPriceContext} from '../../../../z-context-containers/contextObjects'

const cds = 'Cds'
export const CdsComponent = () => {
    const [cdsPrice]= useContext(CdsPriceContext)
    return (
        <div className="item-and-price">
          <div className="cds">{cds}</div>
          <div className="prices">{cdsPrice.price}</div>
        </div>
    )
}