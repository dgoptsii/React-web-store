import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/notFound.css';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function NotFound() {
  let location = useLocation();

  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center   text-dark  ">
        <Image
          className="not-found-img mt-4 "
          src="https://zn.ua/img/forall/u/13/97/dog.jpg"
        />
        <Card className="mt-4 ">
          <Card.Body>
            <Card.Title>Well, there is nothing to see here...</Card.Title>
            <Card.Title>Go somewhere else!</Card.Title>
            <Card.Text className="d-flex flex-column my-0 ">
              No match for:
              <code className="code my-1 text-warning h5">{location.pathname}</code>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default NotFound;
