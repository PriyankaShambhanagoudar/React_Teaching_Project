//ExpenseItem component is about outputting an expense item
//import React from "react";
import ExpenseDate from './ExpenseDate';
//import Card from './Card'
import './ExpenseItem.css';

// function ExpenseItem(props) {


//     return (
//         <Card className="expense-item ">
//             <ExpenseDate date={props.date} />
//             <div className="expense-item__description" >
//                 <h2>{props.title}</h2>
//                 <div className="expense-item__price">${props.amount}</div>
//             </div>

//         </Card>
//     );
// }

// export default ExpenseItem;

function ExpenseItem(props){
   
    return (
        <div className="expense-item " >
          <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;