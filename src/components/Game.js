import React, { useState } from 'react'
import Board from './Board'
import SelectType from './SelectType'
import { circlesDefault } from '../utils'
import _ from 'lodash'


function Game (props) {
  let boardWidth = document.body.clientWidth * 0.9 // 棋盘的宽高
  let a = 6    // 棋子与同轴线上相邻棋子边缘的最短距离
  let r = boardWidth / 29.445 - a * 0.5    // 棋子半径
  
  // 记录下棋过程中的circles，只有在点击“确定”之后，这个数组中的最后一条circles记录才会push到history中
  let [cashCirclesArr, setCashCirclesArr] = useState([circlesDefault])
  
  // 显示选择类型弹层
  let [showSelectTypeModal, setShowSelectTypeModal] = useState(false)
  
  // 玩家数量
  let [playerNum, setPlayerNum] = useState(0)
  
  // 已选择的棋子颜色
  let [selectedChessColors, setSelectedChessColors] = useState([])
  
  
  let [history, setHistory] = useState([{
    circles: circlesDefault, // 棋子布局
    currentPlayingColor: '', // 当前玩家的颜色
    ranking: [], // 已经完成游戏的颜色
  }])
  
  // 处理选择玩家数量
  function handleSelectPlayerNum (playerNum) {
    setPlayerNum(playerNum) // 更新玩家数量
    
    // 如果玩家数量 < 已选颜色数量，则截取 已选颜色
    let newSelectedChessColors = _.cloneDeep(selectedChessColors)
    if (playerNum < newSelectedChessColors.length) {
      newSelectedChessColors = newSelectedChessColors.slice(0, playerNum)
    }
    setSelectedChessColors(newSelectedChessColors)
  }
  
  // 点击了一个颜色
  function handleSelectChessColor (clickColor) {
    let newSelectedChessColors = _.cloneDeep(selectedChessColors)
    
    // 如果这个颜色在 已选颜色数组中，将它从已选颜色数组中删除
    if (newSelectedChessColors.includes(clickColor)) {
      let clickColorIndex = newSelectedChessColors.indexOf(clickColor)
      newSelectedChessColors.splice(clickColorIndex, 1)
    }
    // 这个颜色 不在 已选颜色数组中，将它加进去
    else {
      newSelectedChessColors.push(clickColor)
    }
    
    setSelectedChessColors(newSelectedChessColors)
  }
  
  
  // 点击 选择类型 的 确定 按钮
  function handleConfirmSelectType () {
    setShowSelectTypeModal(false)
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
        handleSelectPlayerNum={handleSelectPlayerNum}
        playerNum={playerNum}
        selectedChessColors={selectedChessColors}
        handleSelectChessColor={handleSelectChessColor}
        handleConfirmSelectType={handleConfirmSelectType}
      />
    </div>
  )
}

export default Game