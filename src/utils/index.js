import _ from "lodash";

export const GREY = '#ddd'
export const RED = '#ee1d24'
export const ORANGE = '#f7941d'
export const YELLOW = '#fff100'
export const GREEN = '#00a650'
export const CYAN = '#16bcb4'
export const LIGHTBLUE = '#00aeef'
export const BLUE = '#0072bc'
export const DARKBLUE = '#2f3192'
export const PERPLE = '#652c91'
export const ROSERED = '#ed008c'
export const PINK = '#f49bc1'
export const BLACK = '#111'


export const circlesDefault = [ // 默认全部为灰色
  [ // 一行
    {x: 0, y: 4, z: 4, color: GREY, rowIndex: 0, columnIndex: 0},  // 一个点
  ],
  [
    {x: 1, y: 3, z: 4, color: GREY, rowIndex: 1, columnIndex: 0},
    {x: 1, y: 4, z: 5, color: GREY, rowIndex: 1, columnIndex: 1},
  ],
  [
    {x: 2, y: 2, z: 4, color: GREY, rowIndex: 2, columnIndex: 0},
    {x: 2, y: 3, z: 5, color: GREY, rowIndex: 2, columnIndex: 1},
    {x: 2, y: 4, z: 6, color: GREY, rowIndex: 2, columnIndex: 2},
  ],
  [
    {x: 3, y: 1, z: 4, color: GREY, rowIndex: 3, columnIndex: 0},
    {x: 3, y: 2, z: 5, color: GREY, rowIndex: 3, columnIndex: 1},
    {x: 3, y: 3, z: 6, color: GREY, rowIndex: 3, columnIndex: 2},
    {x: 3, y: 4, z: 7, color: GREY, rowIndex: 3, columnIndex: 3},
  ],
  [
    {x: 4, y: -4, z: 0, color: GREY, rowIndex: 4, columnIndex: 0},
    {x: 4, y: -3, z: 1, color: GREY, rowIndex: 4, columnIndex: 1},
    {x: 4, y: -2, z: 2, color: GREY, rowIndex: 4, columnIndex: 2},
    {x: 4, y: -1, z: 3, color: GREY, rowIndex: 4, columnIndex: 3},
    {x: 4, y: 0, z: 4, color: GREY, rowIndex: 4, columnIndex: 4},
    {x: 4, y: 1, z: 5, color: GREY, rowIndex: 4, columnIndex: 5},
    {x: 4, y: 2, z: 6, color: GREY, rowIndex: 4, columnIndex: 6},
    {x: 4, y: 3, z: 7, color: GREY, rowIndex: 4, columnIndex: 7},
    {x: 4, y: 4, z: 8, color: GREY, rowIndex: 4, columnIndex: 8},
    {x: 4, y: 5, z: 9, color: GREY, rowIndex: 4, columnIndex: 9},
    {x: 4, y: 6, z: 10, color: GREY, rowIndex: 4, columnIndex: 10},
    {x: 4, y: 7, z: 11, color: GREY, rowIndex: 4, columnIndex: 11},
    {x: 4, y: 8, z: 12, color: GREY, rowIndex: 4, columnIndex: 12},
  ],
  [
    {x: 5, y: -4, z: 1, color: GREY, rowIndex: 5, columnIndex: 0},
    {x: 5, y: -3, z: 2, color: GREY, rowIndex: 5, columnIndex: 1},
    {x: 5, y: -2, z: 3, color: GREY, rowIndex: 5, columnIndex: 2},
    {x: 5, y: -1, z: 4, color: GREY, rowIndex: 5, columnIndex: 3},
    {x: 5, y: 0, z: 5, color: GREY, rowIndex: 5, columnIndex: 4},
    {x: 5, y: 1, z: 6, color: GREY, rowIndex: 5, columnIndex: 5},
    {x: 5, y: 2, z: 7, color: GREY, rowIndex: 5, columnIndex: 6},
    {x: 5, y: 3, z: 8, color: GREY, rowIndex: 5, columnIndex: 7},
    {x: 5, y: 4, z: 9, color: GREY, rowIndex: 5, columnIndex: 8},
    {x: 5, y: 5, z: 10, color: GREY, rowIndex: 5, columnIndex: 9},
    {x: 5, y: 6, z: 11, color: GREY, rowIndex: 5, columnIndex: 10},
    {x: 5, y: 7, z: 12, color: GREY, rowIndex: 5, columnIndex: 11},
  ],
  [
    {x: 6, y: -4, z: 2, color: GREY, rowIndex: 6, columnIndex: 0},
    {x: 6, y: -3, z: 3, color: GREY, rowIndex: 6, columnIndex: 1},
    {x: 6, y: -2, z: 4, color: GREY, rowIndex: 6, columnIndex: 2},
    {x: 6, y: -1, z: 5, color: GREY, rowIndex: 6, columnIndex: 3},
    {x: 6, y: 0, z: 6, color: GREY, rowIndex: 6, columnIndex: 4},
    {x: 6, y: 1, z: 7, color: GREY, rowIndex: 6, columnIndex: 5},
    {x: 6, y: 2, z: 8, color: GREY, rowIndex: 6, columnIndex: 6},
    {x: 6, y: 3, z: 9, color: GREY, rowIndex: 6, columnIndex: 7},
    {x: 6, y: 4, z: 10, color: GREY, rowIndex: 6, columnIndex: 8},
    {x: 6, y: 5, z: 11, color: GREY, rowIndex: 6, columnIndex: 9},
    {x: 6, y: 6, z: 12, color: GREY, rowIndex: 6, columnIndex: 10},
  ],
  [
    {x: 7, y: -4, z: 3, color: GREY, rowIndex: 7, columnIndex: 0},
    {x: 7, y: -3, z: 4, color: GREY, rowIndex: 7, columnIndex: 1},
    {x: 7, y: -2, z: 5, color: GREY, rowIndex: 7, columnIndex: 2},
    {x: 7, y: -1, z: 6, color: GREY, rowIndex: 7, columnIndex: 3},
    {x: 7, y: 0, z: 7, color: GREY, rowIndex: 7, columnIndex: 4},
    {x: 7, y: 1, z: 8, color: GREY, rowIndex: 7, columnIndex: 5},
    {x: 7, y: 2, z: 9, color: GREY, rowIndex: 7, columnIndex: 6},
    {x: 7, y: 3, z: 10, color: GREY, rowIndex: 7, columnIndex: 7},
    {x: 7, y: 4, z: 11, color: GREY, rowIndex: 7, columnIndex: 8},
    {x: 7, y: 5, z: 12, color: GREY, rowIndex: 7, columnIndex: 9},
  ],
  [
    {x: 8, y: -4, z: 4, color: GREY, rowIndex: 8, columnIndex: 0},
    {x: 8, y: -3, z: 5, color: GREY, rowIndex: 8, columnIndex: 1},
    {x: 8, y: -2, z: 6, color: GREY, rowIndex: 8, columnIndex: 2},
    {x: 8, y: -1, z: 7, color: GREY, rowIndex: 8, columnIndex: 3},
    {x: 8, y: 0, z: 8, color: GREY, rowIndex: 8, columnIndex: 4},
    {x: 8, y: 1, z: 9, color: GREY, rowIndex: 8, columnIndex: 5},
    {x: 8, y: 2, z: 10, color: GREY, rowIndex: 8, columnIndex: 6},
    {x: 8, y: 3, z: 11, color: GREY, rowIndex: 8, columnIndex: 7},
    {x: 8, y: 4, z: 12, color: GREY, rowIndex: 8, columnIndex: 8},
  ],
  [
    {x: 9, y: -5, z: 4, color: GREY, rowIndex: 9, columnIndex: 0},
    {x: 9, y: -4, z: 5, color: GREY, rowIndex: 9, columnIndex: 1},
    {x: 9, y: -3, z: 6, color: GREY, rowIndex: 9, columnIndex: 2},
    {x: 9, y: -2, z: 7, color: GREY, rowIndex: 9, columnIndex: 3},
    {x: 9, y: -1, z: 8, color: GREY, rowIndex: 9, columnIndex: 4},
    {x: 9, y: 0, z: 9, color: GREY, rowIndex: 9, columnIndex: 5},
    {x: 9, y: 1, z: 10, color: GREY, rowIndex: 9, columnIndex: 6},
    {x: 9, y: 2, z: 11, color: GREY, rowIndex: 9, columnIndex: 7},
    {x: 9, y: 3, z: 12, color: GREY, rowIndex: 9, columnIndex: 8},
    {x: 9, y: 4, z: 13, color: GREY, rowIndex: 9, columnIndex: 9},
  ],
  [
    {x: 10, y: -6, z: 4, color: GREY, rowIndex: 10, columnIndex: 0},
    {x: 10, y: -5, z: 5, color: GREY, rowIndex: 10, columnIndex: 1},
    {x: 10, y: -4, z: 6, color: GREY, rowIndex: 10, columnIndex: 2},
    {x: 10, y: -3, z: 7, color: GREY, rowIndex: 10, columnIndex: 3},
    {x: 10, y: -2, z: 8, color: GREY, rowIndex: 10, columnIndex: 4},
    {x: 10, y: -1, z: 9, color: GREY, rowIndex: 10, columnIndex: 5},
    {x: 10, y: 0, z: 10, color: GREY, rowIndex: 10, columnIndex: 6},
    {x: 10, y: 1, z: 11, color: GREY, rowIndex: 10, columnIndex: 7},
    {x: 10, y: 2, z: 12, color: GREY, rowIndex: 10, columnIndex: 8},
    {x: 10, y: 3, z: 13, color: GREY, rowIndex: 10, columnIndex: 9},
    {x: 10, y: 4, z: 14, color: GREY, rowIndex: 10, columnIndex: 10},
  ],
  [
    {x: 11, y: -7, z: 4, color: GREY, rowIndex: 11, columnIndex: 0},
    {x: 11, y: -6, z: 5, color: GREY, rowIndex: 11, columnIndex: 1},
    {x: 11, y: -5, z: 6, color: GREY, rowIndex: 11, columnIndex: 2},
    {x: 11, y: -4, z: 7, color: GREY, rowIndex: 11, columnIndex: 3},
    {x: 11, y: -3, z: 8, color: GREY, rowIndex: 11, columnIndex: 4},
    {x: 11, y: -2, z: 9, color: GREY, rowIndex: 11, columnIndex: 5},
    {x: 11, y: -1, z: 10, color: GREY, rowIndex: 11, columnIndex: 6},
    {x: 11, y: 0, z: 11, color: GREY, rowIndex: 11, columnIndex: 7},
    {x: 11, y: 1, z: 12, color: GREY, rowIndex: 11, columnIndex: 8},
    {x: 11, y: 2, z: 13, color: GREY, rowIndex: 11, columnIndex: 9},
    {x: 11, y: 3, z: 14, color: GREY, rowIndex: 11, columnIndex: 10},
    {x: 11, y: 4, z: 15, color: GREY, rowIndex: 11, columnIndex: 11},
  ],
  [
    {x: 12, y: -8, z: 4, color: GREY, rowIndex: 12, columnIndex: 0},
    {x: 12, y: -7, z: 5, color: GREY, rowIndex: 12, columnIndex: 1},
    {x: 12, y: -6, z: 6, color: GREY, rowIndex: 12, columnIndex: 2},
    {x: 12, y: -5, z: 7, color: GREY, rowIndex: 12, columnIndex: 3},
    {x: 12, y: -4, z: 8, color: GREY, rowIndex: 12, columnIndex: 4},
    {x: 12, y: -3, z: 9, color: GREY, rowIndex: 12, columnIndex: 5},
    {x: 12, y: -2, z: 10, color: GREY, rowIndex: 12, columnIndex: 6},
    {x: 12, y: -1, z: 11, color: GREY, rowIndex: 12, columnIndex: 7},
    {x: 12, y: 0, z: 12, color: GREY, rowIndex: 12, columnIndex: 8},
    {x: 12, y: 1, z: 13, color: GREY, rowIndex: 12, columnIndex: 9},
    {x: 12, y: 2, z: 14, color: GREY, rowIndex: 12, columnIndex: 10},
    {x: 12, y: 3, z: 15, color: GREY, rowIndex: 12, columnIndex: 11},
    {x: 12, y: 4, z: 16, color: GREY, rowIndex: 12, columnIndex: 12},
  ],
  [
    {x: 13, y: -4, z: 9, color: GREY, rowIndex: 13, columnIndex: 0},
    {x: 13, y: -3, z: 10, color: GREY, rowIndex: 13, columnIndex: 1},
    {x: 13, y: -2, z: 11, color: GREY, rowIndex: 13, columnIndex: 2},
    {x: 13, y: -1, z: 12, color: GREY, rowIndex: 13, columnIndex: 3},
  ],
  [
    {x: 14, y: -4, z: 10, color: GREY, rowIndex: 14, columnIndex: 0},
    {x: 14, y: -3, z: 11, color: GREY, rowIndex: 14, columnIndex: 1},
    {x: 14, y: -2, z: 12, color: GREY, rowIndex: 14, columnIndex: 2},
  ],
  [
    {x: 15, y: -4, z: 11, color: GREY, rowIndex: 15, columnIndex: 0},
    {x: 15, y: -3, z: 12, color: GREY, rowIndex: 15, columnIndex: 1},
  ],
  [
    {x: 16, y: -4, z: 12, color: GREY, rowIndex: 16, columnIndex: 0},
  ]
]

