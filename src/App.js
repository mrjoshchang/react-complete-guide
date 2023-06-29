import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'd1',
    title: 'Car Insurance',
    amount: 432.29,
    date: new Date(2023, 1, 23),
  },
  {
    id: 'd2',
    title: 'Car tires',
    amount: 1243.29,
    date: new Date(2022, 2, 1),
  },
  { id: 'd3', title: 'Car parts', amount: 68.29, date: new Date(2020, 3, 18) },
  {
    id: 'd4',
    title: 'Car accessories',
    amount: 1.29,
    date: new Date(2019, 11, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
