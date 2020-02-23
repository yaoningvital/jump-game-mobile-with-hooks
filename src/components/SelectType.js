import React from 'react'
import { Modal } from 'antd-mobile';
import JiJiImg from '../assets/images/jiji.png'

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
  let {showSelectTypeModal, handleSelectType} = props
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
        <div className="btns">
          {
            [2, 3, 4, 5, 6].map((num) => (
              <button key={num}
                      onClick={() => handleSelectType(num)}>
                {num}人玩
              </button>
            ))
          }
        </div>
      </div>
    </Modal>
  )
}

export default SelectType