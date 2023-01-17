import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    console.log("---NewExpense.js -> saveExpenseDateHandler()");
    console.log(expenseData);

    props.onAddNewExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
