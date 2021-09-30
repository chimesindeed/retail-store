import React from 'react'
import '../../../../Styles.css'

export const discountedItems = 'CLOTHING / HANDBAGS'
const yellow = 'Yellow Tickets'
const green = 'Green Tickets'
const blue = 'Blue Tickets'
const white = 'White Tickets'
const pink = 'Pink Tickets'
const fiftyPercent = '50%'
const ninetyNine = '99 Cents'

export const Yellow = () => {
  return (
  <div>
    <div className="white">{`${white} ${fiftyPercent}`}</div>
    <div className="blue">{`${blue} ${fiftyPercent}`}</div>
    <div className="green">{`${green} ${ninetyNine}`}</div>
  </div>
  )
}
export const Green = () => {
  return (
  <div>
    <div className="pink">{`${pink} ${fiftyPercent}`}</div>
    <div className="white">{`${white} ${fiftyPercent}`}</div>
    <div className="blue">{`${blue} ${ninetyNine}`}</div>
  </div>
  )
}
export const Blue = () => {
  return (
  <div>
    <div className="yellow">{`${yellow} ${fiftyPercent}`}</div>
    <div className="pink">{`${pink} ${fiftyPercent}`}</div>
    <div className="white">{`${white} ${ninetyNine}`}</div>
  </div>
  )
}
export const White = () => {
  return (
  <div>
    <div className="green">{`${green} ${fiftyPercent}`}</div>
    <div className="yellow">{`${yellow} ${fiftyPercent}`}</div>
    <div className="pink">{`${pink} ${ninetyNine}`}</div>
  </div>
  )
}
export const Pink = () => {
  return (
  <div>
    <div className="blue">{`${blue} ${fiftyPercent}`}</div>
    <div className="green">{`${green} ${fiftyPercent}`}</div>
    <div className="yellow">{`${yellow} ${ninetyNine}`}</div>
  </div>
  )
}