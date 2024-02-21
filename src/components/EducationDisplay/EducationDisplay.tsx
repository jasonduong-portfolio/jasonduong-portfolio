import React from 'react';
import ResumeWindowTitleBar from '../ResumeWindowTitleBar/ResumeWindowTitleBar.tsx';
import T_accent_L from '../../assets/resume_assets/resume_title_accent_l.svg';
import T_accent_R from '../../assets/resume_assets/resume_title_accent_r.svg';

interface EducationDisplayProps {
  onClose: () => void; // Function to close the popup window
}

const EducationDisplay: React.FC<EducationDisplayProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#011420] bg-opacity-75 z-50">
      <div className="relative p-6 rounded-lg shadow-lg bg-[#080808] h-[80vh] w-[80vw] overflow-y-auto">
        <div className="absolute top-0 left-0 right-0">
        <button onClick={onClose} className="top-1 left-1 bg-gray-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Close</button>
          <ResumeWindowTitleBar
            leftImage={T_accent_L}
            rightImage={T_accent_R}
            title='EDUCATION'
          />


          <div className='text-white font-habibi pr-24 pl-24'>
            <div className="flex flex-wrap justify-center text-xl text-white mt-[-4vh]">
            <div className="flex items-center justify-between w-[100vw]">
              <ul className="flex-none">
                <li>Berkeley</li>
              </ul>
              <ul className="flex-none">
                <li>May 2025</li>
              </ul>
            </div>

            <div className="flex items-center justify-between w-[100vw]">
              <ul className="flex-none">
                <li>Computer Science B.A.</li>
              </ul>
              <ul className="flex-none">
                <li>GPA: 3.5/4.0</li>
              </ul>
            </div>

            </div>


            <div className="pt-8">

              <h3 className="text-xl">Software Engineering</h3>
              <div className="flex flex-wrap gap-[2.5%] justify-center">
                <div className="w-[30%] p-4">
                  <ul className="list-disc">
                    <li className="pb-2">Data Structures</li>
                    <li className="pb-2">Machine Structure</li>
                    <li className="pb-2">Designing Information Systems</li>
                  </ul>
                </div>
                <div className="w-[30%] p-4">
                  <ul className="list-disc">
                    <li className="pb-2">Computer Security</li>
                    <li className="pb-2">Structure and Interpretation of Computer Programs</li>
                    <li className="pb-2">Introduction to Software Engineering</li>
                  </ul>
                </div>
                <div className="w-[30%] p-4">
                  <ul className="list-disc">
                    <li className="pb-2">Introduction to Artificial Intelligence</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl">Web Development and Design</h3>
              <div className="flex flex-wrap gap-[2.5%] justify-center">
                <div className="w-[30%] p-4">
                  <ul className="list-disc">
                    <li className="pb-2">Multimedia Arts Program</li>
                    <li className="pb-2">Cubstart: Web (Decal) </li>
                  </ul>
                </div>
                  <div className="w-[30%] p-4">
                  <ul className="list-disc">
                    <li className="pb-2">AP2D Art</li>
                    <li className="pb-2">Web Design Decal</li>
                  </ul>
                </div>
                  <div className="w-[30%] p-4">
                  <ul className="list-disc">
                    <li className="pb-2">Cubstart: IOS (Decal)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl">Data Science</h3>
              <div className="flex flex-wrap gap-[2.5%] justify-center">
                <div className="w-[30%] p-4">
                  <ul className="list-disc">
                    <li className="pb-2">Foundations of Data Science</li>
                  </ul>
                </div>
                  <div className="w-[30%] p-4">
                  <ul className="list-disc">
                    <li className="pb-2">Principles and Techniques of Data Science</li>
                  </ul>
                </div>
                  <div className="w-[30%] p-4">
                  <ul className="list-disc">
                    <li className="pb-2">Discrete Mathematics  & Proability Theory</li>
                  </ul>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDisplay;
