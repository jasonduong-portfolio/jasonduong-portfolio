
import React from 'react';  
import TitleBar from '../TitleBar/TitleBar.tsx';
import T_accent_L from '../../assets/resume_assets/resume_title_accent_l.svg';
import T_accent_R from '../../assets/resume_assets/resume_title_accent_r.svg';

interface ResumeWindowProps {
  onClose: () => void; // Function to close the popup window
}

const ResumeWindow: React.FC<ResumeWindowProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg h-[80vh] w-[80vw]">
        <button onClick={onClose} className="top-1 left-1 bg-gray-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Close</button>
        <p>This is the popup content.</p>

      </div>
    </div>
  );
};

export default ResumeWindow;
