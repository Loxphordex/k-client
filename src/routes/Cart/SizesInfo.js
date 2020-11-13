import React from 'react'

export default function SizesInfo({ info }) {
  if (info) {
    const allSizes = []
    for (let [key, value] of Object.entries(info)) {
      allSizes.push(
        <div className="cart-size-container" key={`${key}_${value}`}>
          <div className="cart-size">{`${key}:`}</div>
          <div className="cart-size-count">{value}</div>
        </div>
      )
    }

    return allSizes.map(s => s)
  }

  return <></>
}