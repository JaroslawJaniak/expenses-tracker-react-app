import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    console.log("---App.js -> addExpenseHandler():");
    console.log(newExpense);

    //setNewData([...newArray, newExpense]);
    setExpenses((prevArray) => {
      return [newExpense, ...prevArray];
      //return [...prevArray, newExpense];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Expenses Tracker</h1>
      </header>
      <NewExpense onAddNewExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