// 设置 南边10子
export function setSouthTenColor (circles, color) {
  for (let i = circles.length - 4; i < circles.length; i++) {
    for (let j = 0; j < circles[i].length; j++) {
      circles[i][j].color = color
    }
  }
}

// 设置 北边10子
export function setNorthTenColor (circles, color) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < circles[i].length; j++) {
      circles[i][j].color = color
    }
  }
}

// 设置 西北边10子
export function setWestNorthTenColor (circles, color) {
  for (let i = 4; i < 8; i++) {
    for (let j = 0; j < 8 - i; j++) {
      circles[i][j].color = color
    }
  }
}

// 设置 东北边10子
export function setEastNorthTenColor (circles, color) {
  for (let i = 4; i < 8; i++) {
    for (let j = 9; j < 17 - i; j++) {
      circles[i][j].color = color
    }
  }
}

// 设置 西南边10子
export function setWestSouthTenColor (circles, color) {
  for (let i = 9; i < 13; i++) {
    for (let j = 0; j < i - 8; j++) {
      circles[i][j].color = color
    }
  }
}

// 设置 东南边10子
export function setEastSouthTenColor (circles, color) {
  for (let i = 9; i < 13; i++) {
    for (let j = 9; j < i + 1; j++) {
      circles[i][j].color = color
    }
  }
}

