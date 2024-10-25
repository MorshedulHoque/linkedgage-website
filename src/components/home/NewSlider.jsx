import React, { useState, useEffect } from 'react';

// Import images as specified
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';

const content = [
  { title: "Click to Spark Conversations!", description: "Tired of crafting comments from scratch? Just click the LinkedGage icon attached to every post’s comment section, and you’re ready to roll.", img: img1 },
  { title: "Tone It Up", description: "Choose the right tone for any post—whether you want to sound professional, supportive, or enthusiastic, LinkedGage’s popup offers various emotions for perfectly tailored responses.", img: img2 },
  { title: "Your Comment, Your Way", description: "Once your comment is generated, it’s placed directly in the comment box. Feel free to edit it or simply hit ‘Comment’ to share it instantly.", img: img3 }
];

function NewSlider() {
  const [selectedImage, setSelectedImage] = useState(content[0].img);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [selectedImage]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const divStyle = (index) => ({
    padding: '20px 20px',
    border: '1px solid transparent',
    borderRadius: '10px',
    backgroundColor: selectedIndex === index ? '#2c3e50' : 'transparent',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
    transform: selectedIndex === index ? 'scale(1.05)' : 'scale(1)',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    minHeight: '100px',
  });

  const numberContainerStyle = {
    fontWeight: 'bold',
    fontSize: '30px',
    marginRight: '20px',
    color: '#ffffff',
  };

  const lineStyle = {
    height: '4px',
    width: '100%',
    backgroundColor: '#007bff',
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    borderRadius: '2px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '0 50px',
    flexDirection: 'column', // Align items vertically for the heading and content
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginRight: '80px',
    padding: '5px',
  };

  const imageContainerStyle = {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    transition: 'opacity 0.5s ease-in-out',
    opacity: imageLoaded ? 1 : 0,
    width: '100%',
    height: 'auto',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5em', // Adjust size to match the design
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subheadingStyle = {
    textAlign: 'center',
    fontSize: '1.25em',
    color: '#d3d3d3',
    marginBottom: '40px',
  };

  return (
    <div style={containerStyle}>
      {/* Heading Section */}
      <div>
        <h1 style={headingStyle}>Engage in a Snap: Click, Engage, Done!</h1>
        <p style={subheadingStyle}>
          Transform your LinkedIn interactions with personalized, impactful comments at the click of a button!
        </p>
      </div>

      {/* Content Section */}
      <div style={{ display: 'flex' }}>
        <div style={columnStyle}>
          {content.map((item, index) => (
            <div key={index} 
                 style={divStyle(index)} 
                 onClick={() => {
                   setSelectedImage(item.img);
                   setSelectedIndex(index);
                 }}
                 role="button"
                 tabIndex={0}
                 onKeyPress={(e) => {
                   if (e.key === 'Enter') {
                     setSelectedImage(item.img);
                     setSelectedIndex(index);
                   }
                 }}>
              {selectedIndex === index && <div style={lineStyle}></div>}
              <div style={numberContainerStyle}>{`${index + 1}/`}</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '14px' }}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={imageContainerStyle}>
          <img 
            src={selectedImage} 
            alt={content[selectedIndex].title} 
            style={imageStyle} 
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
}

export default NewSlider;