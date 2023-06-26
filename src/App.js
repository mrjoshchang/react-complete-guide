import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 432.29, date: new Date(2023, 5, 18) },
    { title: 'Car tires', amount: 1243.29, date: new Date(2023, 5, 18) },
    { title: 'Car parts', amount: 68.29, date: new Date(2023, 5, 18) },
    { title: 'Car accessories', amount: 1.29, date: new Date(2023, 5, 18) },
  ];

  const addExpenseHandler = (expense) => {
    console.log('in App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