/**
 * 返回 当前选中棋子 的 跳落子点
 * @param currentCashCircles : 当前棋子布局
 * @param selectedCircle : 当前选中的棋子
 */
export function findJumpToCells (currentCashCircles, selectedCircle) {
  let jumpToCells = [] // 要返回的 当前选中棋子 的 跳落子点
  
  let axes = ['x', 'y', 'z']
  for (let axisIndex = 0; axisIndex < axes.length; axisIndex++) {
    
    let nextAxisIndex = (axisIndex + 1) % axes.length // 当前处理的轴后面的轴，如果当前处理轴是z，那么它后面的轴是x
    
    let circlesLeft = [] // 与选择的棋子 在同一条当前处理轴上的  在它左边的 棋子
    let circlesRight = [] // 与选择的棋子 在同一条当前处理轴上的  在它右边的 棋子
    
    for (let i = 0; i < currentCashCircles.length; i++) {
      for (let j = 0; j < currentCashCircles[i].length; j++) {
        if (currentCashCircles[i][j][axes[axisIndex]] === selectedCircle[axes[axisIndex]] && currentCashCircles[i][j].color !== '#ddd') {
          
          // 在选择点 左边的棋子
          if (currentCashCircles[i][j][axes[nextAxisIndex]] < selectedCircle[axes[nextAxisIndex]]) {
            circlesLeft.push(currentCashCircles[i][j])
          }
          // 在选择点 右边的棋子
          else if (currentCashCircles[i][j][axes[nextAxisIndex]] > selectedCircle[axes[nextAxisIndex]]) {
            circlesRight.push(currentCashCircles[i][j])
          }
        }
      }
    }
    
    // 找棋子左边的 跳落子点
    if (circlesLeft.length > 0) {
      // a) 找到左边的桥点
      let circlesLeftNearest = circlesLeft[circlesLeft.length - 1]
      
      // b) 计算基于 桥点 向左边跳的话，下一步会跳到哪个位置（简称：基于 桥点 找 目标点）
      let distance = selectedCircle[axes[nextAxisIndex]] - circlesLeftNearest[axes[nextAxisIndex]]
      let goalNextAxis = circlesLeftNearest[axes[nextAxisIndex]] - distance  // 目标点的 另外一个轴的值（取的是轴数组中当前处理轴的后面那个轴）
      let goalCurrentAxis = selectedCircle[axes[axisIndex]] // 目标点的 当前处理轴的 值
      
      // c) 判断目标点是否可以落子
      for (let i = 0; i < currentCashCircles.length; i++) {
        for (let j = 0; j < currentCashCircles[i].length; j++) {
          if (
            currentCashCircles[i][j][axes[axisIndex]] === goalCurrentAxis &&
            currentCashCircles[i][j][axes[nextAxisIndex]] === goalNextAxis &&
            currentCashCircles[i][j].color === '#ddd'
          ) {
            // 棋盘中存在这个点，并且这个点是一个空格
            // 判断这个 目标点 和 桥点 之间是否还有棋子
            let exist = false // 默认 目标点 和 桥点 之间没有棋子
            for (let i = 0; i < circlesLeft.length - 1; i++) {
              if (circlesLeft[i][axes[nextAxisIndex]] > goalNextAxis &&
                circlesLeft[i][axes[nextAxisIndex]] < circlesLeftNearest[axes[nextAxisIndex]]) {
                exist = true
                break
              }
            }
            if (!exist) { // 目标点 和 桥点 之间没有棋子，那么这个目标点就是一个 跳落子点
              jumpToCells.push(currentCashCircles[i][j])
            }
          }
        }
      }
    }
    
    // 找棋子右边的 跳落子点
    if (circlesRight.length > 0) {
      // a) 找右边的桥点
      let circlesRightNearest = circlesRight[0]
      
      // b) 基于 桥点 找 目标点
      let distance = circlesRightNearest[axes[nextAxisIndex]] - selectedCircle[axes[nextAxisIndex]]
      let goalNextAxis = circlesRightNearest[axes[nextAxisIndex]] + distance  // 目标点的 另外一个轴的值（取的是轴数组中当前处理轴的后面那个轴）
      let goalCurrentAxis = selectedCircle[axes[axisIndex]] // 目标点的 当前处理轴的 值
      
      // c) 判断目标点是否可以落子
      for (let i = 0; i < currentCashCircles.length; i++) {
        for (let j = 0; j < currentCashCircles[i].length; j++) {
          if (
            currentCashCircles[i][j][axes[axisIndex]] === goalCurrentAxis &&
            currentCashCircles[i][j][axes[nextAxisIndex]] === goalNextAxis &&
            currentCashCircles[i][j].color === '#ddd'
          ) {
            // 棋盘中存在这个点，并且这个点是一个空格
            // 判断这个 目标点 和 桥点 之间是否还有棋子
            let exist = false // 默认 目标点 和 桥点 之间没有棋子
            for (let i = 1; i < circlesRight.length; i++) {
              if (
                circlesRight[i][axes[nextAxisIndex]] > circlesRightNearest[axes[nextAxisIndex]] &&
                circlesRight[i][axes[nextAxisIndex]] < goalNextAxis
              ) {
                exist = true
                break
              }
            }
            if (!exist) { // 目标点 和 桥点 之间没有棋子，那么这个目标点就是一个 跳落子点
              jumpToCells.push(currentCashCircles[i][j])
            }
          }
        }
      }
    }
    
  }
  
  return jumpToCells
}

