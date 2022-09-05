import "./porduct.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecondTopbar from "../../secondTopbar/SecondTopbar";
import axios from "axios";

const Product = () => {
  const [category, setCategory] = useState([]);
  const { cat } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product?category=${cat}`)
      .then((docs) => {
        setCategory(docs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cat]);
  console.log(cat);
  return (
    <>
      <SecondTopbar />
      <div className="prod-parent">
        <div className="prod-sparent">
          <div>
            <select id="size">
              <option value="volvo">Large</option>
              <option value="saab">Extra Large</option>
              <option value="opel">Medium</option>
              <option value="audi">Small</option>
            </select>
          </div>
          <div>
            <select id="color">
              <option value="volvo">Red</option>
              <option value="saab">Green</option>
              <option value="opel">Yellow</option>
            </select>
          </div>
        </div>
        <div>
          <select id="sort">
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
        </div>
      </div>
      {category.map((cat) => (
        <div key={cat._id}>
          <h1>{cat.productName}</h1>
        </div>
      ))}
    </>
  );
};

export default Product;
