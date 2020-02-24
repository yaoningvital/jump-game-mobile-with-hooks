import React, { useState } from 'react'
import Board from './Board'
import SelectType from './SelectType'
import {
  circlesDefault,
  findJumpToCells,
  findMoveToCells,
  isMoveHere,
  setEastNorthTenColor,
  setEastSouthTenColor,
  setNorthTenColor,
  setSouthTenColor,
  setWestNorthTenColor,
  setWestSouthTenColor,
} from '../utils'
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
  
  // 历史记录
  let [history, setHistory] = useState([{
    circles: circlesDefault, // 棋子布局
    currentPlayingColor: null, // 当前玩家的颜色
    ranking: [], // 已经完成游戏的颜色
  }])
  
  // 已经完成游戏的颜色排名，最先完成的在最前面
  let [ranking, setRanking] = useState([])
  
  // 落子点
  let [ableReceiveCells, setAbleReceiveCells] = useState([])
  
  // 当前选中棋子
  let [currentSelectedCircle, setCurrentSelectedCircle] = useState(null)
  
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
    // 1、关闭弹层
    setShowSelectTypeModal(false)
    
    // 2、更新 cashCirclesArr
    let initialCashCircles = _.cloneDeep(circlesDefault)
    // 1) 选择了 2 个颜色，设置 南边10子 和 北边10子
    if (selectedChessColors.length === 2) {
      // 设置 南边10子
      setSouthTenColor(initialCashCircles, selectedChessColors[0])
      // 设置 北边10子
      setNorthTenColor(initialCashCircles, selectedChessColors[1])
    }
    // 2) 选择了 3 个颜色，设置 南边10子 、西北边10子 、 东北边10子
    else if (selectedChessColors.length === 3) {
      // 设置 南边10子
      setSouthTenColor(initialCashCircles, selectedChessColors[0])
      // 设置 西北边10子
      setWestNorthTenColor(initialCashCircles, selectedChessColors[1])
      // 设置 东北边10子
      setEastNorthTenColor(initialCashCircles, selectedChessColors[2])
    }
    // 3) 选择了 4 个颜色，设置 南边10子 、西南边10子 、北边10子、 东北边10子
    else if (selectedChessColors.length === 4) {
      // 设置 南边10子
      setSouthTenColor(initialCashCircles, selectedChessColors[0])
      // 设置 西南边10子
      setWestSouthTenColor(initialCashCircles, selectedChessColors[1])
      // 设置 北边10子
      setNorthTenColor(initialCashCircles, selectedChessColors[2])
      // 设置 东北边10子
      setEastNorthTenColor(initialCashCircles, selectedChessColors[3])
    }
    // 4) 选择了 5 个颜色，设置 南边10子 、西南边10子 、西北边10子、北边10子、 东北边10子
    else if (selectedChessColors.length === 5) {
      // 设置 南边10子
      setSouthTenColor(initialCashCircles, selectedChessColors[0])
      // 设置 西南边10子
      setWestSouthTenColor(initialCashCircles, selectedChessColors[1])
      // 设置 西北边10子
      setWestNorthTenColor(initialCashCircles, selectedChessColors[2])
      // 设置 北边10子
      setNorthTenColor(initialCashCircles, selectedChessColors[3])
      // 设置 东北边10子
      setEastNorthTenColor(initialCashCircles, selectedChessColors[4])
    }
    // 5) 选择了 6 个颜色，设置 南边10子 、西南边10子 、西北边10子、北边10子、 东北边10子、东南边10子
    else if (selectedChessColors.length === 6) {
      // 设置 南边10子
      setSouthTenColor(initialCashCircles, selectedChessColors[0])
      // 设置 西南边10子
      setWestSouthTenColor(initialCashCircles, selectedChessColors[1])
      // 设置 西北边10子
      setWestNorthTenColor(initialCashCircles, selectedChessColors[2])
      // 设置 北边10子
      setNorthTenColor(initialCashCircles, selectedChessColors[3])
      // 设置 东北边10子
      setEastNorthTenColor(initialCashCircles, selectedChessColors[4])
      // 设置 东南边10子
      setEastSouthTenColor(initialCashCircles, selectedChessColors[5])
    }
    setCashCirclesArr([initialCashCircles])
    
    // 3、更新 history
    setHistory([{
      circles: initialCashCircles, // 棋子布局
      currentPlayingColor: selectedChessColors[0], // 当前玩家的颜色
      ranking: [], // 已经完成游戏的颜色
    }])
  }
  
  // 点击 重玩
  function handleReplay () {
    setCashCirclesArr([circlesDefault])
    setPlayerNum(0)
    setSelectedChessColors([])
    setHistory([{
      circles: circlesDefault, // 棋子布局
      currentPlayingColor: null, // 当前玩家的颜色
      ranking: [], // 已经完成游戏的颜色
    }])
    setRanking([])
    setAbleReceiveCells([])
    setCurrentSelectedCircle(null)
  }
  
  // 处理点击棋子
  function handleClickCircle (circleData, ableReceive) {
    // 还没选择颜色，不能开始游戏
    if (selectedChessColors.length < 2) return
    
    // 点击了 棋子
    if (circleData.color !== '#ddd') {
      let currentPlayingColor = history[history.length - 1].currentPlayingColor
      // 只能点击当前玩家的棋子
      if (circleData.color !== currentPlayingColor) return
      
      // 已经有当前玩家的棋子走出去至少一小步了，其他棋子不能再走；
      // 而对于已经走出去至少一小步的棋子，点它本身是没有反应的。
      // 现在只能点落子点（空格）继续移动这颗棋子；或者点“确定”按钮确认这一步棋
      if (cashCirclesArr.length > 1) return
      
      // 1、找到 当前选中的棋子 的落子点
      let ableReceiveCells = findAbleReceiveCells(circleData)
      
      // 2、更新 落子点（显示落子点样式）
      setAbleReceiveCells(ableReceiveCells)
      // 3、更新被选中棋子(的样式)
      setCurrentSelectedCircle(circleData)
    }
  }
  
  function findAbleReceiveCells (selectedCircle) {
    // console.log('cashCirclesArr:', cashCirclesArr)
    let ableReceiveCells = [] // 当前选中的棋子所有可以落子的点
    // 落子点 分为两种：可以跳到的落子点（简称：跳落子点） 和 可以通过移动一步而达到的落子点（这样的落子点就在选择点的紧挨着的位置，简称：移落子点）
    // 我们知道，一个棋子的一步是可以跳到多个落子点的。
    // 我们称一个棋子从开始走 到 走到 最后的落子点 的这个过程叫做这个棋子的“一大步”，
    // 这一大步中的第一小步叫“首步”，后边的所有次小步叫“非首步”。
    // a) 对于棋子的 首步，它的 落子点 包括 跳落子点 和 移落子点
    // b) 对于棋子的 非首步，如果它的前一小步是 跳过来 的，那么它的落子点只包括 跳落子点；
    // c) 对于棋子的 非首步，如果它的前一小步是 移过来 的，那么它的落子点只包括一个：它原来的位置；
    
    // cashCirclesArr = _.cloneDeep(cashCirclesArr) // 当前这一大步的数据的深拷贝
    let cashCircles = _.cloneDeep(cashCirclesArr[cashCirclesArr.length - 1]) // 当前棋子布局
    
    // 首步
    if (cashCirclesArr.length === 1) {
      let jumpToCells = findJumpToCells(cashCircles, selectedCircle)  // 拿到跳落子点
      let moveToCells = findMoveToCells(cashCircles, selectedCircle)  // 拿到移落子点
      
      ableReceiveCells = ableReceiveCells.concat(jumpToCells, moveToCells)
    }
    // 非首步
    else if (cashCirclesArr.length > 1) {
      // 判断当前棋子是不是移过来的
      let isMoveHere = isMoveHere(cashCirclesArr, selectedCircle)
      if (isMoveHere) { // 是移过来的，isMoveHere 是 原来移过来的位置对象
        ableReceiveCells.push(isMoveHere)
      } else { // 是跳过来的，isMoveHere 是 false
        let jumpToCells = findJumpToCells(cashCircles, selectedCircle)  // 拿到跳落子点
        ableReceiveCells = ableReceiveCells.concat(jumpToCells)
      }
    }
    
    return ableReceiveCells
  }
  
  
  return (
    <div className="game">
      {/*选择类型*/}
      <button className="select-type-btn"
              onClick={() => setShowSelectTypeModal(true)}
              disabled={history.length > 1}
      >选择类型
      </button>
      
      {/*下一步*/}
      {
        selectedChessColors.length > 0 &&
        <div className="next-player">
          <span>下一步：</span>
          <button style={{
            width: 2 * r + 'px',
            height: 2 * r + 'px',
            borderRadius: r + 'px',
            backgroundColor: history[history.length - 1].currentPlayingColor
          }}/>
        </div>
      }
      
      {/*棋盘*/}
      <Board r={r}
             a={a}
             boardWidth={boardWidth}
             circles={cashCirclesArr[cashCirclesArr.length - 1]}
             handleClickCircle={handleClickCircle}
             ableReceiveCells={ableReceiveCells}
             currentSelectedCircle={currentSelectedCircle}
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
      
      {/*  按钮：返回上一步、重玩*/}
      <div className="btns">
        <button onClick={handleReplay}>重玩</button>
        <button>返回上一步</button>
      </div>
    </div>
  )
}

export default Game