/**
 * 返回 当前选中棋子 的 移落子点
 * @param currentCashCircles : 当前棋子布局
 * @param selectedCircle : 当前选中的棋子
 */
export function findMoveToCells (currentCashCircles, selectedCircle) {
  let moveToCells = [] // 要返回的 当前选中棋子的 所有 移落子点
  
  let axes = ['x', 'y', 'z']
  for (let axisIndex = 0; axisIndex < axes.length; axisIndex++) {
    
    let nextAxisIndex = (axisIndex + 1) % axes.length // 当前处理的轴后面的轴，如果当前处理轴是z，那么它后面的轴是x
    
    for (let i = 0; i < currentCashCircles.length; i++) {
      for (let j = 0; j < currentCashCircles[i].length; j++) {
        if (
          currentCashCircles[i][j][axes[axisIndex]] === selectedCircle[axes[axisIndex]] &&   // 跟选择点在同一个 当前处理轴 上
          currentCashCircles[i][j].color === '#ddd' &&   // 是一个空格
          Math.abs(currentCashCircles[i][j][axes[nextAxisIndex]] - selectedCircle[axes[nextAxisIndex]]) === 1  // 在选择点相邻的格子
        ) { // 那么这一个点 就是 移落子点
          moveToCells.push(currentCashCircles[i][j])
        }
      }
    }
  }
  
  return moveToCells
}

