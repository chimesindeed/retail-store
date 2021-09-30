import React, {useContext} from 'react'
import '../../../../../Styles.css'
import {SetsPriceContext} from '../../../../z-context-containers/contextObjects'

const sets = 'Sets'
export const SetsComponent = () => {
    const [setsPrice]= useContext(SetsPriceContext)
    return (
        <div className="item-and-price">
          <div className="sets">{sets}</div>
          <div className="prices">{setsPrice.price}</div>
        </div>
    )
}