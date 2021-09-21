//this component about rendering the date if an expense
import React from "react";
import './ExpenseDate.css';

const  ExpenseDate= (props)=> {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const Day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const Year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month" >{month}</div>
            <div className="expense-date__Year">{Year}</div>
            <div className="expense-date__Day">{Day}</div>
        </div>
    )
}

export default ExpenseDate;