/**
 * 判断 当前正在下的棋子 是 移过来的 还是 跳过来的 （是通过 移 还是 跳 到现在这一步的）
 * @param currentCashCirclesArr : 当前这一大步的数据（是一个包含这一大步中每一小步的棋子布局的数组）
 * @param selectedCircle ： 当前选中的棋子（当前正在下的棋子，即当前正在走这一大步的棋子）
 * @return : 如果是移过来的，返回移过来的位置点对象，如果不是移过来的，返回 false
 */
export function getIsMoveHere (currentCashCirclesArr, selectedCircle) {
  let isMoveHere = false // 当前棋子是否是 移过来 的，默认不是移过来的（是跳过来的）
  let preStepCircles = currentCashCirclesArr[currentCashCirclesArr.length - 2] // 上一步的棋子布局
  let currentStepCircles = currentCashCirclesArr[currentCashCirclesArr.length - 1] // 当前的棋子布局
  
  let axes = ['x', 'y', 'z']
  for (let axisIndex = 0; axisIndex < axes.length; axisIndex++) {
    
    let nextAxisIndex = (axisIndex + 1) % axes.length // 当前处理的轴后面的第一个轴，如果当前处理轴是z，那么它后面的轴是x
    let nextTwoAxisIndex = (axisIndex + 2) % axes.length // 当前处理的轴后面的第二个轴，如果当前处理轴是y，那么它后面的轴是x
    
    for (let i = 0; i < preStepCircles.length; i++) {
      for (let j = 0; j < preStepCircles[i].length; j++) {
        if (
          preStepCircles[i][j].color !== '#ddd' && // 上一步中，有这么一个 棋子
          preStepCircles[i][j][axes[axisIndex]] === selectedCircle[axes[axisIndex]] && // 这个棋子 与 当前棋子 同在某一条轴上
          Math.abs(preStepCircles[i][j][axes[nextAxisIndex]] - selectedCircle[axes[nextAxisIndex]]) === 1 && // 这个棋子 与 当前棋子 在另外一条轴上的 坐标值相差1
          Math.abs(preStepCircles[i][j][axes[nextTwoAxisIndex]] - selectedCircle[axes[nextTwoAxisIndex]]) === 1 && // 这个棋子 与 当前棋子 在另外第二条轴上的 坐标值相差1
          currentStepCircles[i][j].color === '#ddd'  // 在上一步中，这个位置是一个棋子，但是在这一步中，这个位置是一个空格
        ) {
          isMoveHere = currentStepCircles[i][j] // 是移过来的，返回 原来移过来的位置
          break
        }
      }
      if (isMoveHere) {
        break
      }
    }
    if (isMoveHere) {
      break
    }
  }
  
  return isMoveHere
}

/**
 * 函数的作用是：将 circles 中 oneCircle 这个位置变为 oneColor 这个颜色
 * @param circles : 要改变的布局
 * @param oneCircle : 要改变颜色的棋子位置
 * @param oneColor : 要改变为的颜色
 */
