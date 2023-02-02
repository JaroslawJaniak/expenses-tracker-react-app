import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [cancelButtonState, setCancelButtonState] = useState(false);
  const [addExpenseButtonState, setAddExpenseButtonState] = useState(false);

  const titleChangeHandler = (event) => {
    console.log(event);
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log("---ExpenseForm.js -> submitHandler():");
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onCancelExpenseForm(cancelButtonState);
  };

  const cancelClickHandler = () => {
    setCancelButtonState(true);
    props.onCancelExpenseForm(cancelButtonState);
  };

  const addExpenseClickHandler = () => {
    setCancelButtonState(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="button" onClick={cancelClickHandler}>
          Cancel
        </button>
        <button className="button" type="submit">
          Add expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
