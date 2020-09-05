import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleInputText = (e) => {
    setText(e.target.value);
  };

  const handleInputAmount = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            onChange={handleInputText}
            value={text}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            {" "}
            Amount
            <br />
            (negative - expense, postive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleInputAmount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
