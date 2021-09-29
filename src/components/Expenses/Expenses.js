import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesLists from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesLists items={filteredExpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
