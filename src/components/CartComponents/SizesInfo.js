import React from 'react'

export default function SizesInfo({ info }) {
  if (info) {
    const allSizes = []
    for (let [key, value] of Object.entries(info)) {
      allSizes.push(
        <div className="cart-size-container" key={`${key}_${value}`}>
          <div className="cart-size-count">{`${getShorthandSize(key)}: ${value}`}</div>
        </div>
      )
    }

    return allSizes.map(s => s)
  }

  return <></>
}

function getShorthandSize(size) {
  size = size.toUpperCase()
  return size[0] === 'X' ? getLargeShorthand(size) : size[0]
}

function getLargeShorthand(size) {
  return size[1] === 'X' ? size.slice(0 ,3) : size.slice(0, 2)
}