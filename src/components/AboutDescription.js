const TEXT_COLOR = '#fff'

const AboutDescription = () => {
  const {
    wrapper,
    card,
    cardImage,
    cardContent
  } = aboutDescriptionStyles;
  
  return (
    <div style={wrapper}>
      <div style={card}>
        <div style={cardImage}>
          <img src=''></img>
        </div>
        <div style={cardContent}>

        </div>
      </div>
    </div>
  );
}

const aboutDescriptionStyles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 40
  },
  card: {

  },
  cardImage: {

  },
  cardContent: {
    
  }
}

export default AboutDescription;