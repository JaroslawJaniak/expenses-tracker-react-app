import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addNewExpenseState, setAddNewExpenseState] = useState(false);

  const addNewExpenseHandler = () => {
    console.log("click!");
    setAddNewExpenseState(true);
  };

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    console.log("---NewExpense.js -> saveExpenseDateHandler()");
    console.log(expenseData);

    props.onAddNewExpenseData(expenseData);
  };

  const cancelExpenseForm = (buttonState) => {
    setAddNewExpenseState(false);
  };

  let defaultExpenseFormUI = (
    <button onClick={addNewExpenseHandler}>Add New Expense</button>
  );

  if (addNewExpenseState === true) {
    defaultExpenseFormUI = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDateHandler}
        onCancelExpenseForm={cancelExpenseForm}
      />
    );
  }

  return <div className="new-expense">{defaultExpenseFormUI}</div>;
};

export default NewExpense;
