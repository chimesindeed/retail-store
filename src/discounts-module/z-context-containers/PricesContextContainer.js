
// This Component wraps index.js
// to keep context logic separate from presentational flow.
import React, {useState} from 'react'
import * as Prices from './contextObjects'

export const PricesContextContainer = (props) => {
  const [childrensPrice, setChildrensPrice] = useState('');
  const [softcoverPrice, setSoftcoverPrice] = useState('');
  const [hardcoverPrice, setHardcoverPrice] = useState('');
  const [albumsPrice, setAlbumsPrice] = useState('');
  const [tapesPrice, setTapesPrice] = useState('');
  const [cdsPrice, setCdsPrice] = useState('');
  const [dvdsPrice, setDvdsPrice] = useState('');
  const [setsPrice, setSetsPrice] = useState('As Marked');

    return (
      <Prices.ChildrensPriceContext.Provider value={[childrensPrice, setChildrensPrice]}>
      <Prices.SoftcoverPriceContext.Provider value={[softcoverPrice, setSoftcoverPrice]}>
      <Prices.HardcoverPriceContext.Provider value={[hardcoverPrice, setHardcoverPrice]}>
      <Prices.AlbumsPriceContext.Provider value={[albumsPrice, setAlbumsPrice]}>
      <Prices.TapesPriceContext.Provider value={[tapesPrice, setTapesPrice]}>
      <Prices.CdsPriceContext.Provider value={[cdsPrice, setCdsPrice]}>
      <Prices.DvdsPriceContext.Provider value={[dvdsPrice, setDvdsPrice]}>
      <Prices.SetsPriceContext.Provider value={[setsPrice, setSetsPrice]}>
        {props.children}
      </Prices.SetsPriceContext.Provider>
      </Prices.DvdsPriceContext.Provider>
      </Prices.CdsPriceContext.Provider>
      </Prices.TapesPriceContext.Provider>
      </Prices.AlbumsPriceContext.Provider>
      </Prices.HardcoverPriceContext.Provider>
      </Prices.SoftcoverPriceContext.Provider>
      </Prices.ChildrensPriceContext.Provider>
    )
}