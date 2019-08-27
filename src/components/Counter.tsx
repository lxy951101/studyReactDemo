import * as React from 'react';
const { useReducer } = React;

const initialCount = 0;
const initialState = {count: 0};

const init = (initialCount) => {
  return {count: initialCount};
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

export const Counter = () => {
  // 指定初始state
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [state, dispatch] = useReducer(reducer, {
  //   count: initialCount,
  // });
  // 惰性初始化
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  )
}