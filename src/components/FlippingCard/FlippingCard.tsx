import React, { useState, useRef, useEffect } from 'react';
import './FlippingCard.css';
import toothlessGif from '../../assets/pictures/toothless.gif';

const FlippingCard = ({ imageSrc, altText }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  let flipTimeout;

  const handleMouseEnter = () => {
    flipTimeout = setTimeout(() => {
      setIsFlipped(true);
    }, 3000);
  };

  const handleMouseLeave = () => {
    clearTimeout(flipTimeout);
    setIsFlipped(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(flipTimeout);
    };
  }, [flipTimeout]);

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      const cardBack = document.getElementById('card-back');

      if (cardBack) {
        cardBack.style.width = `${width}px`;
        cardBack.style.height = `${height}px`;
      }
    }
  }, [isFlipped]);

  return (
    <div
      className={`w-[40vh] h-[40vh] min-h-[40vh] overflow-hidden mr-10 card ${isFlipped ? 'is-flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card">
        <div className="card-inner">
          <div className={`card-front ${isFlipped ? 'hidden' : ''} w-full h-full`}>
            <img src={imageSrc} className="w-full h-full object-cover" alt={altText} />
          </div>
          <div id="card-back" className={`card-back ${isFlipped ? 'show' : ''} border`} style={{ width: '100%', height: '100%' }}>
            <div className="bg-green-100 h-full w-full flex items-center justify-center">
              <img className = {`gif ${isFlipped ? 'show' : ''}`} src={toothlessGif} alt="Toothless" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
