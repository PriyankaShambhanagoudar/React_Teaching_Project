import React, { useState } from "react";

import ExpenseItem from "./Expenseltem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // const filteredExpenses =props.items.filter(expense=>{
  //     return expense.date.getFullYear().toString() === filteredYear;
  // })
  const filteredExpenses = props.items
    .sort(
      (a, b) =>
        new Date(a.date.toLocaleString()).getTime() -
        new Date(b.date.toLocaleString()).getTime()
    )
    .filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );

  let expenseContent = <p>No Expenses Found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};
export default Expenses;
