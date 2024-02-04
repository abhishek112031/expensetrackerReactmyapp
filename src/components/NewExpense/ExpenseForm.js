import React,{useState} from 'react';
import './ExpenseForm.css';


const  ExpenseForm=()=>{


    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');


    const titleChangeHandeler=(event)=>{
        setEnteredTitle(event.target.value);

    }
    const amountChangeHandeler=(event)=>{
        setEnteredAmount(event.target.value);

        
    }
    const dateChangeHandeler=(event)=>{
        setEnteredDate(event.target.value);
        
    }

    const buttonSubmitHandeller=(e)=>{
        e.preventDefault();
     
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        console.log('expenseData==>',expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return(
        <form onSubmit={buttonSubmitHandeller}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandeler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandeler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandeler}/>
                </div>
            </div>
            <div className='new-expense__action'>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;