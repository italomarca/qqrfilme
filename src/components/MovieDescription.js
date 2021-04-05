import Dotdotdot from 'react-dotdotdot';

const TEXT_COLOR = '#fff'

const MovieDescription = ({movie, updateMovie}) => {
  const {
    wrapper,
    left,
    image,
    title,
    description,
    footerWrapper,
    rateAndYear,
    footerButton
  } = movieDescriptionStyles;
  
  return (
    <>
      <div style={wrapper}>
        <div style={left}>
          <div style={title}>{movie.name}</div>
          <div style={description}><Dotdotdot clamp={3}>{movie.description}</Dotdotdot></div>
        </div>
        {movie.imageUri && <img style={image} src={movie.imageUri} alt="movie" />}
      </div>
      <div style={footerWrapper}>
        <div style={rateAndYear}>
          <p>{`${movie.stars} - ${movie.year}`}</p>
        </div>
        <div style={footerButton} onClick={() => window.open(`https://www.google.com/search?q=assistir ${movie.name}`)}><p>EH ISSO</p></div>
        <div style={footerButton} onClick={updateMovie}><p>MEH</p></div>
      </div>
    </>
  );
}

const movieDescriptionStyles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 40
  },
  left: {
    flex: 1,
    maxWidth: '70%'
  },
  image: {
    maxHeight: 500,
    maxWidth: 300,
    marginTop: 100,
    marginLeft: 30
  },
  title: {
    color: TEXT_COLOR,
    fontSize: 98,
  },
  description: {
    marginTop: 20,
    color: TEXT_COLOR,
    fontSize: 36
  },
  rateAndYear: {
    flex: 1,
    color: TEXT_COLOR,
    margin: 10,
    height: 40,
    fontSize: 26
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between'
  },
  footerButton: {
    margin: 10,
    flex: 1,
    color: '#000',
    backgroundColor: TEXT_COLOR,
    fontWeight: 600,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }
}

export default MovieDescription;