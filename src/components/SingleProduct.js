import { Card, Button } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';
import '../styles/product.css';

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Card className="my-2 ">
      <div className="image-container">
        <Card.Img
          className="image-product"
          variant="top"
          src={prod.image}
          alt={prod.name}
        />
      </div>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle className="mt-2 " style={{ paddingBottom: 10 }}>
          <div className="my-2">
            <span className="mt-2">$ {prod.price.split('.')[0]}</span>
            {prod.fastDelivery ? (
              <div className="my-2">Fast Delivery</div>
            ) : (
              <div className="my-2">4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </div>
          <span className="mt-2">In stock: {prod.inStock}</span>
        </Card.Subtitle>
        {cart.some((p) => p.id === prod.id) ? (
          <Button
            variant="outline-dark"
            onClick={() =>
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: prod,
              })
            }
          >
            Not buy
          </Button>
        ) : (
          <Button
            variant="warning"
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: prod,
              })
            }
            disabled={!prod.inStock}
          >
            {!prod.available ? 'Out of Stock' : 'Buy'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
