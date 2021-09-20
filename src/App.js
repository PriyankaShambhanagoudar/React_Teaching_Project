// //old react project 
// import React from "react";

 import ExpenseItem from "./components/Expenseltem";



// function App() {

//   const expenses = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     {
//       id: 'e2', title: 'New TV',
//       amount: 799.49,
//       date: new Date(2021, 2, 12)
//     },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];

//   //difficult to create dom  each element when its 100 or 1000 more thn this
//   // const para = document.createElement('p')
//   // para.textContent="This is also visiable"
//   // document.getElementById('root').appendChild(para)
//   //old way creating react project

//   /* return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, "Let's get started!"),
//     React.createElement(Expenses, { item: expenses })
//   ); */


//   return (
//     //easy to create 

//     <div>
//       {/* JSX code */}
//       <h2>Let's get started!</h2>
//       <Expenses items={expenses} />
//     </div>
//   );
// }

// export default App;

function App(){
    const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2', title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
 
    //difficult to create dom  each element when its 100 or 1000 more thn this
  // const para = document.createElement('p')
  // para.textContent="This is also visiable"
  // document.getElementById('root').appendChild(para)
  //old way creating react project


   /* return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses, { item: expenses })   ); */

    //   return (
//     //easy to create 

//     <div>
//       {/* JSX code */}
//       <h2>Let's get started!</h2>
//       <Expenses items={expenses} />
//     </div>
//   );
// }

  return(
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
       title={expenses[0].title}
       amount={expenses[0].amount}
       date={expenses[0].date}      
      />
      <ExpenseItem 
       title={expenses[1].title}
       amount={expenses[1].amount}
       date={expenses[1].date}
       />
      <ExpenseItem
       title={expenses[2].title}
       amount={expenses[2].amount}
       date={expenses[2].date}
      />
      <ExpenseItem
       title={expenses[3].title}
       amount={expenses[3].amount}
       date={expenses[3].date}
       />
    </div>
  )
}
export default App;