export function setOneCircleToOneColor (circles, oneCircle, oneColor) {
  let actionComplete = false // 动作是否已完成
  for (let i = 0; i < circles.length; i++) {
    for (let j = 0; j < circles[i].length; j++) {
      if (
        circles[i][j].x === oneCircle.x &&
        circles[i][j].y === oneCircle.y
      ) {
        circles[i][j].color = oneColor
        actionComplete = true
        break
      }
    }
    if (actionComplete) {
      break
    }
  }
}

/**
 * 判断两次棋子布局是否完全一样，完全一样返回 true
 * @param circlesOne : 一个棋子布局
 * @param circlesTwo : 另一个棋子布局
 */
export function isBoardLayoutTheSame (circlesOne, circlesTwo) {
  let isTheSame = true // 先假设两次棋子布局完全一样
  for (let i = 0; i < circlesOne.length; i++) {
    for (let j = 0; j < circlesOne[i].length; j++) {
      if (circlesOne[i][j].color !== circlesTwo[i][j].color) {
        isTheSame = false
        break
      }
    }
    if (!isTheSame) {
      break
    }
  }
  
  return isTheSame
}

/**
 * 返回新的 cashCirclesArr (在oldCashCirclesArr的基础上，走了cashCircles 这一小步之后的一大步的数组)
 * @param oldCashCirclesArr : 老的一大步的数据（包含很多小步的布局的数组）
 * @param cashCircles : 最新走的一小步的布局
 * @returns {*}
 */
export function getNewCashCirclesArr (oldCashCirclesArr, cashCircles) {
  let newCashCirclesArr = _.cloneDeep(oldCashCirclesArr)
  // 如果是这个棋子的 首步，那么这一步（cashCircles）肯定跟初始状态不同，应该直接push进 小步状态数组（cashCirclesArr）
  if (newCashCirclesArr.length === 1) {
    newCashCirclesArr.push(cashCircles)
  }
  // 这个棋子至少走出过1步了，那么这时应该判断 这一步 是否跟它在这一大步中走过的位置有重复，如果有重复，就相当于它又回退到了这一步
  else {
    let hasDuplicateSmallStep = false
    for (let i = newCashCirclesArr.length - 2; i >= 0; i--) {
      if (isBoardLayoutTheSame(newCashCirclesArr[i], cashCircles)) {
        newCashCirclesArr = newCashCirclesArr.slice(0, i + 1)
        hasDuplicateSmallStep = true
        break
      }
    }
    if (!hasDuplicateSmallStep) {
      newCashCirclesArr.push(cashCircles)
    }
  }
  
  return newCashCirclesArr
}


/**
 * 根据当前排名 和 当前棋子布局，返回新的 排名
 * @param selectedChessColors : 选择的所有颜色
 * @param circles : 当前棋子布局
 * @param ranking : 当前排名(ranking中只存已经赢了的颜色名，先赢的放前面)
 */
