import React, { useState } from 'react'

export default function Counter (props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times with { props.swag }</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
