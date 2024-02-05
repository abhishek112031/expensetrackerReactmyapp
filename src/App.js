
import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';
let dummy_expenses = [
    {
        id: 'e1',
        title: 'school fee',
        amount: 250,
        date: new Date(2021, 5, 12)
    },
    {
        id: 'e2',
        title: 'car Insurence',
        amount: 1250,
        date: new Date(2021, 5, 13)
    },
    {
        id: 'e3',
        title: 'House Rent',
        amount: 2150,
        date: new Date(2021, 5, 13)
    },
    {
        id: 'e4',
        title: 'Movie tickets',
        amount: 350,
        date: new Date(2021, 5, 10)
    }
]
function App() {

    const [expenses,setExpense]=useState(dummy_expenses)


    const formDataHandeler=(data)=>{
        const newExpenseData={
            id:Math.random().toFixed(3).toString(),
            ...data
        }
        console.log('=======>',newExpenseData)
        // dummy_expenses.unshift(newExpenseData);
        const newDataArr=[newExpenseData,...expenses]
        setExpense(newDataArr);

    }

    return (
        <div>
            <NewExpense formDataHandeler={formDataHandeler}/>

            <Expenses
            items={expenses}
            />
         
        </div>
    )
}
export default App