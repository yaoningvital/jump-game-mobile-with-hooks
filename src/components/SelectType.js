import React from 'react'
import { Modal } from 'antd-mobile';
import JiJiImg from '../assets/images/jiji.png'
import { BLACK, BLUE, CYAN, DARKBLUE, GREEN, LIGHTBLUE, ORANGE, PERPLE, PINK, RED, ROSERED, YELLOW } from '../utils'
import CheckMarkImg from '../assets/images/check-mark.png'

function closest (el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

const onWrapTouchStart = (e) => {
  // fix touch to scroll background page on iOS
  if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
    return;
  }
  const pNode = closest(e.target, '.am-modal-content');
  if (!pNode) {
    e.preventDefault();
  }
}


function SelectType (props) {
  let {
    showSelectTypeModal, handleSelectPlayerNum, playerNum,
    handleSelectChessColor, selectedChessColors, handleConfirmSelectType,
  } = props
  let allColors = [BLACK, ORANGE, YELLOW, GREEN, CYAN, LIGHTBLUE, BLUE, DARKBLUE, PERPLE, ROSERED, PINK, RED]
  
  return (
    <Modal
      visible={showSelectTypeModal}
      transparent
      maskClosable={false}
      wrapProps={{onTouchStart: onWrapTouchStart}}
    >
      <div className="modal-content">
        <p className="title">
          <img src={JiJiImg} alt=""/>
          <span>请选择类型</span>
        </p>
        
        <div className="player-num">
          <h4>请选择游戏人数：</h4>
          <div className="btns">
            {
              [2, 3, 4, 5, 6].map((num) => {
                let playerNumBtnBackgroundColor = ''
                if (playerNum === num) {
                  playerNumBtnBackgroundColor = '#0269ab'
                }
                return <button key={num}
                               style={{
                                 backgroundColor: playerNumBtnBackgroundColor
                               }}
                               onClick={() => handleSelectPlayerNum(num)}>
                  {num}人玩
                </button>
              })
            }
          </div>
        </div>
        
        <div className="chess-color">
          <h4>请选择棋子颜色：</h4>
          <div className="colors">
            {
              allColors.map((color, index) => {
                let showCheckMark = selectedChessColors.includes(color)
                
                let buttonDisabled = false
                if (selectedChessColors.length === playerNum &&
                  !selectedChessColors.includes(color)
                ) { // 当已选颜色数量 等于 玩家数，且这个颜色 不在 已选颜色数组 中，则这个颜色不可选了
                  buttonDisabled = true
                }
                
                return (
                  <div key={index}
                       className="item">
                    <button style={{
                      backgroundColor: color,
                    }}
                            onClick={() => handleSelectChessColor(color)}
                            disabled={buttonDisabled}
                    />
                    
                    {/*对勾*/}
                    {
                      showCheckMark &&
                      <img src={CheckMarkImg} alt=""/>
                    }
                    
                    {/*  黑色层*/}
                    {
                      buttonDisabled &&
                      <div className="black-mask"/>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        
        <button className="confirm"
                disabled={playerNum === 0 || selectedChessColors.length !== playerNum}
                onClick={handleConfirmSelectType}
        >确定
        </button>
      </div>
    </Modal>
  )
}

export default SelectType