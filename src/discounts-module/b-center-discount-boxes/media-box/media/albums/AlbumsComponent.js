import React, {useContext} from 'react'
import '../../../../../Styles.css'
import {AlbumsPriceContext} from '../../../../z-context-containers/contextObjects'

const albums = 'Albums'
export const AlbumsComponent = () => {
    const [albumsPrice]= useContext(AlbumsPriceContext)
    return (
        <div className="item-and-price">
          <div className="albums">{albums}</div>
          <div className="prices">{albumsPrice.price}</div>
        </div>
    )
}