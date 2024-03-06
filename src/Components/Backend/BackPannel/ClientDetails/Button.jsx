import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <div>
        <button
          type="button"
          id="btn"
          class="text-white  font-medium rounded-lg text-base  px-8 py-2 text-center me-2 mb-2"
        >
          Regular
        </button>
      </div>
    </div>
  );
};

export default Button;
