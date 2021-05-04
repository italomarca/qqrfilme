import React from 'react'
import {
  Link
} from 'react-router-dom'

const TEXT_COLOR = '#fff'

const Header = () => {
  const { wrapper, leftSlot, leftSide, rightSide } = headerStyles;
  return (
    <div style={wrapper}>
      <div style={leftSide}>
        <Link to="/">
          <div style={leftSlot}><p>INÍCIO</p></div>
        </Link>
        <Link to="/sobre">
          <div style={leftSlot}><p>SOBRE</p></div>
        </Link>
        <div style={leftSlot}><p>CONTATO</p></div>
      </div>
      <div style={rightSide}>
        <div><p>🇧🇷</p></div>
        <div><p>🇺🇸</p></div>
      </div>
    </div>
  )
}

const headerStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'space-between',
    flexGrow: 1
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 50
  },
  leftSlot: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    color: TEXT_COLOR,
    cursor: 'pointer',
    margin: 50
  },
}

export default Header;