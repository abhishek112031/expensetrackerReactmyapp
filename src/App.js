
import React,{useState,useEffect} from 'react';
import Expenses from './components/Expenses/Expenses';
import axios from 'axios';


import NewExpense from './components/NewExpense/NewExpense';

function App() {

    const [expenses,setExpense]=useState([]);
    useEffect(() => {
        // Fetch expenses data using Axios
        axios.get('http://localhost:4000/get-expenses')
            .then(response => {
                setExpense(response.data.allExpenses);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // empty dependency array means this effect runs only once, similar to componentDidMount


    const formDataHandeler=(data)=>{
        const newExpenseData={
            
            ...data
        }

        axios.post('http://localhost:4000/add-expense', newExpenseData) // Update with your server address
      .then(response => {
        // setExpense(prevExpenses => [response.data.newExpense, ...prevExpenses]);
        const newDataArr=[newExpenseData,...expenses]
        setExpense(newDataArr);
      })
      .catch(error => {
        console.error('Error adding new expense:', error);
      });
     
   

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