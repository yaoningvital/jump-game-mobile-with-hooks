import React, { useState } from 'react'
import Board from './Board'
import SelectType from './SelectType'
import { circlesDefault } from '../utils'


function Game (props) {
  let boardWidth = document.body.clientWidth * 0.9 // 棋盘的宽高
  let a = 6    // 棋子与同轴线上相邻棋子边缘的最短距离
  let r = boardWidth / 29.445 - a * 0.5    // 棋子半径
  
  // 记录下棋过程中的circles，只有在点击“确定”之后，这个数组中的最后一条circles记录才会push到history中
  let [cashCirclesArr, setCashCirclesArr] = useState([circlesDefault])
  
  let [showSelectTypeModal, setShowSelectTypeModal] = useState(false) // 显示选择类型弹层
  let [playerNum, setPlayerNum] = useState(0) // 玩家数量
  
  let [history, setHistory] = useState([{
    circles: circlesDefault, // 棋子布局
    currentPlayingColor: '', // 当前玩家的颜色
    ranking: [], // 已经完成游戏的颜色
  }])
  
  // 处理选择游戏类型(选择玩家数量)
  function handleSelectType (playerNum) {
    setShowSelectTypeModal(false) // 隐藏弹层
    setPlayerNum(playerNum) // 更新玩家数量
  }
  
  return (
    <div className="game">
      {/*选择类型*/}
      <button className="select-type-btn"
              onClick={() => setShowSelectTypeModal(true)}
      >选择类型
      </button>
      
      {/*棋盘*/}
      <Board r={r}
             a={a}
             boardWidth={boardWidth}
             circles={cashCirclesArr[cashCirclesArr.length - 1]}
      />
      
      {/*  选择类型弹层*/}
      <SelectType
        showSelectTypeModal={showSelectTypeModal}
        handleSelectType={handleSelectType}
      />
    </div>
  )
}

export default Game