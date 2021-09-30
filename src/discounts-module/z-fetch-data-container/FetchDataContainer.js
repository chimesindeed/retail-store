// By using this Component to wrap index.js.
// Fetch Logic is factored out of Presentational Flow.

import {useEffect, useContext} from 'react'
import * as Prices from '../z-context-containers/contextObjects'

export const FetchDataContainer = (props) => {
    const [, setSoftcoverPrice] = useContext(Prices.SoftcoverPriceContext)
    const [, setHardcoverPrice] = useContext(Prices.HardcoverPriceContext)
    const [, setChildrensPrice] = useContext(Prices.ChildrensPriceContext)
    const [, setAlbumsPrice] = useContext(Prices.AlbumsPriceContext)
    const [, setCdsPrice] = useContext(Prices.CdsPriceContext)
    const [, setDvdsPrice] = useContext(Prices.DvdsPriceContext)
    const [, setTapesPrice] = useContext(Prices.TapesPriceContext)
  useEffect(()=>{
    const getData = async()=> {
      const allPrices = await fetch('https://port-1337-my-first-container-gratitudeandfocus798062.codeanyapp.com/prices') 
      const json = await allPrices.json();
      setSoftcoverPrice(json[0])
      setHardcoverPrice(json[1])
      setChildrensPrice(json[2])
      setAlbumsPrice(json[3])
      setCdsPrice(json[4])
      setTapesPrice(json[5])
      setDvdsPrice(json[6])
    }
   getData();  // All this does is Fetch Prices from Backend
   // And Load them into Context Objects on Mount.
  },[])

    return (
        props.children
    )
}