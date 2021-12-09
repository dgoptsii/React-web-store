import { Button, Card, Row, Col, Form, FormControl } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';

const Filters = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title className="pb-2">Filter products</Card.Title>
        <Card.Subtitle>
          <div className="filters">
            <Row>
              <Col sm>
                <Form.Check
                  inline
                  label="Ascending"
                  name="group1"
                  type="radio"
                  id={`inline-1`}
                  onChange={() => {
                    productDispatch({
                      type: 'SORT_BY_PRICE',
                      payload: 'lowToHigh',
                    });
                  }}
                  checked={sort === 'lowToHigh' ? true : false}
                />
              </Col>
              <Col sm>
                <Form.Check
                  inline
                  label="Descending"
                  name="group1"
                  type="radio"
                  id={`inline-2`}
                  onChange={() => {
                    productDispatch({
                      type: 'SORT_BY_PRICE',
                      payload: 'highToLow',
                    });
                  }}
                  checked={sort === 'highToLow' ? true : false}
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Check
                  inline
                  label="Desclude Out of Stock"
                  name="group1"
                  type="checkbox"
                  id={`inline-3`}
                  onChange={() => {
                    productDispatch({
                      type: 'FILTER_BY_STOCK',
                    });
                  }}
                  checked={byStock}
                />
              </Col>
              <Col sm>
                <Form.Check
                  inline
                  label="Fast Delivery Only"
                  name="group1"
                  type="checkbox"
                  id={`inline-4`}
                  onChange={() => {
                    productDispatch({
                      type: 'FILTER_BY_DELIVERY',
                    });
                  }}
                  checked={byFastDelivery}
                />
              </Col>
            </Row>
            <Row>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    productDispatch({
                      type: 'FILTER_BY_SEARCH',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form>
            </Row>
            <Row>
              <Col sm={2}>
                <label style={{ paddingRight: 10 }}>Rating: </label>
              </Col>
              <Col sm={4}>
                <Rating
                  rating={byRating}
                  onClick={(i) => {
                    productDispatch({
                      type: 'FILTER_BY_RATING',
                      payload: i + 1,
                    });
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </Col>
            </Row>
            <Button
              style={{ width: '100%' }}
              variant="warning"
              onClick={() =>
                productDispatch({
                  type: 'CLEAR_FILTERS',
                })
              }
            >
              Clear Filters
            </Button>
          </div>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Filters;
