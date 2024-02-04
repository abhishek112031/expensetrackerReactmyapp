
import ExpenseDate from './ExpenseDate';
import React from 'react';
import { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props){
    
    const [inputTitle,setInputTitle]=useState('');//INPUT BOX VALUE-CHANGEhANDELER
    
    const [title,setTitle]=useState(props.title);//TITLE CHANGE-CLICKHANDELLER


    const clickHandeller=()=>{
        setTitle(inputTitle);
    }

    const changeHandeler=(event)=>{

        setInputTitle(event.target.value)

    }

    // console.log('===>',props.date)
   
    return (
        <Card className='expense-item'> 
           
               <ExpenseDate
               date={props.date}
               />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <input type='text' value={inputTitle} onChange={changeHandeler} ></input>
            <button onClick={clickHandeller}>click</button>

        </Card>
    );
}

export default ExpenseItem;