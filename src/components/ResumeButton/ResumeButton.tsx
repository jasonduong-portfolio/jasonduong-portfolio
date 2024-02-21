import React, { useRef, useState } from 'react';
import './ResumeButton.css'
import LinkCursor from '../../assets/cursors/link.cur'

interface ResumeButtonProps {
  onClick: () => void;
  path: string; // Path to the SVG file
  text: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ onClick, path, text }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    if (!buttonRef.current || !cardRef.current) return;

    const button = buttonRef.current;
    const card = cardRef.current;
    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left; // X position of mouse relative to the button
    const y = event.clientY - rect.top; // Y position of mouse relative to the button

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const dx = x - centerX; // Distance from mouse to button center on X-axis
    const dy = y - centerY; // Distance from mouse to button center on Y-axis

    const tiltX = (dy / centerY) * 30; // Maximum tilt angle of 15 degrees
    const tiltY = -(dx / centerX) * 30; // Maximum tilt angle of 15 degrees

    button.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    card.style.transform = `scale(${isHovered ? 1.2 : 1})`; // Scale card when hovered
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!buttonRef.current || !cardRef.current) return;
    buttonRef.current.style.transform = 'none'; // Reset transform when mouse leaves button
    cardRef.current.style.transform = 'none'; // Reset transform when mouse leaves button
  };

  return (
    <div
      className="relative transition-transform duration-300 ease-in-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className="duration-300 ease-in-out">
        <button
          ref={buttonRef}
          onClick={onClick}
          className="z-10 relative rounded-lg mr-20 ml-20"
          style={{ cursor: `url(${LinkCursor}), pointer` }}
        >
          <img src={path} alt="Button Icon" className="flex-none h-[auto] w-[15rem] resume-button" />
          <p className="pt-1 font-gill-sans text-white text-2xl">{text}</p>
        </button>
      </div>
    </div>
  );
};

export default ResumeButton;
