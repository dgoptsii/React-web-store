import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete, AiOutlineSmile } from 'react-icons/ai';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            MEME <AiOutlineSmile />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <LinkContainer to="/">
              <Nav.Link>Hello</Nav.Link>
            </LinkContainer>
            <LinkContainer className="me-2" to="/shop">
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>

            <Dropdown className="me-2">
              <Dropdown.Toggle variant="warning">
                <FaShoppingCart color="white" fontSize="25px" />
                <span className="mx-1">{cart.length}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 400 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>$ {prod.price.split('.')[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                  </>
                ) : (
                  <span style={{ padding: 10, textAlign: 'center' }}>
                    Cart is Empty!
                  </span>
                )}
                <Link to="/cart">
                  <Button
                    variant="outline-dark"
                    style={{ width: '95%', margin: '0 10px' }}
                  >
                    Go To Cart
                  </Button>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
