import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { product, setProduct } = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((docs) => {
        console.log(docs.data);
        setProduct(docs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <h1>Sinle product page</h1>

      {product.map((p) => (
        <div key={p._id}>
          <h1>{p.productName}</h1>
        </div>
      ))}
    </>
  );
};

export default SingleProduct;
