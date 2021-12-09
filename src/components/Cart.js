import { useEffect, useState } from 'react';
import { Button, Col, Card, Form, Alert, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../context/Context';
import Rating from './Rating';
import Footer from './Footer';
import '../styles/product.css';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const [alert, setAlert] = useState(false);

  return (
    <div className="back">
      <Row className="mx-2">
        <Col className="my-2">
          {cart.length === 0 ? (
            <Card className="my-3">
              <Card.Body>
                <Card.Title>No orders</Card.Title>
              </Card.Body>
            </Card>
          ) : (
            <></>
          )}
          {cart.map((prod) => (
            <Card className="my-3" key={prod.id}>
              <div className="image-container-cart">
                <Card.Img
                  className="image-cart"
                  variant="top"
                  src={prod.image}
                  alt={prod.name}
                />
              </div>
              <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle className="my-2" style={{ paddingBottom: 10 }}>
                  <span className="mt-2">$ {prod.price.split('.')[0]}</span>
                  {prod.fastDelivery ? (
                    <div className="mt-2">Fast Delivery</div>
                  ) : (
                    <div className="my-2">4 days delivery</div>
                  )}
                  <Rating rating={prod.ratings} />
                  <Row>
                    <Col className="center-block mt-3">
                      <Form.Control
                        as="select"
                        value={prod.qty}
                        onChange={(e) =>
                          dispatch({
                            type: 'CHANGE_CART_QTY',
                            payload: {
                              id: prod.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(prod.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col className="mt-3">
                      <Button
                        type="button"
                        variant="dark"
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: prod,
                          })
                        }
                      >
                        <AiFillDelete fontSize="20px" />
                      </Button>
                    </Col>
                  </Row>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col className="my-4">
          <Card>
            <Card.Body>
              {alert ? (
                <Alert variant="warning d-flex justify-content-between">
                  <strong>HA-HA that was a joke!</strong>
                  <span> How can you buy a meme? </span>
                  <span
                    type="button"
                    onClick={() => setAlert(false)}
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </span>
                </Alert>
              ) : (
                <></>
              )}
              <Card.Title>Total: $ {total}</Card.Title>
              <Card.Subtitle className="my-3">
                Subtotal ({cart.length})
              </Card.Subtitle>
              <Button
                type="button"
                variant="warning"
                disabled={cart.length === 0}
                onClick={() => setAlert(true)}
              >
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Cart;
