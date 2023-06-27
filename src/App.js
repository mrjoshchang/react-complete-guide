import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'd1',
    title: 'Car Insurance',
    amount: 432.29,
    date: new Date(2023, 5, 18),
  },
  {
    id: 'd2',
    title: 'Car tires',
    amount: 1243.29,
    date: new Date(2022, 5, 18),
  },
  { id: 'd3', title: 'Car parts', amount: 68.29, date: new Date(2020, 5, 18) },
  {
    id: 'd4',
    title: 'Car accessories',
    amount: 1.29,
    date: new Date(2019, 5, 18),
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
