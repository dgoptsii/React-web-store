import { CartState } from '../context/Context';
import Filters from './Filters';
import Pagination from './Pagination';
import { useState } from 'react';
import SingleProduct from './SingleProduct';
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import React from 'react';
import { FaRegSadCry } from 'react-icons/fa';

const Home = () => {
  const {
    state: { currentPage },
    dispatch,
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const pageLimitItems = 6;
  const [total, setTotal] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(null);
  const [postsPerPage] = useState(6);

  const generateUrl = () => {
    const baseUrl = 'http://localhost:3000/posts?';
    let url = baseUrl;
    if (sort === 'lowToHigh') {
      url += '_sort=price&_order=asc&';
    } else if (sort === 'highToLow') {
      url += '_sort=price&_order=desc&';
    }
    if (searchQuery && searchQuery !== '') {
      url += `q=${searchQuery}&`;
    }
    if (byStock) {
      url += `available=true&`;
    }
    if (byFastDelivery) {
      url += `fastDelivery=true&`;
    }
    if (byRating) {
      url += `ratings=${byRating}&`;
    }
    return url;
  };

  React.useEffect(() => {
    fetch(generateUrl() + `_page=${currentPage}&_limit=${pageLimitItems}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setCurrentPosts(resp);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentPage, sort, byStock, byFastDelivery, byRating, searchQuery]);

  React.useEffect(() => {
    dispatch({
      type: 'SET',
      payload: currentPosts,
    });
    fetch(generateUrl())
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTotal(resp.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sort, byStock, byFastDelivery, byRating, searchQuery]);

  const paginate = (pageNumber) => {
    dispatch({
      type: 'SET_PAGE',
      payload: pageNumber,
    });
  };

  var innerPage;

  if (currentPosts == null) {
    innerPage = (
      <div className="spinner-main d-flex flex-column align-items-center justify-content-center">
        <div className="spinner-grow text-warning" role="status"></div>
        <span className="text-light my-4">
          Wait a second, we are looking for items you need...
        </span>
      </div>
    );
  } else if (currentPosts.length > 0) {
    innerPage = (
      <div>
        <Row>
          {currentPosts.slice(0, 3).map((prod) => (
            <Col sm={4}>
              <SingleProduct prod={prod} key={prod.id} />
            </Col>
          ))}
        </Row>
        <Row>
          {currentPosts.slice(3, currentPosts.length).map((prod) => (
            <Col sm={4}>
              <SingleProduct prod={prod} key={prod.id} />
            </Col>
          ))}
        </Row>
      </div>
    );
  } else {
    innerPage = (
      <div className="my-4 d-flex flex-column text-light align-items-center justify-content-center">
        <span>Sorry, nothing found </span>
        <h2>
          <FaRegSadCry />
        </h2>
      </div>
    );
  }

  return (
    <div className="back">
      <div className="mx-4 d-flex justify-content-center flex-column align-items-center ">
        <Filters />
        {innerPage}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={total}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
