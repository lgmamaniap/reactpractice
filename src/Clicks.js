import React from 'react'

const Clicks = ({clicks}) => {
  return (
    <p>{clicks.join(", ")}</p>
  )
}

export default Clicks