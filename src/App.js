// //old way react project  import React from React in all react component files 
import React from "react";
 import Expenses from "./components/Expenses";

function App() {

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
// return React.createElement(
//   'div',
//   {}, 
//   React.createElement('h2', {}, "Let's get started!"),
//   React.createElement(Expenses, {items:expenses})
//    );


    //easy to create 
//JSX code
  return (
    <div>     
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
 }

export default App;







