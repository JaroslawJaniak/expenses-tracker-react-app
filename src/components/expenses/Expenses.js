import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";

function Expenses(props) {
  const [selectedYear, setYear] = useState("2019");

  const filterChangeSelectHandler = (selectedYear) => {
    console.log("---Expenses.js  -> filterChangeSelectHandler():");
    console.log(selectedYear);
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  const listExpensesItems = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.lenght > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        setDefaultYear={selectedYear}
        onSelect={filterChangeSelectHandler}
      />
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
    </Card>
  );
}

export default Expenses;

/*
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
