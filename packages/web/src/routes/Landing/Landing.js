import React, { useState } from 'react';

function counterState() {
  const [ state, setState ] = useState({ count: 1});
  const actions = {
    increment: () => setState({ count: state.count + 1 }),
    decrment: () => setState({ count: state.count - 1 }),
  }
  return {
    state,
    ...actions
  }
}
const Landing = () => {

  const { state, increment } = counterState();
  return (
    <div>
      <h1>Landing</h1>
      <div>
        <h2>Count: {state.count}</h2>
        <p>
          <button onClick={increment}>increment</button>
        </p>
      </div>
    </div>
  )
}

export default Landing;
