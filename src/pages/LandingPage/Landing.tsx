// Your LandingPage component
import './Landing.css';
import ChatBox from '../../components/ChatBox/ChatBox.tsx';
import NavBar from '../../components/Navbar/Navbar.tsx';
import FlippingCard from '../../components/FlippingCard/FlippingCard.tsx';
import ProfileImage from '../../assets/pictures/me.png';



const LandingPage: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center">
          <FlippingCard imageSrc={ProfileImage} altText="Landing Image" />
          <div className="w-70">
          <ChatBox />
        </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
