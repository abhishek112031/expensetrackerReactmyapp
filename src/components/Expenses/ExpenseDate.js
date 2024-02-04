import './ExpenseDate.css'
import React from 'react';

function ExpenseDate(props){
    const month=props.date.toLocaleString('en-Us',{month:'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-Us',{day:'2-digit'});
    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{day}</div>
            <div className='expense-date__day'>{year}</div>
        </div>

    );
}

export default ExpenseDate;