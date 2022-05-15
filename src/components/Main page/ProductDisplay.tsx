import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Rating from "./Rating";
import { AppDispatch } from "../../Redux/store";
import {
  fetchAsyncProductsList,
  getProductsList,
  getproductsListStatus,
} from "../../Redux/Products/ProductSlice";
interface products {
  _id: string;
  image: string;
  name: string;
  rating: number;
  price: number;
  numReviews: number;
}
const ProductDisplay = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productsListStatus = useSelector(getproductsListStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductsList());
  }, [dispatch]);
  const products = useSelector(getProductsList);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="section">
            <div className="row ">
              {productsListStatus === "error" && (
                <div className="alert mt-3 alert-danger ">
                  <strong>error 500</strong>{" "}
                </div>
              )}
              {productsListStatus === "success" &&(
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-10 article">
                  <div className="grid">
                    <div className="row">
                      {products.map((product: products) => (
                        <div
                          className="card my-3 col-md-3 offset-md-1 col-sm-8 offset-sm-2  col-xs-6 offset-xs-2 "
                          key={product._id}
                        >
                          <Link to={`/products/${product._id}`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              width="100%"
                              height="100%"
                            />
                          </Link>

                          <div className="card-body  ">
                            <p className="card-title fs-sm-3">
                              <Link
                                to={`/products/${product._id}`}
                                className=" text-decoration-none"
                              >
                                {product.name}
                              </Link>
                            </p>
                          </div>

                          <div className="card-body">
                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3 className="card-text fw-bolder">
                              ${product.price}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Pagination */}
                    <Pagination />
                  </div>
                </div>
              )} 
              {productsListStatus === 'pending' &&(
                <>
                  <div className="d-flex justify-content-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
