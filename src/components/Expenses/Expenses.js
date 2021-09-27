import React, { useState } from "react";

import ExpenseItem from './Expenseltem';
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear)
    }

    // const filteredExpenses =props.items.filter(expense=>{
    //     return expense.date.getFullYear().toString() === filteredYear;
    // })
    const sortByDesecending = props.items.sort((a,b)=>{
        
        return new Date(a.date.toLocaleString()).getTime() - new Date(b.date.toLocaleString()).getTime();
    
    });

     const filteredExpenses = sortByDesecending.filter(expense=>{
         return expense.date.getFullYear().toString() === filteredYear;
     })


    console.log(props.items);
console.log(sortByDesecending);


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                {filteredExpenses.map((expense) => (
                    <ExpenseItem 
                    key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};
export default Expenses;

