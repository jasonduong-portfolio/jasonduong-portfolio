import React from 'react';

interface TitleBarProps {
  leftImage: string;
  title: string;
  rightImage: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ leftImage, title, rightImage }) => {
  return (
      <div className="flex items-center justify-between pt-20">
        <img src={leftImage} alt="Left" className="h-[10rem] min-h-[10rem] min-w-0 w-[100%] ml-[6lvw] shrink" />
        <h1 className="font-gill-sans text-white text-5xl -mt-[7.5lvh] ml-5 mr-5 flex-none">{title}</h1>
        <img src={rightImage} alt="Right" className="h-[10rem] min-h-[10rem] min-w-0 w-[100%] mr-[6lvw] shrink" />
      </div>
  );
};

export default TitleBar;
