import React from 'react';

interface ResumeWindowTitleBarProps {
  leftImage: string;
  title: string;
  rightImage: string;
}

const ResumeWindowTitleBar: React.FC<ResumeWindowTitleBarProps> = ({ leftImage, title, rightImage }) => {
  return (
      <div className="flex items-center justify-between pt-8">
        <img src={leftImage} alt="Left" className="h-[10rem] min-h-[10rem] min-w-0 w-[100%] ml-[3lvw] shrink" />
        <h1 className="font-gill-sans text-white text-3xl -mt-[7.5lvh] ml-5 mr-5 flex-none font-habibi">{title}</h1>
        <img src={rightImage} alt="Right" className="h-[10rem] min-h-[10rem] min-w-0 w-[100%] mr-[3lvw] shrink" />
      </div>
  );
};

export default ResumeWindowTitleBar;
