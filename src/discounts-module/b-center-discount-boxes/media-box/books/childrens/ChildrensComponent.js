import React, {useContext} from 'react'
import '../../../../../Styles.css'
import {ChildrensPriceContext} from '../../../../z-context-containers/contextObjects'

const childrens = 'Childrens'
export const ChildrensComponent = () => {
    const [childrensPrice] = useContext(ChildrensPriceContext)
    return (
        <div className="item-and-price">
          <div className="childrens">{childrens}</div>
          <div className="prices">{childrensPrice.price}</div>
        </div>
    )
}