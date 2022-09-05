import "./categories.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import One from "../images/one.jpg";
import Two from "../images/two.jpg";
import Three from "../images/three.jpg";
import Four from "../images/four.jpg";
import Five from "../images/five.jpg";
import Product from "../pages/products/Product";
const Categories = () => {
  return (
    <>
      <div className="cat-wrapper">
        <Row>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Col>
              <div className="primary">
                <img src={One} alt="" className="cat-img" />
                <div className="secondary">
                  <h4>Summer Shop</h4>
                  <Link to="/products/summer">
                    <button>Shop here</button>
                  </Link>
                </div>
              </div>
            </Col>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Col>
              <div className="primary">
                <img src={Two} alt="" className="cat-img" />
                <div className="secondary">
                  <h4>Winter Shop</h4>
                  <Link to="/products/winter">
                    <button>Shop here</button>
                  </Link>
                </div>
              </div>
            </Col>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Col>
              <div className="primary">
                <img src={Three} alt="" className="cat-img" />
                <div className="secondary">
                  <h4>Jackets</h4>
                  <Link to="/products/jackets">
                    <button>Shop here</button>
                  </Link>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </div>
      <div className="cat-wrapper2">
        <Row>
          <div className="col-lg-6 col-sm-12">
            <Col>
              <div className="primary">
                <img src={Five} alt="" className="cat-img" />
                <div className="secondary">
                  <h4>Jeans</h4>
                  <Link to="/products/jeans">
                    <button>Shop here</button>
                  </Link>
                </div>
              </div>
            </Col>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Col>
              <div className="primary">
                <img src={Four} alt="" className="cat-img" />
                <div className="secondary">
                  <h4>Shirts</h4>
                  <Link to="/products/shirts">
                    <button>Shop here</button>
                  </Link>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Categories;
