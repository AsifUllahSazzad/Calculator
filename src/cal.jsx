import { evaluate } from 'mathjs';
import React from "react";
import { useState } from "react";
import "./cal.css";

const Cal = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClear = () => {
    setInputValue("");
  };

  const display = (value) => {
    setInputValue(inputValue + value);
  };


const equal = () => {
  try {
    const result = evaluate(inputValue);
    setInputValue(result.toString());
  } catch (error) {
    alert("Invalid expression");
    console.log(error)
  }
};


  const del = () => {
    setInputValue(inputValue.slice(0,-1));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(inputValue) => setInputValue(inputValue.target.value)}
      />
      <div className="calculator-body">
        <button className="clear top left" onClick={handleClear}>
          C
        </button>
        <button className="divide top" onClick={() => display("/")}>
          /
        </button>
        <button className="multi top right" onClick={() => display("*")}>
          *
        </button>
        <button className="number left" onClick={() => display("7")}>
          7
        </button>
        <button className="number" onClick={() => display("8")}>
          8
        </button>
        <button className="number" onClick={() => display("9")}>
          9
        </button>
        <button className="subtraction right" onClick={() => display("-")}>
          -
        </button>
        <button className="number left" onClick={() => display("4")}>
          4
        </button>
        <button className="number" onClick={() => display("5")}>
          5
        </button>
        <button className="number" onClick={() => display("6")}>
          6
        </button>
        <button className="number right" onClick={() => display("+")}>
          +
        </button>
        <button className="number left" onClick={() => display("1")}>
          1
        </button>
        <button className="number" onClick={() => display("2")}>
          2
        </button>
        <button className="number" onClick={() => display("3")}>
          3
        </button>
        <button className="number right" onClick={() => equal()}>
          =
        </button>
        <button className="number left bottom" onClick={() => display("0")}>
          0
        </button>
        <button className="number bottom" onClick={() => display("00")}>
          00
        </button>
        <button className="number bottom" onClick={() => display(".")}>
          .
        </button>
        <button className="number right bottom" onClick={() => del()}>
          DEL
        </button>
      </div>
    </div>
  );
};

export default Cal;
