import React from 'react'
import Circle from './Circle'

function Board (props) {
  let {
    r, a, circles, boardWidth, handleClickCircle, ableReceiveCells,
    currentSelectedCircle,
  } = props
  let boardRowHeight = 1.732 * (r + a / 2)  // 棋子所在行的高度
  
  
  return (
    <div className="board"
         style={{
           width: boardWidth + 'px',
           height: boardWidth + 'px',
           borderRadius: boardWidth / 2 + 'px',
         }}>
      {
        circles.map((rowArr, rowIndex) => {
          return (
            <div className="board-row"
                 key={rowIndex}
                 style={{
                   height: boardRowHeight + 'px'
                 }}
            >
              {
                rowArr.map((circleItem, circleIndex) => {
                  let ableReceivePoint = false // 当前这个点是否是一个 落子点 （默认不是）
                  for (let cell of ableReceiveCells) {
                    if (cell.rowIndex === circleItem.rowIndex && cell.columnIndex === circleItem.columnIndex) {
                      ableReceivePoint = true
                    }
                  }
                  return (
                    <Circle
                      key={circleIndex}
                      circleData={circleItem}
                      r={r}
                      a={a}
                      boardRowHeight={boardRowHeight}
                      handleClickCircle={handleClickCircle}
                      currentSelectedCircle={currentSelectedCircle}
                      ableReceive={ableReceivePoint}
                    />
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Board