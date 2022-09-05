import { useState } from "react";
import axios from "axios"
const Createprod = () => {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [comments, setComments] = useState("");
  
  const handlSubmit = () => {
    // axios.post("")
  }
  return (
    <>
      <input
        type="text"
        placeholder="category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="prod name"
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="prod img"
        onChange={(e) => setProductImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="comments"
        onChange={(e) => setComments(e.target.value)}
      />
      <button onClick={handleSubmit}>create prod</button>
    </>
  );
};

export default Createprod;
