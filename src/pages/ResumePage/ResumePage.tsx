// ResumePage.tsx
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.tsx';
import ResumeButton from '../../components/ResumeButton/ResumeButton.tsx';
import ResumeWindow from '../../components/ResumeWindow/ResumeWindow.tsx';
import EduIcon from '../../assets/resume_assets/edu_icon.svg';
import WorkIcon from '../../assets/resume_assets/work_icon.svg';
import SkillIcon from '../../assets/resume_assets/skill_icon.svg';
import T_accent_L from '../../assets/resume_assets/resume_title_accent_l.svg';
import T_accent_R from '../../assets/resume_assets/resume_title_accent_r.svg';
import TitleBar from '../../components/TitleBar/TitleBar.tsx';
import CustomCursor from '../../assets/cursors/normal.cur'
import EducationDisplay from '../../components/EducationDisplay/EducationDisplay.tsx';


const ResumePage: React.FC = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  };

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };

  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="max-h-[100vh] flex flex-col items-center justify-center min-h-screen bg-[#011826]" style={{ cursor: `url(${CustomCursor}), pointer` }}>
      <Navbar/>
      <div className ="">
        <TitleBar
        leftImage={T_accent_L}
        rightImage={T_accent_R}
        title='RESUME'
        />
      </div>
      <div className="flex flex-wrap items-center justify-center z-10 m-12 mb-24">
          <ResumeButton onClick={togglePopup1} path={EduIcon} text = "EDUCATION"/>
          <ResumeButton onClick={togglePopup2} path={WorkIcon} text = "EXPERIENCE"/>
          <ResumeButton onClick={togglePopup3} path={SkillIcon} text = "SKILLS"/>
      </div>
      <div className="z-20">
        {isOpen1 && <EducationDisplay onClose={togglePopup1} />}
        {isOpen2 && <ResumeWindow onClose={togglePopup2} />}
        {isOpen3 && <ResumeWindow onClose={togglePopup3} />}
      </div>
    </div>
  );
};

export default ResumePage;
