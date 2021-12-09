import React from 'react';
import Slider from './Slider';
import ContactBlock from './ContactBlock';
import Footer from './Footer';
import {
  AiOutlineEye,
  AiOutlineInfoCircle,
  AiOutlineMessage,
} from 'react-icons/ai';
import Charts from './Charts';
import '../styles/main.css';

const Heading = ({ message, element }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center  text-light h2 my-4">
      <p className="my-0">{message}</p>
      <p className="my-0">{element}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="about d-flex flex-column justify-content-center align-items-center  text-light mx-4 px-4 ">
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id
        donec ultrices. Neque ornare aenean euismod elementum nisi quis
        eleifend. Pulvinar sapien et ligula ullamcorper malesuada proin libero
        nunc. Tortor posuere ac ut consequat semper viverra nam libero justo.
      </p>
    </div>
  );
};

function MainPage() {
  return (
    <>
      <Slider />
      <Heading message={'LOOK AT THAT'} element={<AiOutlineEye />} />
      <Charts />
      <Heading message={'ABOUT'} element={<AiOutlineInfoCircle />} />
      <About />
      <Heading message={'CONTACT US'} element={<AiOutlineMessage />} />
      <ContactBlock />
      <Footer />
    </>
  );
}

export default MainPage;
