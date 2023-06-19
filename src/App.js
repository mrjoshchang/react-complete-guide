import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 432.29, date: new Date(2023, 5, 18) },
    { title: 'Car tires', amount: 1243.29, date: new Date(2023, 5, 18) },
    { title: 'Car parts', amount: 68.29, date: new Date(2023, 5, 18) },
    { title: 'Car accessories', amount: 1.29, date: new Date(2023, 5, 18) },
  ];

  return (
    <div>
      <h1>Fuck off!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
