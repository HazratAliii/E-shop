import "./product.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SecondTopbar from "../secondTopbar/SecondTopbar";
import { Link } from "react-router-dom";
const Products = () => {
  const [category, setCategory] = useState([]);
  const { cat } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product?category=${cat}`)
      .then((docs) => {
        setCategory(docs.data);
        // console.log(docs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cat]);
  return (
    <>
      <SecondTopbar />
      <div className="prod-cont">
        {category.map((ca) => (
          <div key={ca._id}>
            <h1>{ca.productName}</h1>
            <Link to={`/products/${ca._id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
