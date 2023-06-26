import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');
  const [filterInfoText, setFilterInfoText] = useState(
    '2019, 2020, 2021, & 2022'
  );

  const expenseFilterHandler = (selectedYear) => {
    console.log('in Expense.js');
    console.log(selectedYear);
    setFilteredYear(selectedYear);
    if (selectedYear === '2019') {
      setFilterInfoText('2020, 2021, 2022, & 2023');
    } else if (selectedYear === '2020') {
      setFilterInfoText('2019, 2021, 2022, & 2023');
    } else if (selectedYear === '2021') {
      setFilterInfoText('2019, 2020, 2022, & 2023');
    } else if (selectedYear === '2022') {
      setFilterInfoText('2019, 2020, 2021, & 2023');
    } else if (selectedYear === '2023') {
      setFilterInfoText('2019, 2020, 2021, & 2022');
    }
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onExpenseFilter={expenseFilterHandler}
        ></ExpenseFilter>
        <p>Data for years {filterInfoText} is hidden.</p>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
