import React from "react";

const Topbar = () => {
  return (
    <>
      <div
        style={{
          height: "30px",
          width: "100%",
          color: "white",
          backgroundColor: "teal",
          position: "fixed",
        }}
      >
        {" "}
        <p>Super Deal! Free Shippinig on Orders Over $50</p>
      </div>
    </>
  );
};

export default Topbar;
