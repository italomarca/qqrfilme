import React from 'react'

const TEXT_COLOR = '#fff'

const Loading = () => {
  return (
    <div style={loadingStyles.wapper}>
      <p>Peraê...</p>
    </div>
  )
}
const loadingStyles = {
  wapper: {
    color: TEXT_COLOR,
    fontSize: 144,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default Loading;