export function updateRanking (selectedChessColors, circles, ranking) {
  let newRanking = ranking.slice()  // 已经完成的
  
  // 当前有 2 个玩家
  if (selectedChessColors.length === 2) {
    if (!newRanking.includes(selectedChessColors[0])) { // 如果第 1 个颜色没有完成
      if (northTenAreTheSameGivenColor(selectedChessColors[0], circles)) {
        newRanking.push(selectedChessColors[0])
      }
    }
    if (!newRanking.includes(selectedChessColors[1])) { // 如果第 2 个颜色没有完成
      if (southTenAreTheSameGivenColor(selectedChessColors[1], circles)) {
        newRanking.push(selectedChessColors[1])
      }
    }
  }
  // 当前有 3 个玩家
  else if (selectedChessColors.length === 3) {
    if (!newRanking.includes(selectedChessColors[0])) { // 如果第 1 个颜色没有完成
      if (northTenAreTheSameGivenColor(selectedChessColors[0], circles)) {
        newRanking.push(selectedChessColors[0])
      }
    }
    if (!newRanking.includes(selectedChessColors[1])) { // 如果第 2 个颜色没有完成
      if (eastSouthTenAreTheSameGivenColor(selectedChessColors[1], circles)) {
        newRanking.push(selectedChessColors[1])
      }
    }
    if (!newRanking.includes(selectedChessColors[2])) { // 如果第 3 个颜色没有完成
      if (westSouthTenAreTheSameGivenColor(selectedChessColors[2], circles)) {
        newRanking.push(selectedChessColors[2])
      }
    }
  }
  // 当前有 4 个玩家
  else if (selectedChessColors.length === 4) {
    if (!newRanking.includes(selectedChessColors[0])) { // 如果第 1 个颜色没有完成
      if (northTenAreTheSameGivenColor(selectedChessColors[0], circles)) {
        newRanking.push(selectedChessColors[0])
      }
    }
    if (!newRanking.includes(selectedChessColors[1])) { // 如果第 2 个颜色没有完成
      if (eastNorthTenAreTheSameGivenColor(selectedChessColors[1], circles)) {
        newRanking.push(selectedChessColors[1])
      }
    }
    if (!newRanking.includes(selectedChessColors[2])) { // 如果第 3 个颜色没有完成
      if (southTenAreTheSameGivenColor(selectedChessColors[2], circles)) {
        newRanking.push(selectedChessColors[2])
      }
    }
    if (!newRanking.includes(selectedChessColors[3])) { // 如果第 4 个颜色没有完成
      if (westSouthTenAreTheSameGivenColor(selectedChessColors[3], circles)) {
        newRanking.push(selectedChessColors[3])
      }
    }
  }
  // 当前有 5 个玩家
  else if (selectedChessColors.length === 5) {
    if (!newRanking.includes(selectedChessColors[0])) { // 如果第 1 个颜色没有完成
      if (northTenAreTheSameGivenColor(selectedChessColors[0], circles)) {
        newRanking.push(selectedChessColors[0])
      }
    }
    if (!newRanking.includes(selectedChessColors[1])) { // 如果第 2 个颜色没有完成
      if (eastNorthTenAreTheSameGivenColor(selectedChessColors[1], circles)) {
        newRanking.push(selectedChessColors[1])
      }
    }
    if (!newRanking.includes(selectedChessColors[2])) { // 如果第 3 个颜色没有完成
      if (eastSouthTenAreTheSameGivenColor(selectedChessColors[2], circles)) {
        newRanking.push(selectedChessColors[2])
      }
    }
    if (!newRanking.includes(selectedChessColors[3])) { // 如果第 4 个颜色没有完成
      if (southTenAreTheSameGivenColor(selectedChessColors[3], circles)) {
        newRanking.push(selectedChessColors[3])
      }
    }
    if (!newRanking.includes(selectedChessColors[4])) { // 如果第 5 个颜色没有完成
      if (westSouthTenAreTheSameGivenColor(selectedChessColors[4], circles)) {
        newRanking.push(selectedChessColors[4])
      }
    }
  }
  // 当前有 6 个玩家
  else if (selectedChessColors.length === 6) {
    if (!newRanking.includes(selectedChessColors[0])) { // 如果第 1 个颜色没有完成
      if (northTenAreTheSameGivenColor(selectedChessColors[0], circles)) {
        newRanking.push(selectedChessColors[0])
      }
    }
    if (!newRanking.includes(selectedChessColors[1])) { // 如果第 2 个颜色没有完成
      if (eastNorthTenAreTheSameGivenColor(selectedChessColors[1], circles)) {
        newRanking.push(selectedChessColors[1])
      }
    }
    if (!newRanking.includes(selectedChessColors[2])) { // 如果第 3 个颜色没有完成
      if (eastSouthTenAreTheSameGivenColor(selectedChessColors[2], circles)) {
        newRanking.push(selectedChessColors[2])
      }
    }
    if (!newRanking.includes(selectedChessColors[3])) { // 如果第 4 个颜色没有完成
      if (southTenAreTheSameGivenColor(selectedChessColors[3], circles)) {
        newRanking.push(selectedChessColors[3])
      }
    }
    if (!newRanking.includes(selectedChessColors[4])) { // 如果第 5 个颜色没有完成
      if (westSouthTenAreTheSameGivenColor(selectedChessColors[4], circles)) {
        newRanking.push(selectedChessColors[4])
      }
    }
    if (!newRanking.includes(selectedChessColors[5])) { // 如果第 6 个颜色没有完成
      if (westNorthTenAreTheSameGivenColor(selectedChessColors[5], circles)) {
        newRanking.push(selectedChessColors[5])
      }
    }
  }
  
  return newRanking
}

/**
 * 判断 北边10子 是否都是给定的颜色
 * @param color : 给定的颜色
 * @param circles : 当前布局
 * @returns {boolean}
 */
export function northTenAreTheSameGivenColor (color, circles) {
  let allIsThisColor = true // 假设这10个点都是给定的颜色
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < circles[i].length; j++) {
      if (circles[i][j].color !== color) {
        allIsThisColor = false
        break
      }
    }
    if (!allIsThisColor) {
      break
    }
  }
  return allIsThisColor
}

/**
 * 判断 当前布局中，南边10子 是否都是给定的颜色
 * @param color : 给定的颜色
 * @param circles : 当前布局
 * @return : 返回 是或否
 */
export function southTenAreTheSameGivenColor (color, circles) {
  let allIsThisColor = true // 假设这10个点都是给定的颜色
  for (let i = circles.length - 4; i < circles.length; i++) {
    for (let j = 0; j < circles[i].length; j++) {
      if (circles[i][j].color !== color) {
        allIsThisColor = false
        break
      }
    }
    if (!allIsThisColor) {
      break
    }
  }
  
  return allIsThisColor
}

/**
 * 判断 东南边10子 是否都是给定的颜色
 * @param color : 给定的颜色
 * @param circles : 当前布局
 * @returns {boolean}
 */
export function eastSouthTenAreTheSameGivenColor (color, circles) {
  let allIsThisColor = true // 假设这10个点都是给定的颜色
  for (let i = 9; i < 13; i++) {
    for (let j = 9; j < i + 1; j++) {
      if (circles[i][j].color !== color) {
        allIsThisColor = false
        break
      }
    }
    if (!allIsThisColor) {
      break
    }
  }
  return allIsThisColor
}

