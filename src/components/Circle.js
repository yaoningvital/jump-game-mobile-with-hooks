import React from 'react'

function Circle (props) {
  let {r, a, circleData, boardRowHeight} = props
  
  let buttonWidth = 2 * r
  let buttonMargin = `0 ${a / 2}px`
  
  let boxShadow = circleData.color === '#ddd' ?
    '1px 1px 1px #888888 inset' : '1px 1px 1px rgba(0,0,0,0.2)'
  
  let backgroundImage = `radial-gradient(at 80px 80px, rgba(0,0,0,0), ${circleData.color})`
  
  return (
    <button
      style={{
        width: buttonWidth + 'px',
        height: buttonWidth + 'px',
        borderRadius: buttonWidth / 2 + 'px',
        margin: buttonMargin,
        boxShadow: boxShadow,
        backgroundImage:backgroundImage,
      }}
    />
  )
}

export default Circle