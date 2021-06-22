import React from 'react';

const SECONDARY_COLOR = '#fff'
const PRIMARY_COLOR = 'rgba(0,0,0,0.8)'

const MovieDescription = ({movie, updateMovie}) => {
  const {
    movieDescirptionWrapper,
    title,
    description,
    footerWrapper,
    rateAndYear,
    footerButton
  } = styles;
  
  return (
    <div style={styles.wrapper}>
      <div style={movieDescirptionWrapper}>
        <div style={{marginBottom: 12, marginTop: 64}}>
          <span style={title}>{movie.name}</span>
        </div>
        <div>
          <span style={description}>{movie.description}</span>
        </div>
        <div style={{marginTop: 18}}>
          <span style={rateAndYear}>{`${movie.stars} - ${movie.year}`}</span>
        </div>
      </div>
      <div style={footerWrapper}>
        <div style={footerButton} onClick={() => window.open(`https://www.google.com/search?q=assistir ${movie.name}`)}><p>EH ISSO</p></div>
        <div style={footerButton} onClick={updateMovie}><p>OUTRO</p></div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  movieDescirptionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 12,
    marginBottom: 106,
    maxWidth: 1200,
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
    color: PRIMARY_COLOR,
    backgroundColor: SECONDARY_COLOR,
    fontWeight: 600,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 50,
    width: 180,
    cursor: 'pointer',
    maxWidth: 400,
    minWidth: 150,
  }
}

export default MovieDescription;