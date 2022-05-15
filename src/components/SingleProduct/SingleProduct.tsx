import React, { ReactEventHandler, useEffect, useState } from "react";
import Navigation from "../Navbar/Navigation";
import Rating from "../Main page/Rating";
import { Link, useHistory } from "react-router-dom";
import Message from "../LoadingError/Error";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";

import {
  fetchAsyncSingleProduct,
  getSingleProduct,
  getsingleProductStatus,
} from "../../Redux/Products/ProductSlice";
import { useSelector } from "react-redux";
import {
  fetchAddedItem,
  getCartItem,
  getTotal,
} from "../../Redux/Cart/CartSlice";

interface Prod {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

const SingleProduct = () => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(getSingleProduct);
  const status = useSelector(getsingleProductStatus);
  const total = useSelector(getTotal);

  useEffect(() => {
    dispatch(fetchAsyncSingleProduct(id));
  }, [dispatch, id]);
  const history = useHistory();
  const qtySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQty(+e.target.value);
  };
  const addToCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchAddedItem({ id, quantity: qty }));

    history.push(`/cart/${id}?qty=${qty}`);
  };

  return (
    <>
      <Navigation />
      {status === "error" && (
        <div className="alert mt-5 alert-danger ">
          <strong>error 500</strong>{" "}
        </div>
      )}
      {status === "success" && (
        <div className="container single-product">
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                  </div>
                  <p>{product.description}</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>${product.price}</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                      {product.countInStock > 0 ? (
                        <span>In Stock</span>
                      ) : (
                        <span>unavailable</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Reviews</h6>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />
                    </div>
                    {product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantity</h6>
                          <select onChange={qtySelect}>
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <button
                          className="round-black-btn"
                          onClick={addToCartHandler}
                        >
                          Add To Cart
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RATING */}
          <div className="row my-5">
            <div className="col-md-6">
              <h6 className="mb-3">REVIEWS</h6>
              <Message variant={"alert-info mt-3"}>No Reviews</Message>
              <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                <strong>Admin Doe</strong>
                <Rating value={0} text={""} />
                <span>Jan 12 2021</span>
                <div className="alert alert-info mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h6>WRITE A CUSTOMER REVIEW</h6>
              <div className="my-4"></div>

              <form>
                <div className="my-4">
                  <strong>Rating</strong>
                  <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                </div>
                <div className="my-4">
                  <strong>Comment</strong>
                  <textarea
                    rows={3}
                    className="col-12 bg-light p-3 mt-2 border-0 rounded"
                  ></textarea>
                </div>
                <div className="my-3">
                  <button className="col-12 bg-black border-0 p-3 rounded text-white">
                    SUBMIT
                  </button>
                </div>
              </form>
              <div className="my-3">
                <Message variant={"alert-warning"}>
                  Please
                  <Link to="/login" className="text-decoration-none">
                    " <strong>Login</strong> "
                  </Link>
                  to write a review
                </Message>
              </div>
            </div>
          </div>
        </div>
      )}
      {status === "pending" && (
        <>
          <div className=" mt-5 d-flex justify-content-center">
            <div
              className="spinner-grow"
              style={{ width: "4rem", height: "4rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="ms-2 mt-3 d-flex justify-content-center">
            <h1>Loading...</h1>
          </div>
        </>
      )}
    </>
  );
};

export default SingleProduct;
