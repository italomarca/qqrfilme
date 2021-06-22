import React from 'react'
import {
  Link, 
  useLocation,
} from 'react-router-dom'
import { isAtHome } from '../helpers';

const TEXT_COLOR = '#fff'

const Header = () => {
  const { wrapper, leftSlot, leftSide } = styles;
  const location = useLocation();

  return (
    <div style={wrapper}>
      <div style={leftSide}>
        {!isAtHome(location)
          ? (
            <Link to="/" style={styles.noTextDecoration}>
              <div style={leftSlot}><p>INÍCIO</p></div>
            </Link>
          )
          : null
        }
        {/* <Link to="/sobre" style={styles.noTextDecoration}>
          <div style={leftSlot}><p>SOBRE</p></div>
        </Link> */}
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    left: 0,
    top: 0,
    flex: 1,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'space-between',
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
    marginLeft: 10,
    marginRight: 10,
  },
  noTextDecoration: {
    textDecoration: 'none',
  }
}

export default Header;