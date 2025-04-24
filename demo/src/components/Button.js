import React from "react";

function Button(props) {
  return (
    <button
      onClick={() => {
        props.setCount((copunt) => count + 1);
      }}
    >
      Increase Count
    </button>
  );
}

export default Button;
