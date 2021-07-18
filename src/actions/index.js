export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//actionをreturnするaction createrの定義
export const increment = () => ({
    type: INCREMENT
  })

export const decrement = () => ({
    type: DECREMENT
  })
