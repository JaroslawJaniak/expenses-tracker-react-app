import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeSelectHandler = (selectedYear) => {
    console.log("---Expenses.js  -> filterChangeSelectHandler():");
    console.log(selectedYear);
    setFilteredYear(selectedYear);

    const newArrayFilteredByYear = props.items.filter(
      (expense) => expense.date.getFullYear() == selectedYear
    );
  };

  const listExpensesItems = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <Card className="expenses">
      <ExpensesFilter
        setDefaultYear={filteredYear}
        onSelect={filterChangeSelectHandler}
      />

      {props.items
        .filter((expense) => expense.date.getFullYear() == filteredYear)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      {
        //hard-coded
      }
      <label>hard-coded part - 'Expenes.js':</label>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </Card>
  );
}

export default Expenses;
