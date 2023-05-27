import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import Card from "../UI/Card";

function Expenses(props) {
  const [selectedYear, setYear] = useState("2023");

  const filterChangeSelectHandler = (selectedYear) => {
    console.log("---Expenses.js  -> filterChangeSelectHandler():");
    console.log(selectedYear);
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  const expensesListItems = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  const filteredExpensesListItems = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  let defaultView = <ExpensesList items={filteredExpenses} />;

  if (selectedYear === "all") defaultView = expensesListItems;

  console.log(expensesListItems);

  return (
    <Card className="expenses">
      <ExpensesFilter
        setDefaultYear={selectedYear}
        onSelect={filterChangeSelectHandler}
      />
      {defaultView}
    </Card>
  );
}

export default Expenses;

/*

let expensesContent = <p>No expenses found.</p>;

  console.log(filteredExpenses.length > 0);
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

{filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}


{filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
*/
