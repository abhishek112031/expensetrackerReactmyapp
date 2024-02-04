
import React from 'react';
import Expenses from './components/Expenses/Expenses';
function App() {

    let expenses = [
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
    return (
        <div>
            <h1>Lets get started!</h1>
            <Expenses
            items={expenses}
            />
         
        </div>
    )
}
export default App