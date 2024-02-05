import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{

    const newExpenseDataHandeller=(expenseData)=>{

        // console.log('data inside parent---->',expenseData)

        props.formDataHandeler(expenseData);

    }
    return (
        <div className='new-expense'>
            <ExpenseForm handelExpenseData={newExpenseDataHandeller}/>
            
        </div>
    )
}

export default NewExpense;