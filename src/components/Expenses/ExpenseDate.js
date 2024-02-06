import './ExpenseDate.css'
import React from 'react';

function ExpenseDate(props){

    console.log('date===>',props.date)
    let d=props.date;

    if (typeof d=='string'){
         d = new Date(props.date);
    }
    const month=d.toLocaleString('en-Us',{month:'long'})
    const year=d.getFullYear();
    const day=d.toLocaleString('en-Us',{day:'2-digit'});
    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>

    );
}

export default ExpenseDate;