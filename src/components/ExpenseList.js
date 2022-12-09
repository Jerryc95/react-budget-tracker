import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext)
    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setFilteredExpenses(expenses);
    },[expenses]);

    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense) => 
            filteredExpense.name.toLowerCase().includes(event.target.value)
        )
        setFilteredExpenses(searchResults)
    }

  return (
    <>
    <input 
    type='text'
    placeholder='Search expense...'
    className='form-control mb-2 mr-sm-2'
    onChange={handleChange}
    />
     <ul className="list-group">
      {filteredExpenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
    </>
  );
};

export default ExpenseList;