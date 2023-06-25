import React, { useState } from 'react';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.title);
    // setUserInput({ ...userInput, title: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.title);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.title);
  };

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === 'title') setEnteredTitle(value);
  //   else if (identifier === 'date') setEnteredDate(value);
  //   else if (identifier === 'amount') setEnteredAmount(value);
  // };
  // Call it using:    onChange={(event) =>
  //   inputChangeHandler('title', event.target.value)
  // }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2023-01-01"
            step="2024-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
