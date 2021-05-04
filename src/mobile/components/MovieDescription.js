import React, {Text} from 'react';
import Dotdotdot from 'react-dotdotdot';


const SECONDARY_COLOR = '#fff'
const PRIMARY_COLOR = 'rgba(0,0,0,0.8)'

const MovieDescription = ({movie, updateMovie}) => {
  const {
    wrapper,
    title,
    description,
    footerWrapper,
    rateAndYear,
    footerButton
  } = movieDescriptionStyles;
  
  return (
    <>
      <div style={wrapper}>
        <div style={{display: 'block', marginBottom: 12, marginTop: 64}}>
          <span style={title}>{movie.name}</span>
        </div>
        <div style={{display: 'block'}}>
          <span style={description}>{movie.description}</span>
        </div>
        <div style={{display: 'block', marginTop: 18}}>
          <span style={rateAndYear}>{`${movie.stars} - ${movie.year}`}</span>
        </div>
      </div>
      <div style={footerWrapper}>
        <div style={footerButton} onClick={() => window.open(`https://www.google.com/search?q=assistir ${movie.name}`)}><p>EH ISSO</p></div>
        <div style={footerButton} onClick={updateMovie}><p>MEH</p></div>
      </div>
    </>
  );
}

const movieDescriptionStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 12,
  },
  title: {
    color: '#000',
    backgroundColor: 'rgba(255,255,255,0.9)',
    fontSize: 58,
  },
  description: {
    marginTop: 20,
    fontSize: 28,
    textAlign: 'center',
    color: '#000',
    backgroundColor: 'rgba(255,255,255,0.9)',
    // color: '#fff',
    // backgroundColor: 'rgba(0,0,0,0.9)',
  },
  rateAndYear: {
    flex: 1,
    color: '#000',
    backgroundColor: 'rgba(255,255,255,0.9)',
    marginTop: 18,
    height: 40,
    fontSize: 26
  },
  footerWrapper: {
    display: 'flex',
    flex: 1,
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButton: {
    flex: 1,
    margin: 10,
    // flex: 1,
    color: PRIMARY_COLOR,
    backgroundColor: SECONDARY_COLOR,
    fontWeight: 600,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 50,
    width: 180,
    cursor: 'pointer',
  }
}

export default MovieDescription;