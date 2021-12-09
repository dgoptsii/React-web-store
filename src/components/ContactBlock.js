import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Card,
  Button,
  Form,
  Row,
  Spinner,
  Col,
  Container,
} from 'react-bootstrap';
import { useState } from 'react';
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function getGeoLocation(setLocation) {
  const geo = navigator.geolocation;
  geo.getCurrentPosition(
    (currentPosition) => {
      setLocation([
        currentPosition.coords.latitude,
        currentPosition.coords.longitude,
      ]);
    },
    () => {
      setLocation([50.5151488, 30.47424]);
    }
  );
}

function Map() {
  const [location, setLocation] = useState(null);
  React.useEffect(() => getGeoLocation(setLocation), []);
  var innerPage;
  if (!location) {
    innerPage = (
      <div className="spinner-main d-flex justify-content-center">
        <Spinner animation="spinner-border" role="status" variant="warning" />
      </div>
    );
  } else {
    innerPage = (
      <MapContainer
        className="map"
        center={location}
        zoom={10}
        style={{ height: 400, width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={location}>
          <Popup>Hi! We are here!</Popup>
        </Marker>
      </MapContainer>
    );
  }

  return <div>{innerPage}</div>;
}

function Contacts() {
  return (
    <>
      <Card className="mt-4" style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Our contacts</Card.Title>
          <Card.Text className="d-flex flex-column my-0">
            <span className="my-1">Email: best.meme@gmail.com</span>
            <span>Phone: +123-456-78-90</span>
          </Card.Text>
          <Card.Text className="d-flex justify-content-between ">
            <span className="media me-2">
              <a
                href="https://twitter.com/memes/status/1466935641686556675/photo/1"
                className="text-warning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </span>
            <span className="media me-2">
              <a
                href="https://www.google.com/search?q=facebook+&sxsrf=AOaemvJIq6OOhxLdo9h0OgQaFl4y0EQU2g%3A1638622489934&ei=GWWrYYfKOILg7_UP7ZmRmAw&ved=0ahUKEwjHuru7mMr0AhUC8LsIHe1MBMMQ4dUDCA4&uact=5&oq=facebook+&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgAEEMyBQgAEIAEMggIABCABBCxAzIECAAQQzIICAAQgAQQsQMyBAgAEEMyDgguEIAEELEDEMcBENEDMggIABCABBCxAzIFCAAQgAQ6BwgjELADECc6BwgAEEcQsAM6BwgAELADEENKBAhBGABQnwRYnwRg1AVoAnACeACAAYYBiAGGAZIBAzAuMZgBAKABAcgBCsABAQ&sclient=gws-wiz"
                className="text-warning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </span>
            <span className="media me-2">
              <a
                href="https://www.instagram.com/p/CW_c-RIBVl5/"
                className="text-warning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </span>
            <span className="media me-2">
              <a
                href="https://www.youtube.com/watch?v=Szhrn-nQe5E"
                className="text-warning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </span>
            <span className="media me-2">
              <a
                href="https://www.youtube.com/watch?v=Szhrn-nQe5E"
                className="text-warning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

function ContactBlock() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [alertWindow, setAlert] = useState(null);

  const closeAlert = (e) => {
    setAlert(null);
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
    const message = { name, phone, email, comments };
     fetch('http://localhost:3000/comments', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setName('');
    setPhone('');
    setEmail('');
    setComments('');
    setAlert(
      <div
        className="alert alert-warning alert-dismissible d-flex justify-content-between"
        role="alert"
      >
        <strong>Thank you!</strong>
        <span
          type="button"
          onClick={closeAlert}
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </span>
      </div>
    );
  };
  return (
    <>
      <Container fluid="md mb-4">
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm>
            <Map />
            <Contacts />
          </Col>
          <Col sm>
            <Card className="my-4" style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Drop us a message</Card.Title>
                {alertWindow}
                <Form onSubmit={hadleSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="phone"
                      placeholder="Phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                      as="textarea"
                      style={{ height: '100px' }}
                      placeholder="Any thoughts?"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="warning" type="submit">
                    Send
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactBlock;
