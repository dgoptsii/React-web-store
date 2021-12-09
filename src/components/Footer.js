import { GiFootprint } from 'react-icons/gi';

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-light  py-2">
        <p className="my-1 h1">
          <GiFootprint />
        </p>
        <p className="my-1">Yes, we have a footer</p>
        <p className="my-1">© 2021</p>
      </div>
    </>
  );
};

export default Footer;
