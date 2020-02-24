import React from 'react'

function Circle (props) {
  let {r, a, circleData, handleClickCircle, ableReceive,currentSelectedCircle,} = props
  
  let buttonWidth = 2 * r
  let buttonMargin = `0 ${a / 2}px`
  
  let boxShadow = circleData.color === '#ddd' ?
    '1px 1px 1px #888888 inset' : '1px 1px 1px rgba(0,0,0,0.2)'
  
  let backgroundImage = `radial-gradient(at 80px 80px, rgba(0,0,0,0), ${circleData.color})`
  
  // 给被选中的棋子（被点击的棋子）设置选中样式
  if (
    currentSelectedCircle &&
    currentSelectedCircle.rowIndex === circleData.rowIndex &&
    currentSelectedCircle.columnIndex === circleData.columnIndex
  ) {
    buttonWidth += r / 2   // 选中的棋子宽度要增加半径的一半
    buttonMargin = `0 ${a / 2 - r / 4}px`
    boxShadow = '2px 2px 1px rgba(0,0,0,0.4)'
  }
  
  // 如果这个点 是 当前选中棋子 的落子点 ，那么给它设置 落子点 样式
  let buttonClassName = ''
  if (ableReceive) {
    buttonClassName = 'able-receive'
  }
  
  return (
    <button
      style={{
        width: buttonWidth + 'px',
        height: buttonWidth + 'px',
        borderRadius: buttonWidth / 2 + 'px',
        margin: buttonMargin,
        boxShadow: boxShadow,
        backgroundImage: backgroundImage,
      }}
      onClick={() => handleClickCircle(circleData, ableReceive)}
      className={buttonClassName}
    />
  )
}

export default Circle