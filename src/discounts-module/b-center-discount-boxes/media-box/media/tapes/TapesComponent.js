import React, {useContext} from 'react'
import '../../../../../Styles.css'
import {TapesPriceContext} from '../../../../z-context-containers/contextObjects'

const tapes = 'Tapes'
export const TapesComponent = () => {
    const [tapesPrice]= useContext(TapesPriceContext)
    return (
        <div className="item-and-price">
          <div className="tapes">{tapes}</div>
          <div className="prices">{tapesPrice.price}</div>
        </div>
    )
}