/**
 * 判断 西南方10子 是否都是给定的颜色
 * @param color : 给定的颜色
 * @param circles : 当前布局
 * @returns {boolean} : 如果都是给定的颜色，返回 true
 */
export function westSouthTenAreTheSameGivenColor (color, circles) {
  let allIsThisColor = true // 假设这10个点都是给定的颜色
  for (let i = 9; i < 13; i++) {
    for (let j = 0; j < i - 8; j++) {
      if (circles[i][j].color !== color) {
        allIsThisColor = false
        break
      }
    }
    if (!allIsThisColor) {
      break
    }
  }
  return allIsThisColor
}

/**
 * 判断 东北边10子 是否都是给定的颜色
 * @param color : 给定的颜色
 * @param circles : 当前布局
 * @returns {boolean}
 */
export function eastNorthTenAreTheSameGivenColor (color, circles) {
  let allIsThisColor = true // 假设这10个点都是给定的颜色
  for (let i = 4; i < 8; i++) {
    for (let j = 9; j < 17 - i; j++) {
      if (circles[i][j].color !== color) {
        allIsThisColor = false
        break
      }
    }
    if (!allIsThisColor) {
      break
    }
  }
  return allIsThisColor
}

/**
 * 判断 西北10子 是否都是给定的颜色
 * @param color : 给定的颜色
 * @param circles : 当前布局
 * @returns {boolean}
 */
export function westNorthTenAreTheSameGivenColor (color, circles) {
  let allIsThisColor = true // 假设这10个点都是给定的颜色
  for (let i = 4; i < 8; i++) {
    for (let j = 0; j < 8 - i; j++) {
      if (circles[i][j].color !== color) {
        allIsThisColor = false
        break
      }
    }
    if (!allIsThisColor) {
      break
    }
  }
  return allIsThisColor
}


/**
 * 找到新的 下一步玩家颜色 ，返回
 * @param selectedChessColors : 已经选择的所有颜色
 * @param oldRanking : 老的已完成游戏的颜色
 * @param newRanking : 新的已完成游戏的颜色
 * @param oldCurrentPlayingColor ： 老的当前玩家颜色
 */
export function getNewCurrentPlayingColor (selectedChessColors, oldRanking, newRanking, oldCurrentPlayingColor) {
  let newCurrentPlayingColor = ''
  
  // 如果没有新的颜色完成游戏
  if (oldRanking.length === newRanking.length) {
    let notCompleteColors = getNotCompleteColors(selectedChessColors, oldRanking)  // 没有完成游戏的颜色
    // 找到老的当前玩家颜色所在的索引
    let oldCurrentPlayingColorIndex = 0;
    for (let i = 0; i < notCompleteColors.length; i++) {
      if (notCompleteColors[i] === oldCurrentPlayingColor) {
        oldCurrentPlayingColorIndex = i
        break
      }
    }
    let newCurrentPlayingColorIndex = (oldCurrentPlayingColorIndex + 1) % notCompleteColors.length
    newCurrentPlayingColor = notCompleteColors[newCurrentPlayingColorIndex]
  }
  // 如果有新的颜色完成游戏
  else if (oldRanking.length < newRanking.length) {
    let newCompleteColor = newRanking[newRanking.length - 1] // 新完成游戏的颜色
    let oldNotCompleteColors = getNotCompleteColors(selectedChessColors, oldRanking)  // 老的还没有完成游戏的颜色
    // 找到 新完成游戏的颜色 在老的还没有完成游戏的颜色数组 中 的索引
    let newCompleteColorIndexInOldNotComplete = 0;
    for (let i = 0; i < oldNotCompleteColors.length; i++) {
      if (oldNotCompleteColors[i] === newCompleteColor) {
        newCompleteColorIndexInOldNotComplete = i
        break
      }
    }
    if (oldNotCompleteColors.length === 1) { // 最后一个未完成的也完成了
      newCurrentPlayingColor = ''
    } else if (oldNotCompleteColors.length > 1) {
      let newCurrentPlayingColorIndex = (newCompleteColorIndexInOldNotComplete + 1) % oldNotCompleteColors.length
      newCurrentPlayingColor = oldNotCompleteColors[newCurrentPlayingColorIndex]
    }
  }
  
  return newCurrentPlayingColor
}

/**
 * 找到还没有完成比赛的颜色。返回一个数组 ['red','orange']
 * @param choosedColors : 当前选择的所有棋子颜色（数组：['red','orange'...]），顺序按颜色面板中的顺序来排
 * @param ranking : 已经完成比赛的颜色（数组：['red','orange']），先赢的排前面
 */
export function getNotCompleteColors (choosedColors, ranking) {
  let notCompleteColors = []
  for (let i = 0; i < choosedColors.length; i++) {
    if (!ranking.includes(choosedColors[i])) {
      notCompleteColors.push(choosedColors[i])
    }
  }
  
  return notCompleteColors
}