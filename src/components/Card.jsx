import React from "react";
import { useState } from "react";

function Card({ heading, question, answer }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e, id) => {
    const value = e.target.value;
    setInputValue(value);
    answer(value, id);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">{heading}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{question}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{inputValue}</cite>
            </footer>
          </blockquote>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Enter you answer here"
              value={inputValue}
              onChange={(e) => handleChange(e, heading)}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Card;
