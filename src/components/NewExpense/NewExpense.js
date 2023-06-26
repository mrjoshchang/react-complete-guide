import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React from 'react';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredEspenseData) => {
    const expenseData = {
      ...enteredEspenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
